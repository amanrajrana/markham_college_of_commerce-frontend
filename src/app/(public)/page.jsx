import EnrollmentStatistics from "@components/public/HomeComponents/EnrollmentStatistics/Index";
import Hero from "@components/public/HomeComponents/hero/Index";
import Features from "@components/public/HomeComponents/Features/Index";
import Highlights from "@components/public/HomeComponents/highlights/Index";
import NoticesAndEvents from "@components/public/HomeComponents/noticesAndEvents/Index";
import Gallery from "@components/public/HomeComponents/Gallery";
import PrincipleMsg from "@components/public/HomeComponents/PrincipleMsg";
import SupportLink from "@components/public/HomeComponents/SupportLink";

export default function Home() {
  return (
    <>
      <Hero />
      <NoticesAndEvents />
      <EnrollmentStatistics />
      <Features />
      <Highlights />
      <Gallery />
      <PrincipleMsg />
      <SupportLink />
    </>
  );
}
