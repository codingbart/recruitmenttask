"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Cart = {
  count: number;
  isLoading: boolean;
  addToCart: () => Promise<void>;
};

const CartContext = createContext<Cart | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const addToCart = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setCount((prev) => prev + 1);
    setIsLoading(false);
  };

  return (
    <CartContext.Provider value={{ count, addToCart, isLoading }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return ctx;
}
