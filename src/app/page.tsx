import Numbers from "./components/Sections/Numbers/Numbers";
import Hero from "./components/Sections/hero/Hero";
import Navbar from "./components/Utils/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Numbers />
    </>
  );
}
