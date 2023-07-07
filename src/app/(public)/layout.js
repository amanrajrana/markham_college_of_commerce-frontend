import '@/app/globals.css'
import Footer from '@/components/footer';
import Header from '@/components/header/Index';

// export const metadata = {
//   title: "Markham College of Commerce, Hazaribagh",
//   description:
//     "Welcome to Markham College of Commerce, located in Hazaribagh, Jharkhand. We offer a wide range of UG, PG, and Vocational programs such as BCA, BBA, BJMC, and BMLT. As a government-owned college affiliated with Vinoba Bhave University, we provide quality education for 12th pass students seeking UG degrees and specialized vocational programs. Explore our comprehensive curriculum and dynamic learning environment to shape a successful future.",

//   viewport: {
//     width: "device-width",
//     initialScale: 1,
//     maximumScale: 1,
//   },
// };

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
