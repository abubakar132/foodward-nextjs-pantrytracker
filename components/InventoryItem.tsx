"use client";

import React from 'react';

interface InventoryItemProps {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const InventoryItem: React.FC<InventoryItemProps> = ({ image, name, price, quantity }) => {
  return (
    <div className="p-4 bg-secondary rounded-lg shadow-md flex flex-col items-center">
      <img src={image} alt={name} className="w-16 h-16" />
      <h2 className="text-lg font-bold">{name}</h2>
      <p>${price.toFixed(2)}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default InventoryItem;
