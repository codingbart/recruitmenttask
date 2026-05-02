import Header from "@/components/Header/Header";
import { getColumbusData } from "@/lib/api";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getColumbusData();
  return (
    <html lang="pl">
      <body>
        <Header logo={data.logo} title={data.title} />
        <main>
          {children}
        </main>
      </body>
    </html >
  );
}
