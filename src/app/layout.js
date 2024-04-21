
import "./globals.css";
import "./animation.styles.css"



export const metadata = {
  title: "Willy",
  description: "The Solana Chain and Willy represent an exciting opportunity for the future of DeFi and blockchain technology.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
