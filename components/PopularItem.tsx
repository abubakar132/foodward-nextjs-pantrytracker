"use client";

import React from 'react';

interface PopularItemProps {
  id: string;
  image: string;
  name: string;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, name: string) => void;
}

const PopularItem: React.FC<PopularItemProps> = ({ image, name, onDragStart }) => {
  return (
    <div
      className="p-4 bg-secondary rounded-lg shadow-md flex flex-col items-center cursor-pointer"
      draggable
      onDragStart={(e) => onDragStart(e, name)}
    >
      <img src={image} alt={name} className="w-16 h-16" />
      <h2 className="text-lg font-bold">{name}</h2>
    </div>
  );
};

export default PopularItem;
