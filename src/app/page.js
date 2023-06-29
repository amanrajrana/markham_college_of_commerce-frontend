import EnrollmentStatistics from "@/components/HomeComponents/EnrollmentStatistics";
import Header from "@/components/header/Index";
import Hero from "@/components/HomeComponents/hero/Index";
import Features from "@/components/HomeComponents/Features/Index";
import Highlights from "@/components/HomeComponents/highlights/Index";
import NoticesAndEvents from "@/components/HomeComponents/noticesAndEvents/Index";
import Footer from "@/components/footer";
import CopyrightSection from "@/components/CopyrightSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <EnrollmentStatistics />
      <Features />
      <Highlights />
      <NoticesAndEvents />
      {/* <Footer /> */}
      <CopyrightSection />
    </>
  );
}
