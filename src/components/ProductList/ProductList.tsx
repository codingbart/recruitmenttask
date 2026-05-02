import type { Product } from "@/types/generated";
import styles from "./ProductList.module.css";
import ProductCard from "../ProductCard/ProductCard";
type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  return (
    <ul className={styles.list}>
      {products.map((product) => (
        <li key={product.articleNumber} className={styles.item}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
