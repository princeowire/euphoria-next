"use client";
import React, { useState, useEffect } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const filteredOrders = orders.filter((order) =>
    filter === "all" ? true : order.status === filter
  );

  return (
    <div className="py-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Orders</h1>
      
      {/* Filter Dropdown */}
      <div className="flex mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded-lg shadow bg-white text-gray-700"
        >
          <option value="all">All</option>
          <option value="Pending">Pending</option>
          <option value="Paid">Paid</option>
          <option value="Failed">Failed</option>
        </select>
      </div>

      {filteredOrders.length === 0 ? (
        <p className="text-center text-gray-600">No orders found.</p>
      ) : (
        <div className="space-y-6">
          {filteredOrders.map((order, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition cursor-pointer"
              onClick={() => setSelectedOrder(order)}
            >
              <p className="font-semibold text-lg text-gray-800">Name: {order.name}</p>
              <p className="text-gray-700">Email: {order.email}</p>
              <p className="text-gray-700">Total: <span className="font-bold">${order.totalAmount.toFixed(2)}</span></p>
              <p>Status: <span className={`font-bold ${order.status === "Paid" ? "text-green-600" : order.status === "Failed" ? "text-red-600" : "text-yellow-600"}`}>{order.status}</span></p>
            </div>
          ))}
        </div>
      )}

      {selectedOrder && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedOrder(null)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Order Details</h2>
            <p className="font-semibold text-gray-700">Name: {selectedOrder.name}</p>
            <p className="text-gray-700">Email: {selectedOrder.email}</p>
            <p className="text-gray-700">Total: <span className="font-bold">${selectedOrder.totalAmount.toFixed(2)}</span></p>
            <p>Status: <span className={`font-bold ${selectedOrder.status === "Paid" ? "text-green-600" : selectedOrder.status === "Failed" ? "text-red-600" : "text-yellow-600"}`}>{selectedOrder.status}</span></p>
            {selectedOrder.paymentReference && <p className="text-gray-700">Reference: {selectedOrder.paymentReference}</p>}
            <h3 className="mt-6 text-lg font-semibold text-gray-800">Items:</h3>
            <ul className="list-none mt-2">
              {selectedOrder.cartItems.map((item, i) => (
                <li key={i} className="flex justify-between bg-gray-100 p-3 rounded-md mb-2">
                  <span>{item.name}</span>
                  <span className="font-semibold">Qty: {item.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
