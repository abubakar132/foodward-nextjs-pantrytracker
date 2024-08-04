// components/InventoryItem.tsx
import React from 'react';

interface InventoryItemProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const InventoryItem: React.FC<InventoryItemProps> = ({ image, name, price, quantity }) => {
  return (
    <div className="p-4 m-2 bg-white rounded shadow-md">
      <img src={image} alt={name} className="w-12 h-12 mx-auto" />
      <div className="text-center">
        <h3 className="text-lg font-bold">{name}</h3>
        <p>${price.toFixed(2)}</p>
        <p>Qty: {quantity}</p>
      </div>
    </div>
  );
};

export default InventoryItem;
