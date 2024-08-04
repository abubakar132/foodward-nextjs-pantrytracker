// components/PopularItem.tsx
import React from 'react';

interface PopularItemProps {
  image: string;
  name: string;
  onDragStart: (event: React.DragEvent<HTMLDivElement>, name: string) => void;
}

const PopularItem: React.FC<PopularItemProps> = ({ image, name, onDragStart }) => {
  return (
    <div
      className="p-4 m-2 bg-white rounded shadow-md"
      draggable
      onDragStart={(e) => onDragStart(e, name)}
    >
      <img src={image} alt={name} className="w-12 h-12 mx-auto" />
      <div className="text-center">
        <h3 className="text-lg font-bold">{name}</h3>
      </div>
    </div>
  );
};

export default PopularItem;
