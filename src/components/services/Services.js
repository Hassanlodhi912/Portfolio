import Card from "../card/Card";
import awesomeImage1 from "../../img/awesomeImage1.png";
import awesomeImage2 from "../../img/awesomeImage2.png";
import smile from "../../img/smile.png";
import Cv from "../../cv/Cv.pdf";
import "./Services.css"

const Services = () => {
  return (
    <div className="services">
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
        <div style={{ left: "18rem" }}>
          <Card
            emoji={awesomeImage1}
            heading={"Design"}
            detail={"HTML, CSS, Javascript, React"} />
        </div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={awesomeImage2}
            heading={"Design"}
            detail={"HTML, CSS, Javascript, React"} />
        </div>
        <div style={{ top: "28rem", left: "18rem" }}>
          <Card
            emoji={smile}
            heading={"Design"}
            detail={"HTML, CSS, Javascript, React"} />
        </div>
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
