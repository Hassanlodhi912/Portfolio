import "./Services.css"
import Card from "../card/Card";
import awesomeImage2 from "../../img/awesomeImage2.png";
import smile from "../../img/smile.png";
import Cv from "../../cv/Cv.pdf";
import heartemoji from "../../img/heartemoji.png"
import { motion } from "framer-motion"

const Services = () => {
  const transition = {
    duration: 1,
    type: "spring",
  };
  
  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>The valuable services that I offer with my skillset to add value to your bussiness and scale your bussiness.</span>
        <a href={Cv} download>

          <button className="button s-button">Download CV</button>
        </a>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={heartemoji}
            heading={"DESIGN"}
            detail={"I design aesthetically pleasing and appealing"} />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={awesomeImage2}
            heading={"SCALABILITY"}
            detail={"My priority is to scale the Businesses of Client"} />
        </motion.div>

        <motion.div
          initial={{ left: "19rem", top: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={smile}
            heading={"RESPONSIVENESS"}
            detail={"I build websites that user open on any device"}
            color="rgba(252, 166, 31, 0.45)" />
        </motion.div>
      </div>

    </div>
  )
}

export default Services;
