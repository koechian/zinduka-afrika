import Numbers from "./components/Sections/Numbers/Numbers";
import Hero from "./components/Sections/Hero/Hero";
import Navbar from "./components/Sections/Navbar/Navbar";
import ChangeSection from "./components/Sections/Change/ChangeSection";
import Banner from "./components/Utils/banner/Banner";
import Faq from "./components/Sections/Faq/Faq";
import Footer from "./components/Sections/Footer/Footer";
import Navigation from "./components/Utils/navigation/Navigation";
import React from "react";
import Preloader from "@/app/components/Preloader/Preloader";
import { Sheet } from "@/app/components/ui/sheet";

export default function Home() {
  return (
    <>
      <Preloader />
      <Sheet />
      <Navbar />
      <Navigation />
      <Hero />
      <Numbers />
      <ChangeSection />
      <Banner />
      <Faq />
      <Footer />
    </>
  );
}
