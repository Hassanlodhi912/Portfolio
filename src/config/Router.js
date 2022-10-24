
import { BrowserRouter, Routes } from "react-router-dom";
import Contact from "../components/contact/Contact";
import Experience from "../components/experience/Experience";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Intro from "../components/intro/Intro";
import Portfolio from "../components/portfolio/Portfolio";
import Services from "../components/services/Services";
import Skills from "../components/skills/Skills";

function Router() {
  return (
    <>
   
     <BrowserRouter>
      {/* <Routes> */}
     <Header />
      <Intro />
      <Services />
      <Skills/>
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
      {/* </Routes> */}
     </BrowserRouter>
    </>

  );
}

export default Router;
