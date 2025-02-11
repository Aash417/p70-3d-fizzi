import localFont from "next/font/local";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ViewCanvas from "@/components/ViewCanvas";
import { repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import "./app.css";

const alpino = localFont({
   src: "../../public/fonts/Alpino-Variable.woff2",
   display: "swap",
   weight: "100 900",
   variable: "--font-alpino",
});

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className={alpino.variable}>
         <body className="bg-yellow-300">
            <Header />
            <main>
               {children}
               <ViewCanvas />
            </main>
            <Footer />
         </body>
         <PrismicPreview repositoryName={repositoryName} />
      </html>
   );
}
