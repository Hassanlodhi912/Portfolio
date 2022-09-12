import "./Portfolio.css";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import gym from "../../img/gym.PNG"
import quizApp from "../../img/quizApp.PNG"
import todoApp from "../../img/todoApp.PNG"
import e from "../../img/e.PNG"
import hagman from "../../img/hagman.PNG"
import quote from "../../img/quote.PNG"
import chatApp from "../../img/chatApp.PNG"
const Portfolio = () => {
  return (
    
      <div className="portfolio">
        {/* heading */}
        <span>Recent Project</span>
        <span>Portfolio</span>
        {/* slider */}
        <Swiper  spaceBetween={30}
        slidesPerView={6 }
        grabCursor={true}
        className="portfolio-slider">
        <SwiperSlide><img src={quizApp} alt="quiz" /> </SwiperSlide>
        <SwiperSlide><img src={todoApp} alt="todo" /> </SwiperSlide>
        <SwiperSlide><img src={gym} alt="gym" /> </SwiperSlide>
        <SwiperSlide><img src={e} alt="E" /> </SwiperSlide>
        <SwiperSlide><img src={hagman} alt="hangman" /> </SwiperSlide>
        <SwiperSlide><img src={quote} alt="qote" /> </SwiperSlide>
        <SwiperSlide><img src={chatApp} alt="chatapp" /> </SwiperSlide>
     
      </Swiper>
      
      
       
      </div>
      
    
  )
}

export default Portfolio;
