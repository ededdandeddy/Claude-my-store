// Defines the shape of a product object — used everywhere products appear
export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: "clothing" | "gadgets";
  image: string;
};
