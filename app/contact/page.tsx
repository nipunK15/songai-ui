"use client";

import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white px-6 py-16">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-400 mt-4">
          Reach out to us anytime 🚀
        </p>
      </div>
    </>
  );
}