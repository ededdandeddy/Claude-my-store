// Cart Page (/cart) — shows all items the user has added to their cart.
// Displays item image, name, price, quantity controls, remove button, and order total.

"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice, itemCount } =
    useCart();

  // If cart is empty, show a message with a link back to products
  if (items.length === 0) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-4">
          Your cart is empty
        </h1>
        <p className="text-gray-500 mb-8">
          Looks like you haven&apos;t added anything yet.
        </p>
        <Link
          href="/products"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
        >
          Browse Products
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Your Cart ({itemCount} {itemCount === 1 ? "item" : "items"})
        </h1>
        <button
          onClick={clearCart}
          className="text-sm text-red-500 hover:text-red-700 transition-colors"
        >
          Clear cart
        </button>
      </div>

      {/* Cart items list */}
      <div className="flex flex-col gap-6 mb-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 border border-gray-200 rounded-2xl p-4 bg-white"
          >
            {/* Product image */}
            <Link href={`/products/${item.id}`} className="shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                width={120}
                height={80}
                className="w-24 h-24 object-cover rounded-xl"
              />
            </Link>

            {/* Product details — flex-1 makes this take up remaining space */}
            <div className="flex-1 min-w-0">
              <Link
                href={`/products/${item.id}`}
                className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
              <p className="text-gray-500 text-sm mt-1">
                ${item.price.toFixed(2)} each
              </p>
            </div>

            {/* Quantity controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
              >
                −
              </button>
              <span className="w-8 text-center font-medium text-gray-900">
                {item.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>

            {/* Item total price and remove button */}
            <div className="text-right shrink-0">
              <p className="text-lg font-bold text-gray-900">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeItem(item.id)}
                className="text-sm text-red-500 hover:text-red-700 transition-colors mt-1"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Order summary */}
      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center justify-between mb-6">
          <span className="text-xl font-semibold text-gray-900">Total</span>
          <span className="text-2xl font-bold text-gray-900">
            ${totalPrice.toFixed(2)}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/products"
            className="flex-1 text-center border border-gray-300 text-gray-700 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
          >
            Continue Shopping
          </Link>
          <Link
            href="/checkout"
            className="flex-1 text-center bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </main>
  );
}
