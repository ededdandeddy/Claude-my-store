// "use client" is required because React context uses browser-side features
// like useState and createContext — these don't work in Server Components
"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Product } from "@/types/product";

// A cart item is a product plus a quantity
type CartItem = Product & { quantity: number };

// Defines all the values and functions the cart makes available
type CartContextType = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalPrice: number;
  itemCount: number;
};

// createContext sets up a "shared data channel" that any component can tap into
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component — wraps the app so all pages can access the cart
export function CartProvider({ children }: { children: ReactNode }) {
  // useState keeps the cart items in memory; starts as an empty array
  const [items, setItems] = useState<CartItem[]>([]);

  // Add a product to cart (or increase quantity if already in cart)
  function addItem(product: Product) {
    setItems((current) => {
      // Check if this product is already in the cart
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        // If found, increase its quantity by 1
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // If not found, add it with quantity 1
      return [...current, { ...product, quantity: 1 }];
    });
  }

  // Remove a product from the cart entirely
  function removeItem(productId: string) {
    // filter keeps only items whose id does NOT match
    setItems((current) => current.filter((item) => item.id !== productId));
  }

  // Set a specific quantity for an item (e.g., from a quantity selector)
  function updateQuantity(productId: string, quantity: number) {
    if (quantity <= 0) {
      // If quantity drops to 0 or below, remove the item
      removeItem(productId);
      return;
    }

    setItems((current) =>
      current.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }

  // Empty the entire cart
  function clearCart() {
    setItems([]);
  }

  // reduce loops through all items and adds up: price * quantity for each
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Total number of individual items (e.g., 2 sneakers + 1 hoodie = 3)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalPrice,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook — a shortcut so components can use the cart with one line:
// const { items, addItem } = useCart();
export function useCart() {
  const context = useContext(CartContext);

  // If someone tries to use useCart outside of CartProvider, show a helpful error
  if (!context) {
    throw new Error("useCart must be used inside a <CartProvider>");
  }

  return context;
}
