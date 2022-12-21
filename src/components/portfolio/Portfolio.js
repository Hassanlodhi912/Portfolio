import "./Portfolio.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import gym from "../../img/gym.PNG"
import quizApp from "../../img/quizApp.PNG";
import e from "../../img/e.PNG";
import mobile from "../../img/mobile.jpg";
import Shop from "../../img/Shop.PNG";
import Figma from "../../img/Figma.PNG"
const Portfolio = () => {
  return (
    
      <div className="portfolio" id="Portfolio">
        <span>Recent Project</span>
        <span>Portfolio</span>
        <span>Note:All Other Remaining Projects are uploaded on Github Link is above.</span>
        <Swiper 
         spaceBetween={12}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
           <a href="https://drive.google.com/file/d/1nXx-epJg2uAUXHTAa9NUZw2MYrj0DbpK/view?usp=share_link" target="blank"><img src={Shop} alt="Shop By Voice" />
           </a></SwiperSlide>
        <SwiperSlide>
          <a href="https://drive.google.com/file/d/1_aNLbkw9nQ3jSCXybvjcpnggBOUAuxT6/view?usp=share_link" target="blank"><img src={mobile} alt="" /></a>
           </SwiperSlide>
        <SwiperSlide>
          <a href="https://quizapphassan.netlify.app/" target="_blank"><img src={quizApp} alt="quiz" /></a> 
          </SwiperSlide>
        <SwiperSlide>
          <a href="https://hassan-fitness.netlify.app/" target="_blank"><img src={gym} alt="gym" /></a>
           </SwiperSlide>
        <SwiperSlide>
           <a href="https://redux-ecomerce-app.netlify.app/" target="_blank"><img src={e} alt="E"  /> </a>
           </SwiperSlide>
        <SwiperSlide>
           <a href="https://www.figma.com/proto/gubDTUEBlPUjj583swfmp1/Shop-by-voice?node-id=7%3A32&scaling=scale-down&page-id=0%3A1&starting-point-node-id=7%3A32" target="_blank"><img src={Figma} alt="Figma" /></a> 
           </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" /> 
          </SwiperSlide>
     
      </Swiper>
      </div>
      
    
  )
}

export default Portfolio;
