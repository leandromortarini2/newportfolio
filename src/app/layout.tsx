import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Footer/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio de Leandro Mortarini - Full Stack Developer",
  description:
    "Descubre el portafolio de Leandro Mortarini, un desarrollador Full Stack especializado en front-end con experiencia en Next.js, React, Node.js, Express, TypeScript, Javascript. Explora proyectos innovadores, soluciones optimizadas y aplicaciones web modernas.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Portfolio</title>
        <meta property="og:title" content="Developer FullStack" />
        <meta
          property="og:description"
          content="Descubre el portafolio de Leandro Mortarini, un desarrollador Full Stack especializado en front-end con experiencia en Next.js, React, Node.js, Express, TypeScript, Javascript. Explora proyectos innovadores, soluciones optimizadas y aplicaciones web modernas."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/BnB9QBx/Imagen-de-Whats-App-2024-06-03-a-las-17-51-18-fc28d90d-copia.jpg"
        />
        <meta
          property="og:url"
          content="https://portfolio-next-three-omega.vercel.app/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Developer FullStack" />
        <meta
          name="twitter:description"
          content="Descubre el portafolio de Leandro Mortarini, un desarrollador Full Stack especializado en front-end con experiencia en Next.js, React, Node.js, Express, TypeScript, Javascript. Explora proyectos innovadores, soluciones optimizadas y aplicaciones web modernas."
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/BnB9QBx/Imagen-de-Whats-App-2024-06-03-a-las-17-51-18-fc28d90d-copia.jpg"
        />
      </Head>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
