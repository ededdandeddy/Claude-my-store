// Product Detail Page (/products/[id]) — shows a single product's full details.
// Displays the image, name, price, description, breadcrumb navigation, and an Add to Cart button.

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import products from "@/data/products.json";
import type { Product } from "@/types/product";
import AddToCartButton from "./AddToCartButton";

// This page uses a dynamic route — [id] in the folder name means
// /products/1, /products/2, etc. all use this same page component.
// Next.js passes the id through the params prop.

export default async function ProductDetailPage({
  params,
}: {
  // params is a Promise in this version of Next.js — must be awaited
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Find the product that matches the URL id
  const product = (products as Product[]).find((p) => p.id === id);

  // If no product found, show the Next.js 404 page
  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Breadcrumb navigation — helps users know where they are */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-gray-900 transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-gray-900 transition-colors">
          Products
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      {/* Product layout — side by side on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product image */}
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product info */}
        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
            {product.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            {product.name}
          </h1>
          <p className="text-3xl font-bold text-gray-900 mb-6">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            {product.description}
          </p>

          <AddToCartButton product={product} />

          <Link
            href="/products"
            className="mt-4 text-center text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            &larr; Back to all products
          </Link>
        </div>
      </div>
    </main>
  );
}
