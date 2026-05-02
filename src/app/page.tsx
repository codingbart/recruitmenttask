import ProductList from "@/components/ProductList/ProductList";
import { getColumbusData } from "@/lib/api";

export default async function Home() {
  const data = await getColumbusData();
  return (
    <div>
      <ProductList products={data.products} />
    </div>
  );
}
