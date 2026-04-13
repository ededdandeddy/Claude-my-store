// ProductGrid — renders the product card grid with category filter buttons (All / Clothing / Gadgets).
// Used by the Products page. Handles filtering on the client side.

// "use client" because we need useState for the category filter
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";

// The list of filter options — "all" plus each unique category
const CATEGORIES = ["all", "clothing", "gadgets"] as const;

export default function ProductGrid({ products }: { products: Product[] }) {
  // Tracks which category filter is currently active
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Filter products based on selected category
  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* ===== Category Filter Buttons ===== */}
      <div className="flex gap-2 mb-8">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              // Highlight the active filter with blue, others get a subtle grey
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {/* capitalize makes "clothing" → "Clothing" */}
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* ===== Product Grid ===== */}
      {/* 1 column mobile, 2 on small, 3 on medium+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group"
          >
            <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  {product.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mt-1">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-xl font-bold text-gray-900 mt-3">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
