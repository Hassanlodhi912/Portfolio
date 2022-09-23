import Card from "../card/Card";
import awesomeImage1 from "../../img/awesomeImage1.png";
import awesomeImage2 from "../../img/awesomeImage2.png";
import smile from "../../img/smile.png";
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
        <span>Lorem ipsum dolor sit amet consectetu
          adipisicing elit. Tempore quam voluptate voluptates
          <br />
          fuga quae dolore aliquam quibusdam at nemo. Providen
          <br />
          t assumenda fuga cupiditate eum placeat, atque cumque
          veritatis quasi perferendis?</span>
        <a href={Cv} download>

          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#dfcae7", left: "20rem", top: "14rem" }}></div>
        <div className="blur s-blur1" style={{ background: "#dfcae7", left: "42rem", top: "32rem" }}></div>
      </div>
      <div className="cards">
      <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "18rem" }}
          transition={transition}
        >
          <Card
            emoji={awesomeImage1}
            heading={"Design"}
            detail={"HTML, CSS, Javascript, React"} />
              </motion.div>
              <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem",top:"12rem" }}
          transition={transition}
        >
          <Card
            emoji={awesomeImage2}
            heading={"Design"}
            detail={"HTML, CSS, Javascript, React"} />
            </motion.div>
            <motion.div
          initial={{ left: "25rem",top: "28rem" }}
          whileInView={{ left: "18rem"  ,top: "28rem"}}
          transition={transition}
        >
          <Card
            emoji={smile}
            heading={"Design"}
            detail={"HTML, CSS, Javascript, React"} />
            </motion.div>

        <div
          className="blur s-blur2"
          style={{
            backgroundColor: "#dfcae7", left: "16rem", top: "4rem"

          }}
        ></div>
      </div>

    </div>
  )
}

export default Services;
