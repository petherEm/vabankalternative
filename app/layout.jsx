import { Outfit } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "vabank.dev | Modern Web Development & Data Science Agency",
  description:
    "Next.js, React.js, Vanilla.js, Node.js, Python, Pandas, Data Science, Numpy, PyDeck, Mapbox, PyTorch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />

          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
