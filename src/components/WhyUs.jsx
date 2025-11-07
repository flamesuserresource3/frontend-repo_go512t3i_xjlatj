import { Leaf, Timer, ShieldCheck } from "lucide-react";

export default function WhyUs() {
  const items = [
    {
      icon: <Timer className="h-5 w-5 text-teal-700" />,
      title: "Same-day Delivery",
      desc: "Cut-off 11 AM. Delivered fresh across Hyderabad by evening.",
    },
    {
      icon: <Leaf className="h-5 w-5 text-teal-700" />,
      title: "Sustainably Sourced",
      desc: "Partnered with Andhra coastal harbors and river fishers.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-teal-700" />,
      title: "Hygienic Processing",
      desc: "Cleaned, de-scaled, and cut per your preference.",
    },
  ];

  return (
    <section id="why-us" className="bg-gradient-to-b from-white to-teal-50 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Why Hyderabad chooses us for seafood
          </h2>
          <p className="mt-2 text-slate-600">
            Every order is handled like it’s for our family dinner. Quality you
            can taste, convenience you’ll love.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50">
                {it.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {it.title}
              </h3>
              <p className="mt-1 text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
