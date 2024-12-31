import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded"
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:block fixed top-0 left-0 w-64 bg-gray-100 border-r border-gray-300 h-full p-5`}
      >
        <h2 className="text-xl font-bold text-gray-700 mb-6">Filters</h2>
        <main className="ml-64 p-6 flex-1">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        {/* Add your product list or grid here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 border border-gray-200 rounded shadow">
            Product 1
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded shadow">
            Product 2
          </div>
          {/* Add more products as needed */}
        </div>
      </main>
      </aside>
    </>
  );
};

export default Sidebar;
