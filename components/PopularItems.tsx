// components/PopularItems.tsx
import React from 'react';
import PopularItem from './PopularItem';

const popularItems = [
  { id: '1', image: '/path/to/image', name: 'Apple' },
  { id: '2', image: '/path/to/image', name: 'Banana' },
  { id: '3', image: '/path/to/image', name: 'Carrot' },
];

const PopularItems: React.FC = () => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, name: string) => {
    e.dataTransfer.setData('name', name);
  };

  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {popularItems.map((item) => (
        <PopularItem key={item.id} {...item} onDragStart={handleDragStart} />
      ))}
    </div>
  );
};

export default PopularItems;
