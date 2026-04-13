// Checkout Page (/checkout) — order summary + shipping & payment form.
// Shows cart items, totals, and collects customer details.
// Stripe integration will be added later — for now it simulates a successful order.

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function CheckoutPage() {
  const { items, totalPrice, itemCount, clearCart } = useCart();

  // Tracks whether the order has been "placed" (simulated for now)
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Form field values — each field gets its own state
  const [form, setForm] = useState({
    email: "",
    name: "",
    address: "",
    city: "",
    postcode: "",
    country: "",
  });

  // Updates a single form field by name (avoids writing a handler for each field)
  function updateField(field: string, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  // handleSubmit runs when the form is submitted
  function handleSubmit(e: React.FormEvent) {
    // preventDefault stops the browser from refreshing the page on form submit
    e.preventDefault();

    // Simulate a successful order — Stripe will replace this later
    setOrderPlaced(true);
    clearCart();
  }

  // Show empty cart message if nothing to check out
  if (!orderPlaced && items.length === 0) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-4">
          Nothing to check out
        </h1>
        <p className="text-gray-500 mb-8">
          Add some items to your cart first.
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

  // Show success message after order is placed
  if (orderPlaced) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-green-600 text-3xl">✓</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-4">
          Order placed!
        </h1>
        <p className="text-gray-500 mb-8">
          Thank you for your purchase. This is a demo — no real payment was processed.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">
        Checkout
      </h1>

      {/* Two-column layout: form on left, order summary on right */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* ===== Shipping & Payment Form (takes 3 of 5 columns) ===== */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
          {/* Contact section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Contact Information
            </h2>
            <input
              type="email"
              placeholder="Email address"
              required
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Shipping section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Shipping Address
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full name"
                required
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Street address"
                required
                value={form.address}
                onChange={(e) => updateField("address", e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {/* City and postcode side by side */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  required
                  value={form.city}
                  onChange={(e) => updateField("city", e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Postcode"
                  required
                  value={form.postcode}
                  onChange={(e) => updateField("postcode", e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <input
                type="text"
                placeholder="Country"
                required
                value={form.country}
                onChange={(e) => updateField("country", e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Payment section — placeholder until Stripe is added */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Payment
            </h2>
            <div className="border border-dashed border-gray-300 rounded-xl p-6 text-center text-gray-400">
              Stripe payment form will go here
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Place Order — ${totalPrice.toFixed(2)}
          </button>
        </form>

        {/* ===== Order Summary Sidebar (takes 2 of 5 columns) ===== */}
        <div className="lg:col-span-2">
          <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Order Summary ({itemCount} {itemCount === 1 ? "item" : "items"})
            </h2>

            {/* List of items in cart */}
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    {/* truncate cuts off long names with "..." */}
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            {/* Price breakdown */}
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
