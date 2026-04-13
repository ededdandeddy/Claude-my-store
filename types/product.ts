// Product Type — defines the shape of a product object (id, name, price, etc.).
// Imported by any file that works with product data to ensure type safety.
export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: "clothing" | "gadgets";
  image: string;
};
