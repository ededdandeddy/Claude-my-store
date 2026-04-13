import Link from "next/link";
import Image from "next/image";
import products from "@/data/products.json";
import type { Product } from "@/types/product";

export default function Home() {
  // Show only the first 3 products as "featured" on the homepage
  const featured: Product[] = products.slice(0, 3);

  return (
    <main>
      {/* ===== Hero Section ===== */}
      {/* bg-gradient creates a subtle gradient background for visual depth */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Discover products{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              you&apos;ll love
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Curated collection of premium clothing and gadgets. Quality you can
            feel, prices you&apos;ll appreciate.
          </p>
          <Link
            href="/products"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Shop All Products
          </Link>
        </div>
      </section>

      {/* ===== Featured Products ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <Link
            href="/products"
            className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            View all &rarr;
          </Link>
        </div>

        {/* Product cards grid — 1 col on mobile, 3 on medium+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group"
            >
              <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                {/* Product image — group-hover scales it up for a zoom effect */}
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
                  {/* Category label */}
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
      </section>

      {/* ===== Categories Banner ===== */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Clothing category card */}
            <Link
              href="/products?category=clothing"
              className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 p-10 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Clothing</h3>
              <p className="text-gray-600">Sneakers, hoodies, jackets & more</p>
              <span className="inline-block mt-4 text-orange-600 font-medium">
                Browse clothing &rarr;
              </span>
            </Link>

            {/* Gadgets category card */}
            <Link
              href="/products?category=gadgets"
              className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 p-10 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Gadgets</h3>
              <p className="text-gray-600">Headphones, watches, speakers & more</p>
              <span className="inline-block mt-4 text-blue-600 font-medium">
                Browse gadgets &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
