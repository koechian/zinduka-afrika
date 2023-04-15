import Numbers from "./components/Sections/Numbers/Numbers";
import Hero from "./components/Sections/Hero/Hero";
import Navbar from "./components/Sections/Navbar/Navbar";
import ChangeSection from "./components/Sections/Change/ChangeSection";
import Banner from "./components/Utils/banner/Banner";
import Faq from "./components/Sections/Faq/Faq";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Numbers />
      <Banner />
      <ChangeSection />
      <Faq />
    </>
  );
}
