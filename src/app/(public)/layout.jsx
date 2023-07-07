import '@/app/globals.css'
import Footer from '@components/public/footer';
import Header from '@components/public/header/Index';

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
