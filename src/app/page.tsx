import Numbers from "./components/Sections/Numbers/Numbers";
import Hero from "./components/Sections/Hero/Hero";
import Navbar from "./components/Sections/Navbar/Navbar";
import ChangeSection from "./components/Sections/Change/ChangeSection";
import Banner from "./components/Utils/banner/Banner";
import Faq from "./components/Sections/Faq/Faq";
import Footer from "./components/Sections/Footer/Footer";
import Navigation from "./components/Utils/navigation/Navigation";

export default function Home() {
  return (
    <>
      <Navbar />
      <Navigation />
      <Hero />
      <Numbers />
      <Banner />
      <ChangeSection />
      <Faq />
      <Footer />
    </>
  );
}
