import "./Portfolio.css";
import {Swiper,SwiperSlide} from "swiper/react"
const Portfolio = () => {
  return (
    
      <div className="portfolio">
        {/* heading */}
        <span>Recent Project</span>
        <span>Portfolio</span>
        {/* slide */}
        <Swiper>
          <SwiperSlide>
            <img src="" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      
    
  )
}

export default Portfolio;
