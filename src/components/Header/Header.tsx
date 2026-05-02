'use client';
import styles from "./Header.module.css";
import NextImage from "next/image";
import type { Image } from "@/types/generated";
import { ShoppingCart } from "lucide-react";
type Props = {
    logo: Image;
    title: string;
}

export default function Header({ logo, title }: Props) {
    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                <NextImage
                    src={logo.url}
                    alt={logo.altText}
                    width={48}
                    height={48}
                    className={styles.logo}
                />
                <span className={styles.title}>{title}</span>
            </div>


            <ShoppingCart size={28} />

        </header>
    );
}
