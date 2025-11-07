import { ShoppingCart, Fish, MapPin } from "lucide-react";

export default function Navbar({ cartCount = 0 }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white shadow">
            <Fish className="h-6 w-6" />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-900">
              Coast & River Seafood
            </p>
            <p className="flex items-center gap-1 text-xs text-slate-500">
              <MapPin className="h-3.5 w-3.5" /> Hyderabad Delivery
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#products"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 md:block"
          >
            Shop
          </a>
          <a
            href="#why-us"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 md:block"
          >
            Why Us
          </a>
          <button
            type="button"
            className="relative inline-flex items-center gap-2 rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white shadow">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
