import { getColumbusData } from "@/lib/api";

export default async function Home() {
  const data = await getColumbusData();
  console.log(data);
  return (
    <main>
      <h1>Products</h1>
    </main>
  );
}
