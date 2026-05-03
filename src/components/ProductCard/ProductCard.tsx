import NextImage from "next/image";
import type { Product } from "@/types/generated";
import styles from "./ProductCard.module.css";
import Button from "./Button";

type Props = {
  product: Product;
};

function calculateDiscountedPrice(price: number, percentage: number): number {
  return price * (1 - percentage / 100);
}

function formatPrice(value: number): string {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  }).format(value);
}

export default function ProductCard({ product }: Props) {
  const { promotion } = product;
  const discountedPrice = promotion
    ? calculateDiscountedPrice(product.price, promotion.percentage)
    : null;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <NextImage
          src={product.image.url}
          alt={product.image.altText}
          fill
          className={styles.image}
        />
        {promotion && (
          <span className={styles.promoBadge}>-{promotion.percentage}%</span>
        )}
      </div>

      <div className={styles.content}>
        <NextImage
          src={product.brandLogo}
          alt={product.brandName}
          width={120}
          height={50}
          className={styles.brandLogo}
        />

        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.priceRow}>
          {discountedPrice !== null ? (
            <>
              <span className={styles.oldPrice}>
                {formatPrice(product.price)}
              </span>
              <span className={styles.newPrice}>
                {formatPrice(discountedPrice)}
              </span>
            </>
          ) : (
            <span className={styles.price}>{formatPrice(product.price)}</span>
          )}
        </div>

        {promotion && (
          <span className={styles.promoName}>{promotion.name}</span>
        )}
        <Button />
      </div>
    </div>
  );
}
