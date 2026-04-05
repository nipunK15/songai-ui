export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20 px-6 py-10 bg-black/40 backdrop-blur-lg">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo */}
        <h1 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          SongAI
        </h1>

        {/* Links */}
        <div className="flex gap-6 text-gray-400">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/company" className="hover:text-white transition">Company</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © 2026 SongAI. All rights reserved.
        </p>

      </div>

    </footer>
  );
}