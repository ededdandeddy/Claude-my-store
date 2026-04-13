// "use client" needed because this component uses the useCart hook (browser-side state)
"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function Navbar() {
  const { itemCount } = useCart();

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

          {/* Cart link with item count badge */}
          <Link
            href="/cart"
            className="relative ml-2 px-4 py-2 text-sm font-medium text-gray-600 rounded-full hover:bg-gray-100 hover:text-gray-900 transition-all"
          >
            Cart
            {/* Only show the badge if there are items in the cart */}
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
