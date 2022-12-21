import "./Intro.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png"
import hassan from "../../img/hassan.png"
import icon8Crown from "../../img/icon8Crown.png"
import thumbup from "../../img/thumbup.png";
import smile from "../../img/smile.png";
import FloatingDiv from "../floatingDiv/FloatingDiv";
import { motion } from "framer-motion"
import { Link } from 'react-scroll';
const Intro = () => {
    const transition = { duration: 2, type: "spring" }

    return (
        <div className="intro" >
            <div className="i-left" >
                <div className="i-name">
                    <span>Hello! I am </span>
                    <span>Hassan lodhi</span>
                    <span>
                        I am a passionate and  Web and Mobile App Developer with problem-solving skills and proven experience in creating and designing. Working on various projects on React js and React Native . I am also pursuing my bachelor's degree from Hamdard University and a 4th year student of Computer Science. I am a keen learner who wants to make move towards new technology and likes to integrate to a new system.</span>
                </div>
                <Link to="Contact" smooth={true} spy={true}>
                    <button className="button i-button">Hire me</button>
                </Link>
                <div className="i-icons">
                    <a href="https://github.com/Hassanlodhi912" target="_blank">
                        <GitHubIcon style={{ color: "#753a72" }} />

                    </a>

                    <a href="https://www.linkedin.com/in/hassan-lodhi-2a45281aa/" target="_blank">
                        <LinkedInIcon style={{ color: "753a72" }} />

                    </a>
                    <a href="https://www.instagram.com/lodhi_880/" target="_blank">
                        <InstagramIcon style={{ color: "#753a72" }} />

                    </a>
                </div>

            </div>

            <div className="i-right" >
                <img src={Vector1} alt="V1" />
                <img src={Vector2} alt="V2" />
                <img src={hassan} alt="Hassan" />

                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={smile}
                    alt="smile"
                />

                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "80%" }}
                    transition={transition}
                    className="floating-div"
                >
                    <FloatingDiv
                        image={icon8Crown}
                        txt1="App"
                        txt2="Developer"
                    />
                </motion.div>

                <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    className="floating-div"
                >
                    <FloatingDiv
                        image={thumbup} txt1="Web" txt2="Developer" />
                </motion.div>
                <div

                ></div>
            </div>
        </div>

    )
}

export default Intro;
