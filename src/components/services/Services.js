import Card from "../card/Card";
import awesomeImage1 from "../../img/awesomeImage1.png";
import awesomeImage2 from "../../img/awesomeImage2.png";
import smile from "../../img/smile.PNG";
import Cv from "../../cv/Cv.pdf";
import "./Services.css"
import {motion} from "framer-motion"

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
          whileInView={{ left: "18rem" }}
          transition={transition}
        >
          <Card
            emoji={awesomeImage1}
            heading={"DESIGN"}
            detail={"I design aesthetically pleasing and appealing"} />
              </motion.div>
              <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem",top:"12rem" }}
          transition={transition}
        >
          <Card
            emoji={awesomeImage2}
            heading={"SCALABILITY"}
            detail={"My priority is to scale the Businesses of Client"} />
            </motion.div>
            <motion.div
          initial={{ left: "25rem",top: "28rem" }}
          whileInView={{ left: "18rem"  ,top: "28rem"}}
          transition={transition}
        >
          <Card
            emoji={smile}
            heading={"RESPONSIVENESS"}
            detail={"I build websites that user open on any device"} />
            </motion.div>
      </div>

    </div>
  )
}

export default Services;
