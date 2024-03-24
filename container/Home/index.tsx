import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import WhyUs from "./WhyUs";
import OurBlogs from "./OurBlogs";
import Submit from "./Submit";
import Testimonial from "./Testimonial";
import FAQSection from "./FAQSection";

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonial />
      <WhyUs />
      <OurBlogs />
      <FAQSection />
      <Submit />
    </main>
  );
}

export default Home;
