import React from "react";
import HeroSection from "./component/HeroSection";
import Courses from "./component/Courses";
import Services from "./component/Services";
import Testimonials from "./component/Testomonials";
import Contact from "./component/Contact";
import Banner from "./component/Banner";
import Footer from "./component/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Courses />
      <Testimonials />
      <Services />
      <Contact />
      <Banner />
      <Footer />
    </>
  );
};
export default Home;
