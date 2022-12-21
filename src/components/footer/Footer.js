import "./Footer.css"
import wave from "../../img/wave.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <div className="footer">
      <img src={wave} alt="wave" style={{width:"100%"}} />
     <div className="f-content">
       <span>muhammadhassanlodhi123@gmail.com</span>
       <div className="f-icons">
                    <a href="https://github.com/Hassanlodhi912" target="blank">
                        <GitHubIcon style={{color:"white"}} />
                    </a>
                    <a href="https://www.linkedin.com/in/hassan-lodhi-2a45281aa/" target="blank">
                        <LinkedInIcon  style={{color:"white"}}/>
                    </a>
                    <a href="https://www.instagram.com/lodhi_880/" target="blank">
                        <InstagramIcon  style={{color:"white"}}/>
                    </a>
                </div>

   </div>
   </div>
  )
}

export default Footer
