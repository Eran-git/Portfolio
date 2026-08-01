import About from "./component/about/about";
import Projects from "./component/project/project";
import Skills from "./component/skill/skill";
import Header from "./component/header/header";
import Hero from "./component/hero/hero";
import Footer from "./component/footer/footer"

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Footer />
    </>
  );
}
