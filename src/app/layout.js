import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header/Index";
import Footer from "@/components/footer";

// Add the Font Awesome icons to the library
library.add(fas);
library.add(fab);

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Markham College of Commerce, Hazaribagh",
  description: "Markham College of commerce",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
