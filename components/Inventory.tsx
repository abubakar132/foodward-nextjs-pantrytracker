// components/Inventory.tsx
"use client"; 
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
    e.preventDefault(); // Ensure the drop is handled

    const name = e.dataTransfer.getData('name');
    if (name) {
      const item = { 
        id: Date.now().toString(), 
        image: '/path/to/image', // Update with actual image path or data
        name, 
        price: 10, 
        quantity: 1 
      }; 
      setItems((prevItems) => [...prevItems, item]);
      setTotalCost((prevTotal) => prevTotal + item.price);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F3F6FE]">
      <h1 className="text-2xl font-bold mb-4">My Inventory</h1>
      <div className="relative">
        <div className="absolute top-0 right-0 bg-[#6985C0] text-white rounded-full px-4 py-2">
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
