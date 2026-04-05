"use client";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">

        {/* 🔥 HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center px-6 py-24"
        >
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 text-transparent bg-clip-text">
            Turn Your Story Into Music 🎵
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl">
            Generate personalized songs using AI for any moment, emotion, or occasion.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Create Song
            </button>

            <button className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition">
              Explore
            </button>
          </div>
        </motion.section>

        {/* 🧱 ABOUT SECTION */}
        <div className="px-6 py-16">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
          >
            About Our Company
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-4 max-w-2xl"
          >
            We are building AI-powered music experiences.
          </motion.p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">

            {["Mission", "Vision", "Team"].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl cursor-pointer transition duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]"
                >
                  <h2 className="text-xl font-semibold">{item}</h2>
                  <p className="text-gray-400 mt-2">
                    {item === "Mission" && "Make music creation effortless."}
                    {item === "Vision" && "Empower creators globally."}
                    {item === "Team" && "AI + Music experts."}
                  </p>
                </motion.div>
            ))}

          </div>
        </div>
        

      </div>
      <Footer />
    </>
  );
}
