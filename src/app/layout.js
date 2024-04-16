
import { Inter } from "next/font/google";
import "./globals.css";
import "./animation.styles.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BASED BRETT",
  description: "The Base Chain and BRETT represent an exciting opportunity for the future of DeFi and blockchain technology.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
