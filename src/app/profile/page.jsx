'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

import { auth } from '@/lib/firebase/firebase';
import { onAuthStateChanged, signOut, updateProfile, updateEmail } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { sendPasswordResetEmail } from 'firebase/auth';

import spin from '../../../public/assets/spinner.svg';

const Profile = () => {
  const [popup, setPopup] = useState({ open: false, field: '' });
  const [user, setUser] = useState(null);
  const [newValue, setNewValue] = useState('');
  const router = useRouter();

  // Fetch and listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push('/login'); // Redirect to login if user is not authenticated
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login'); // Redirect to login page
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };

  const handleUpdate = async () => {
    if (!newValue.trim()) return;

    try {
      if (popup.field === 'name') {
        await updateProfile(auth.currentUser, { displayName: newValue });
      } else if (popup.field === 'email') {
        await updateEmail(auth.currentUser, newValue);
      }

      setUser({ ...user, [popup.field]: newValue });
      setPopup({ open: false, field: '' });
      setNewValue('');
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  const handlePasswordReset = async () => {
    if (!user?.email) {
      toast.error("No email found for this user Pls add email.");
      return;
    }
  
    toast(
      (t) => (
        <div>
          <p>Send password reset email to {user.email}?</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={async () => {
                toast.dismiss(t.id);
                try {
                  await sendPasswordResetEmail(auth, user.email);
                  toast.success("Password reset email sent!");
                } catch (error) {
                  console.error("Error sending password reset email:", error);
                  toast.error("Failed to send email.");
                }
              }}
              className="bg-eu-purple text-white px-3 py-1 rounded"
            >
              Confirm
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-300 px-3 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { duration: 5000 }
    );
  };

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="w-full flex items-center justify-center h-[230px]">
          <Image src={spin} alt="loading..." />
        </div>
      </div>
    );
  }

  return (
    <div className="flex max-sm:flex-col gap-16 p-16 py-4 max-md:p-4">
      {/* Popup Modal */}
      {popup.open && (
        <div className="fixed top-0 left-0 w-screen h-screen p-4 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold mb-4">Update {popup.field}</h2>
            <input
              type="text"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 w-full mb-4 outline-none"
              placeholder={`Enter new ${popup.field}`}
            />
            <div className="flex justify-between">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setPopup({ open: false, field: "" })}
              >
                Cancel
              </button>
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded"
                onClick={handleUpdate}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <div className="w-1/4 max-md:w-full pt-8">
        <div className="flex gap-2">
          <div className="w-1 rounded-full h-8 bg-purple-800"></div>
          <h2 className="text-2xl">Hello {user.displayName || "User"}</h2>
        </div>
        <p className="py-2 text-sm text-gray-500">Welcome To Your Account</p>

        <div className="flex flex-col gap-2 px-4 py-2">
          <p>My Profile</p>
          <p>My Orders</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Log Out
          </button>
        </div>
      </div>

      {/* Profile Info */}
      <div className="w-3/4 max-md:w-full pt-8 px-4">
        <h2 className="text-3xl mb-4 font-semibold">My Info</h2>

        <h3 className="text-2xl font-semibold">Contact Details</h3>

        <div className="pt-8 flex gap-8 flex-col">
          {/* Name */}
          <div className="py-1 flex items-center justify-between border-b border-gray-200">
            <span>
              <p className="text-sm text-gray-500">Your Name</p>
              <p className="text-lg">{user.displayName || "Not set"}</p>
            </span>
            <button
              onClick={() => setPopup({ open: true, field: "Name" })}
              className="text-purple-600"
            >
              Change
            </button>
          </div>

          {/* Email */}
          <div className="py-1 flex items-center justify-between border-b border-gray-200">
            <span>
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="text-lg">{user.email}</p>
            </span>
            <button
              onClick={() => setPopup({ open: true, field: "Email" })}
              className="text-purple-600"
            >
              Change
            </button>
          </div>

          {/* Phone Number (Placeholder, requires backend) */}
          <div className="py-1 flex items-center justify-between border-b border-gray-200">
            <span>
              <p className="text-sm text-gray-500">Phone Number</p>
              <p className="text-lg">09090909909</p>
            </span>
            <button className="text-purple-600">Change</button>
          </div>

          {/* Password Reset */}
          <div className="py-1 flex items-center justify-between border-b border-gray-200">
            <span>
              <p className="text-sm text-gray-500">Password</p>
              <p className="text-lg">••••••••••••••</p>
            </span>
            <button onClick={handlePasswordReset} className="text-purple-600">
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
