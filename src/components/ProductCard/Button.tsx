"use client";
import { useCart } from "@/context/Cart";
import styles from "./Button.module.css";

export default function Button() {
  const { addToCart, isLoading } = useCart();

  return (
    <button className={styles.button} onClick={addToCart} disabled={isLoading}>
      {isLoading ? "Dodawanie..." : "Dodaj do koszyka"}
    </button>
  );
}
