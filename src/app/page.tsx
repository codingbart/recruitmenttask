import { getColumbusData } from "@/lib/api";

export default async function Home() {
  const data = await getColumbusData();
  return (
    <main>
      <h1>test</h1>
    </main>
  );
}
