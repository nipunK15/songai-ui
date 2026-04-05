import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/30 backdrop-blur-lg sticky top-0 z-50">
      
      <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
        SongAI
      </h1>

      <div className="flex gap-6 text-gray-300">
        <Link href="/" className="hover:text-white">Home</Link>
        <Link href="/company" className="hover:text-white">Company</Link>
        <Link href="/contact" className="hover:text-white">Contact</Link>
      </div>

      <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:scale-105 transition">
        Get Started
      </button>

    </nav>
  );
}