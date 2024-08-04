// components/Inventory.tsx
"use client"; // Add this at the top of the file

import React, { useState } from 'react';
import InventoryItem from './InventoryItem';

interface Item {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const Inventory: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [totalCost, setTotalCost] = useState(0);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const name = e.dataTransfer.getData('name');
    const item = { id: Date.now().toString(), image: '/path/to/image', name, price: 10, quantity: 1 }; // Example item
    setItems([...items, item]);
    setTotalCost(totalCost + item.price);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg">
      <h1 className="text-2xl font-bold mb-4">My Inventory</h1>
      <div className="relative">
        <div className="absolute top-0 right-0 bg-primary text-white rounded-full px-4 py-2">
          Total Cost: ${totalCost.toFixed(2)}
        </div>
        <div
          className="w-full max-w-xl p-8 bg-white rounded-lg shadow-md"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-3 gap-4">
            {items.map((item) => (
              <InventoryItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
