import "./intro.scss";
import FirstIcon from "./circles/first";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
export default function Intro() {
  return (
    <div className="container2">
      <div className="wrap">
        
        <div className="Circle">
            <FirstIcon/>
        </div>
        <h1 className="title" >Welcome to MD</h1>
        <p className='desc' >Our team will present you an interactive solution to The Digital Divide</p>

        <div className="dotsWrap">
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <button type="submit" className="btn" >Let’s start!</button>
      </div>
    </div>
  );
}
