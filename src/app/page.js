import EnrollmentStatistics from "@/components/HomeComponents/EnrollmentStatistics";
import Header from "@/components/header/Index";
import Hero from "@/components/HomeComponents/hero/Index";
import Features from "@/components/HomeComponents/Features/Index";
import Highlights from "@/components/HomeComponents/highlights/Index";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <EnrollmentStatistics />
      <Features />
      <Highlights />
    </>
  );
}
