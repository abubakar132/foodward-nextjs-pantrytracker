// app/page.tsx
import React from 'react';
import Inventory from '../components/Inventory';
import PopularItems from '../components/PopularItems';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center">
      <Inventory />
      <div className="w-full max-w-xl mt-8">
        <h2 className="text-xl font-bold mb-4">Popular Items</h2>
        <PopularItems />
      </div>
    </div>
  );
};

export default Home;
