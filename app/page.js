'use client'

import Header from "../landing/header/Header";
import Hero from "../landing/hero/Hero";
import About from "../landing/about/About"
import Projects from "../landing/project/Projects";
import Faq from "../landing/faq/Faq";
import Contact from "@/landing/contact/Contact";
import Footer from "../landing/footer/Footer"

import { useEffect, useState } from 'react'

export default function Home() {

  const [isDarkMode, setDarkMode] = useState(false);

  const [mobileSize, setMobileSize] = useState(null);

  useEffect(() => {
      const checkScreen = () => {
          setMobileSize(window.innerWidth >= 768)
          
      };

      checkScreen();

      window.addEventListener("resize", checkScreen);

      return () => window.removeEventListener("resize", checkScreen);

  }, []);

  return (
    <>
      <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} mobileSize={mobileSize}/>
      <Hero isDarkMode={isDarkMode} mobileSize={mobileSize} setMobileSize={setMobileSize}/>
      <About isDarkMode={isDarkMode} mobileSize={mobileSize}/>
      <Projects isDarkMode={isDarkMode} mobileSize={mobileSize}/>
      <Faq  isDarkMode={isDarkMode} mobileSize={mobileSize}/>
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode}/>
    </>
  );
}
