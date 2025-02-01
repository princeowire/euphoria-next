'use client'
import { useState, useEffect } from "react";

const AddressForm = () => {
  const [addresses, setAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [newAddress, setNewAddress] = useState({
    name: "",
    street: "",
    city: "",
    type: "Home", // Default type
  });

  // Load saved addresses from localStorage
  useEffect(() => {
    const savedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
    setAddresses(savedAddresses);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  // Handle type selection (Home/Office)
  const handleTypeChange = (type) => {
    setNewAddress({ ...newAddress, type });
  };

  // Save the address (New or Edited)
  const saveAddress = () => {
    if (!newAddress.name || !newAddress.street || !newAddress.city) return;

    let updatedAddresses = [...addresses];
    if (editIndex !== null) {
      updatedAddresses[editIndex] = newAddress;
    } else {
      if (addresses.length >= 4) {
        alert("You can only add up to 4 addresses.");
        return;
      }
      updatedAddresses.push(newAddress);
    }

    setAddresses(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
    setNewAddress({ name: "", street: "", city: "", type: "Home" }); // Reset form
    setShowForm(false);
    setEditIndex(null);
  };

  // Edit an address
  const editAddress = (index) => {
    setNewAddress(addresses[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  // Remove an address
  const removeAddress = (index) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
  };

  return (
    <div className="w-full">
      {/* Address Header */}
      <div className="flex justify-between">
        <h3 className="text-xl font-semibold">Address</h3>
        <p 
          className={`cursor-pointer ${addresses.length >= 4 ? "text-gray-400" : "text-blue-500"}`}
          onClick={() => addresses.length < 4 && setShowForm(true)}
        >
          {addresses.length >= 4 ? "Limit Reached" : "Add New"}
        </p>
      </div>

      {/* Address List */}
      <div className="mt-4 flex flex-wrap gap-4">
        {addresses.length > 0 ? (
          addresses.map((address, index) => (
            <div key={index} className="w-[48%] max-md:w-full border bg-gray-100 p-4 rounded-lg flex flex-col gap-2 ">

                <p className="font-semibold text-xl">{address.name}</p>
                <p className="text-off-gray">{address.street}, {address.city}</p>
                <p className="text-off-gray w-fit border border-off-gray px-5 py-px rounded-md">{address.type}</p>

              <div className="flex gap-2">
                <button onClick={() => removeAddress(index)} className="px-3 py-1 font-semibold">Remove</button>
                <button onClick={() => editAddress(index)} className="px-3 py-1 font-semibold">Edit</button>
              </div>

            </div>
          ))
        ) : (
          <p className="text-gray-500">No address added yet.</p>
        )}
      </div>

      {/* Address Form Popup */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 min-w-72 w-[400px] rounded-lg shadow-lg ">
            <h2 className="text-lg font-semibold mb-3">{editIndex !== null ? "Edit Address" : "Add New Address"}</h2>
            
            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={newAddress.name}
              onChange={handleChange}
              className="w-full p-2 border mb-2 rounded"
            />

            {/* Street Address Input */}
            <input
              type="text"
              name="street"
              placeholder="Street Address"
              value={newAddress.street}
              onChange={handleChange}
              className="w-full p-2 border mb-2 rounded"
            />

            {/* City Input */}
            <input
              type="text"
              name="city"
              placeholder="City"
              value={newAddress.city}
              onChange={handleChange}
              className="w-full p-2 border mb-2 rounded"
            />

            {/* Home/Office Selection */}
            <div className="flex gap-4 my-3">
              <button
                onClick={() => handleTypeChange("Home")}
                className={`px-4 py-2 rounded border ${newAddress.type === "Home" ? "bg-eu-purple text-white" : "bg-gray-200"}`}
              >
                Home
              </button>
              <button
                onClick={() => handleTypeChange("Office")}
                className={`px-4 py-2 rounded border ${newAddress.type === "Office" ? "bg-eu-purple text-white" : "bg-gray-200"}`}
              >
                Office
              </button>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-2 mt-4">
              <button onClick={() => { setShowForm(false); setEditIndex(null); }} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
              <button onClick={saveAddress} className="px-4 py-2 bg-eu-purple text-white rounded">{editIndex !== null ? "Update" : "Save"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressForm;
