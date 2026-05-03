"use client";
import styles from "./Header.module.css";
import NextImage from "next/image";
import type { Image } from "@/types/generated";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/Cart";
type Props = {
  logo: Image;
  title: string;
};

export default function Header({ logo, title }: Props) {
  const { count } = useCart();
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <NextImage
          src={logo.url}
          alt={logo.altText}
          width={120}
          height={48}
          className={styles.logo}
        />
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.cartButton}>
        <ShoppingCart size={28} />
        {count >= 0 && <span className={styles.badge}>{count}</span>}
      </div>
    </header>
  );
}
