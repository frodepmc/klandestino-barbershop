import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const bebasNeue = Bebas_Neue({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-bebas-neue',
});

export const metadata: Metadata = {
  title: "Klandestino BarBerShop | Estilismo Urbano en Inca",
  description: "Barbería en Inca, Mallorca. Ganadores de FAST FADE MBB 2023. Creamos el mejor estilo para ti. Pide tu cita.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={bebasNeue.variable}>
        <Navbar />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}