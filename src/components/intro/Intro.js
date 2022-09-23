import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import hassan from "../../img/hassan.png"
import icon8Crown from "../../img/icon8Crown.png"
import thumbup from "../../img/thumbup.png";
import smile from "../../img/smile.png";
import FloatingDiv from "../floatingDiv/FloatingDiv";
import "./Intro.css"
import {motion} from "framer-motion"
const Intro = () => {
    const transition = {duration:2,type:"spring"}
   
    
    return (
        <div className="intro" >
            <div className="i-left" >
                <div className="i-name">
                    <span>Hello! I Am </span>
                    <span>Hassan lodhi</span>
                    <span>Frontend Developer with beginner level of experience in web designing and development Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo nihil itaque dolor est! Dicta, ea blanditiis amet eum animi error ipsam ipsa, provident id odio, nihil qui minus veniam perferendis.</span>
                </div>
                <button className=" button i-button">Hire me</button>
                <div className="i-icons">
                    <a href="https://github.com/Hassanlodhi912">
                        <GitHubIcon style={{color:"#753a72"}} />

                    </a>

                    <a href="https://www.linkedin.com/in/hassan-lodhi-2a45281aa/">
                        <LinkedInIcon  style={{color:"753a72"}}/>

                    </a>
                    <a href="https://www.instagram.com/lodhi_880/">
                        <InstagramIcon  style={{color:"#753a72"}}/>

                    </a>
                </div>
            </div>
            <div className="i-right" >
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={hassan} alt="" />
            <motion.img
            initial={{left:"-36%"}}
            whileInView={{left:"-24%"}}
            transition={transition}
            
            src={smile} alt="smile"/>

            
<motion.div initial={{right:"-9%",top:"-16%"}}
            whileInView={{right:"5%",top:"-16%"}}
            transition={transition}
>
    <FloatingDiv image ={icon8Crown} txt1="Web" txt2="Developer"   />
</motion.div>


<motion.div initial={{left:"-13%",top:"65%"}}
whileInView={{left:"1%",top:"65%"}}
transition={transition} >
<FloatingDiv
image = {thumbup} txt1 = "Web" txt2 ="Developer"/>
</motion.div>
<div className='blur' ></div>
<div className="blur2"></div>
            </div>
        </div>
    )
}

export default Intro;
 