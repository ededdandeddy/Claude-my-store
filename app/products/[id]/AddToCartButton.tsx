// AddToCartButton — a button that adds the current product to the shopping cart.
// After first click, switches to a quantity selector with +/− controls.

// "use client" because we need useCart hook for cart state
"use client";

import { useCart } from "@/app/context/CartContext";
import type { Product } from "@/types/product";

export default function AddToCartButton({ product }: { product: Product }) {
  const { items, addItem, updateQuantity } = useCart();

  // Check if this product is already in the cart, and get its quantity
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem?.quantity ?? 0;

  // First click — add to cart
  if (quantity === 0) {
    return (
      <button
        onClick={() => addItem(product)}
        className="w-full bg-blue-600 text-white py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Add to Cart
      </button>
    );
  }

  // Already in cart — show quantity controls
  return (
    <div className="flex items-center justify-center gap-4 w-full bg-gray-100 py-2 rounded-full">
      <button
        onClick={() => updateQuantity(product.id, quantity - 1)}
        className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-lg text-gray-600 hover:bg-gray-50 transition-colors"
      >
        −
      </button>
      <span className="text-lg font-semibold text-gray-900 w-8 text-center">
        {quantity}
      </span>
      <button
        onClick={() => updateQuantity(product.id, quantity + 1)}
        className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-lg text-gray-600 hover:bg-gray-50 transition-colors"
      >
        +
      </button>
    </div>
  );
}
