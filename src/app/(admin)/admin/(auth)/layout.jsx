import "@/app/globals.css";
import Footer from "@/components/student/Footer";
import Header from "@/components/student/Header";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
