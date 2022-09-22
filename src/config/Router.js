
import Contact from "../components/contact/Contact";
import Experience from "../components/experience/Experience";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Intro from "../components/intro/Intro";
import Portfolio from "../components/portfolio/Portfolio";
import Services from "../components/services/Services";

function Router() {
  return (
    <>
      <Header />
      <Intro />
      <Services />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />

    </>

  );
}

export default Router;
