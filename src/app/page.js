import EnrollmentStatistics from "@/components/HomeComponents/EnrollmentStatistics/Index";
import Header from "@/components/header/Index";
import Hero from "@/components/HomeComponents/hero/Index";
import Features from "@/components/HomeComponents/Features/Index";
import Highlights from "@/components/HomeComponents/highlights/Index";
import NoticesAndEvents from "@/components/HomeComponents/noticesAndEvents/Index";
import Footer from "@/components/footer";
import Gallery from "@/components/HomeComponents/Gallery";
import PrincipleMsg from "@/components/HomeComponents/PrincipleMsg";
import SupportLink from "@/components/HomeComponents/SupportLink";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <EnrollmentStatistics />
      <Features />
      <Highlights />
      <NoticesAndEvents />
      <Gallery />
      <PrincipleMsg />
      <SupportLink />
      <Footer />
    </>
  );
}
