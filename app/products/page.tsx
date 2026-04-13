// Products Page (/products) — displays all products in a filterable grid.
// Loads product data and passes it to ProductGrid for rendering and filtering.

import products from "@/data/products.json";
import type { Product } from "@/types/product";
import ProductGrid from "./ProductGrid";

export default function ProductsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">
        All Products
      </h1>
      <p className="text-gray-500 mb-8">
        Browse our full collection of clothing and gadgets.
      </p>

      {/* Pass products data down to the client component that handles filtering */}
      <ProductGrid products={products as Product[]} />
    </main>
  );
}
