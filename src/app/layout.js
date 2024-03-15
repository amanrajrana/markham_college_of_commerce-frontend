import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import { Inter } from "next/font/google";
import Warring from "./warring";

// Add the Font Awesome icons to the library
library.add(fas);
library.add(fab);

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Markham College of Commerce, Hazaribagh",
  description:
    "Welcome to Markham College of Commerce, located in Hazaribagh, Jharkhand. We offer a wide range of UG, PG, and Vocational programs such as BCA, BBA, BJMC, and BMLT. As a government-owned college affiliated with Vinoba Bhave University, we provide quality education for 12th pass students seeking UG degrees and specialized vocational programs. Explore our comprehensive curriculum and dynamic learning environment to shape a successful future.",

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Warring />
        {children}
      </body>
    </html>
  );
}
