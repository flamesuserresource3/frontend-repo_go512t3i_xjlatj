import React from 'react';
import { Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Fresh Seafood, Delivered Same‑Day Across Hyderabad
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Sourced every morning from Andhra Pradesh's coast and river belts —
            Kakinada, Visakhapatnam, Godavari, and Krishna deltas. Cleaned, portioned,
            and packed in chilled boxes so it reaches you peak‑fresh.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#products" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-5 py-3 text-white font-medium hover:bg-teal-700">
              Shop Today's Catch
            </a>
            <a href="#sourcing" className="inline-flex items-center justify-center rounded-lg border px-5 py-3 font-medium hover:bg-gray-50">
              How We Source
            </a>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
            <Star className="text-amber-500" size={16} />
            4.9/5 rated by home chefs and restaurants in HYD
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1600&auto=format&fit=crop"
            alt="Fresh seafood assortment"
            className="w-full h-80 md:h-[420px] object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 w-56">
            <div className="text-sm font-semibold">Same‑Day Delivery</div>
            <div className="text-xs text-gray-500">Order before 12 PM for evening delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
