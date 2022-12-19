import "./Portfolio.css";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import gym from "../../img/gym.PNG"
import quizApp from "../../img/quizApp.PNG";
import e from "../../img/e.PNG";
import mobile from "../../img/mobile.jpg";
const Portfolio = () => {
  return (
    
      <div className="portfolio" id="Portfolio">
        <span>Recent Project</span>
        <span>Portfolio</span>
        <Swiper 
         spaceBetween={10}
        slidesPerView={6}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide><a href="https://quizapphassan.netlify.app/" target="_blank"><img src={quizApp} alt="quiz" /></a> </SwiperSlide>
        <SwiperSlide><a href="https://hassan-fitness.netlify.app/" target="_blank"><img src={gym} alt="gym" /></a> </SwiperSlide>
        <SwiperSlide> <a href="https://redux-ecomerce-app.netlify.app/" target="_blank"><img src={e} alt="E"  /> </a></SwiperSlide>
        <SwiperSlide><a href="https://drive.google.com/file/d/1_aNLbkw9nQ3jSCXybvjcpnggBOUAuxT6/view?usp=share_link" target="_blank"><img src={mobile} alt="" /></a> </SwiperSlide>
        <SwiperSlide><img src="" alt="" /> </SwiperSlide>
        <SwiperSlide><img src="" alt="" /> </SwiperSlide>
        <SwiperSlide><img src="" alt="" /> </SwiperSlide>
     
      </Swiper>
      
      
       
      </div>
      
    
  )
}

export default Portfolio;
