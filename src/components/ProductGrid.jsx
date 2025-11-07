import React from 'react';
import { Plus, Leaf, Droplets } from 'lucide-react';

const products = [
  {
    id: 'prawns-lg',
    name: 'Tiger Prawns (Large)',
    origin: 'Kakinada Coast',
    img: 'https://images.unsplash.com/photo-1607301405390-7b52b91cb8f2?q=80&w=1600&auto=format&fit=crop',
    price: 799,
    unit: '500g',
    tags: ['Deveined', 'Cleaned'],
  },
  {
    id: 'rohu',
    name: 'Rohu Fillet',
    origin: 'Godavari River',
    img: 'https://images.unsplash.com/photo-1615141982883-c7adf6fd5e44?q=80&w=1600&auto=format&fit=crop',
    price: 299,
    unit: '500g',
    tags: ['Boneless'],
  },
  {
    id: 'sear',
    name: 'Seer Fish (Vanjaram) Steaks',
    origin: 'Vizag Harbor',
    img: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?q=80&w=1600&auto=format&fit=crop',
    price: 899,
    unit: '500g',
    tags: ['Prime Cut'],
  },
  {
    id: 'crab',
    name: 'Mud Crab',
    origin: 'Krishna Delta',
    img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1600&auto=format&fit=crop',
    price: 649,
    unit: '500g',
    tags: ['Live on Arrival'],
  },
];

const ProductCard = ({ item, onAdd }) => {
  return (
    <div className="group rounded-2xl border bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img src={item.img} alt={item.name} className="h-48 w-full object-cover" />
        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs text-gray-700 shadow">
          <Droplets size={14} /> Fresh
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-gray-900 leading-tight">{item.name}</h3>
            <p className="text-xs text-gray-500 mt-0.5">{item.origin}</p>
          </div>
          <div className="text-right">
            <div className="text-teal-700 font-semibold">₹{item.price}</div>
            <div className="text-[10px] text-gray-500">{item.unit}</div>
          </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span key={t} className="inline-flex items-center gap-1 rounded-full bg-teal-50 text-teal-700 px-2 py-0.5 text-[10px]">
              <Leaf size={12} /> {t}
            </span>
          ))}
        </div>
        <button
          onClick={() => onAdd(item)}
          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-3 py-2 text-white text-sm font-medium hover:bg-teal-700"
        >
          <Plus size={16} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

const ProductGrid = ({ onAdd }) => {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-12">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Today’s Hyderabad Specials</h2>
          <p className="text-gray-600 text-sm mt-1">Picked at dawn from Andhra coast and rivers, delivered chilled.</p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} item={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
