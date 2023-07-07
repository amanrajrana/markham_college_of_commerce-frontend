import "@/app/globals.css";
import Footer from "@/components/auth/Footer";
import Header from "@/components/auth/Header";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  );
}
