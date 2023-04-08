import Numbers from "./components/Sections/Numbers/Numbers";
import Hero from "./components/Sections/Hero/Hero";
import Navbar from "./components/Sections/Navbar/Navbar";
import ChangeSection from "./components/Sections/Change/ChangeSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Numbers />
      <ChangeSection />
    </>
  );
}
