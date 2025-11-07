import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import WhyUs from "./components/WhyUs";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Coast & River Seafood — Fresh from
            Andhra Pradesh to Hyderabad.
          </p>
          <p className="text-sm text-slate-500">
            FSSAI compliant • Vacuum packed • Temperature controlled logistics
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAdd = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar cartCount={cart.reduce((a, c) => a + c.qty, 0)} />
      <main>
        <Hero />
        <ProductGrid onAdd={handleAdd} />
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
}
