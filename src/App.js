import "./App.css"
import { useSelector } from "react-redux";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
const App = () => {
  const darkMode = useSelector((state)=>state.toggleReducer.darkMode)
  
  return (
    <div  className="App"
     style={{
      background: darkMode? "#2C2C29" : "",
        color:darkMode? "white": ""
        }}>
          <Header/>
          <Intro/>
          <Services/>
          <Skills/>
          <Portfolio/>
          <Contact/>
          <Footer/>
    </div>
    )
}

export default App
