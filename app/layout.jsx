import { Outfit } from "next/font/google";
import "./globals.css";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "vabank.dev | Modern Web Development & Data Science For Your Business",
  description:
    "Modern Web Development, AI implementation, Next.js, React.js, Vanilla.js, Node.js, Python, Pandas, Data Science, Numpy, PyDeck, Mapbox, PyTorch",

  metadataBase: new URL("https://www.vabank.dev/"),
  openGraph: {
    images: "/metalogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-1VYD1C0X5Q" />
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
