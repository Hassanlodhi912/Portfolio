import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import hassan from "../../img/hassan.png"
import icon8Crown from "../../img/icon8Crown.png"
import thumbup from "../../img/thumbup.png";
import smile from "../../img/smile.PNG";
import FloatingDiv from "../floatingDiv/FloatingDiv";
import "./Intro.css"
import { motion } from "framer-motion"
import Grid from "@mui/material/Grid"
const Intro = () => {
    const transition = { duration: 2, type: "spring" }


    return (
    
            <div className="intro" >
                {/* <Grid container>
                    <Grid item lg={6} md={6} sm={6} xs={12}> */}
                    {/* <div className="i-left" > */}
                    {/* <div className="i-name">
                        <span>Hello! I Am </span>
                        <span>Hassan lodhi</span>
                        <span>Frontend Developer with beginner level of experience in web designing and development Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo nihil itaque dolor est! Dicta, ea blanditiis amet eum animi error ipsam ipsa, provident id odio, nihil qui minus veniam perferendis.</span>
                    </div>
                    <div className="i-icons">
                        <a href="https://github.com/Hassanlodhi912">
                            <GitHubIcon style={{ color: "#753a72" }} />

                        </a>

                        <a href="https://www.linkedin.com/in/hassan-lodhi-2a45281aa/">
                            <LinkedInIcon style={{ color: "753a72" }} />

                        </a>
                        <a href="https://www.instagram.com/lodhi_880/">
                            <InstagramIcon style={{ color: "#753a72" }} />

                        </a>
                    </div>

                </div>

                    </Grid> */}
                <div className="i-left" >
                    <div className="i-name">
                        <span>Hello! I Am </span>
                        <span>Hassan lodhi</span>
                        <span>Frontend Developer with beginner level of experience in web designing and development Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo nihil itaque dolor est! Dicta, ea blanditiis amet eum animi error ipsam ipsa, provident id odio, nihil qui minus veniam perferendis.</span>
                    </div>
                    <div className="i-icons">
                        <a href="https://github.com/Hassanlodhi912">
                            <GitHubIcon style={{ color: "#753a72" }} />

                        </a>

                        <a href="https://www.linkedin.com/in/hassan-lodhi-2a45281aa/">
                            <LinkedInIcon style={{ color: "753a72" }} />

                        </a>
                        <a href="https://www.instagram.com/lodhi_880/">
                            <InstagramIcon style={{ color: "#753a72" }} />

                        </a>
                    </div>

                </div>

{/* <Grid item lg={6} md={6} sm={6} xs={12}> */}
{/* <div className="i-right" >
                    <img src={Vector1} alt="" />
                    <img src={Vector2} alt="" />
                    <img src={hassan} alt="" />
                    <motion.img
                        initial={{ left: "-36%" }}
                        whileInView={{ left: "-24%" }}
                        transition={transition}

                        src={smile} alt="smile" />


                    <motion.div initial={{ right: "-11%", top: "-16%" }}
                        whileInView={{ right: "3%", top: "-16%" }}
                        transition={transition}
                    >
                        <FloatingDiv image={icon8Crown} txt1="Web" txt2="Developer" />
                    </motion.div>


                    <motion.div initial={{ left: "-15%", top: "65%" }}
                        whileInView={{ left: "-1%", top: "65%" }}
                        transition={transition} >
                        <FloatingDiv
                            image={thumbup} txt1="Web" txt2="Developer" />
                    </motion.div>
                    <div className='blur' ></div>
                    <div className="blur2"></div>

                </div> */}
{/* </Grid>
// </Grid> */}
        <div className="i-right" >
                    <img src={Vector1} alt="" />
                    <img src={Vector2} alt="" />
                    <img src={hassan} alt="" />
                    <motion.img
                        initial={{ left: "-36%" }}
                        whileInView={{ left: "-24%" }}
                        transition={transition}

                        src={smile} alt="smile" />


                    <motion.div initial={{ right: "-30%", top: "-16%" }}
                        whileInView={{ right: "-15%", top: "-16%" }}
                        transition={transition}
                    >
                        <FloatingDiv image={icon8Crown} txt1="Web" txt2="Developer" />
                    </motion.div>


                    <motion.div initial={{ left: "-33%", top: "65%" }}
                        whileInView={{ left: "-1%", top: "65%" }}
                        transition={transition} >
                        <FloatingDiv
                            image={thumbup} txt1="Web" txt2="Developer" />
                    </motion.div>
                    <div className='blur' ></div>
                    <div className="blur2"></div>

                </div>
            </div>

    )
}

export default Intro;
