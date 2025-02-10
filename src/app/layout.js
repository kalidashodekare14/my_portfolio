import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dev Kalidash",
  description: "Portfolio by kalidash odekare",
};

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
      </body>
    </html>
  );
}
