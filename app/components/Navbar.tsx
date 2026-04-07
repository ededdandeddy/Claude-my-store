import Link from "next/link";

export default function Navbar() {
  return (
    // backdrop-blur: creates a frosted glass effect when content scrolls behind
    // bg-white/80: white background at 80% opacity so blur is visible
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Store logo — tracking-tight tightens letter spacing for a modern feel */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-gray-900">
          my<span className="text-blue-600">store</span>
        </Link>

        {/* Navigation links — pill-shaped hover background for modern look */}
        <div className="flex items-center gap-1">
          <Link
            href="/"
            className="px-4 py-2 text-sm font-medium text-gray-600 rounded-full hover:bg-gray-100 hover:text-gray-900 transition-all"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="px-4 py-2 text-sm font-medium text-gray-600 rounded-full hover:bg-gray-100 hover:text-gray-900 transition-all"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 text-sm font-medium text-gray-600 rounded-full hover:bg-gray-100 hover:text-gray-900 transition-all"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-medium text-gray-600 rounded-full hover:bg-gray-100 hover:text-gray-900 transition-all"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
