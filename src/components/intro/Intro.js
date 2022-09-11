import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import hassan from "../../img/hassan.png"
import crown from "../../img/crown.png";
import thumbup from "../../img/thumbup.png";
import smile from "../../img/smile.png";
import FloatingDiv from "../floatingDiv/FloatingDiv";
import FloatingDiv2 from "../floatngDiv2/FloatingDiv2";
import "./Intro.css"

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
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
            <div className="i-right">
            <img src={Vector1} alt=""/>
            <img src={Vector2} alt=""/>
            <img src={hassan} alt=""/>
            <img src={smile} alt=""/>

            
<div style={{top:"-11%",left:"60%"}}>
    <FloatingDiv image ={crown}txt1="web" txt2="Developer"  />
</div>
{/* <div style={{top:"56%",left:"61%"}}>
    <FloatingDiv2 image={thumbup} txt1="Best" txt2="Design"/>
</div> */}
<div style={{top:"51%" , left:"61%"}} >
<FloatingDiv2  
image = {thumbup} text1 = "web" text2 ="Developer"/>
</div>
<div className='blur' ></div>
<div className="blur2"></div>
            </div>
        </div>
    )
}

export default Intro;
 