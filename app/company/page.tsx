"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Company() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white px-6 py-16">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
        >
          About Our Company
        </motion.h1>

        <p className="text-gray-400 mt-4 max-w-2xl">
          We are building AI-powered music experiences.
        </p>

      </div>
    </>
  );
}