import "./globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import Link from "next/link"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        <Header />
        <main>{children}</main>
        <Link href="/tecnologias">Tecnologias ➭</Link>
        <Link href="/produtos">Produtos ➭</Link>
        <Footer />
      </body>
    </html>
  );
}
