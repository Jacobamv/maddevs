import "./intro.scss";
import FirstIcon from "./circles/first";
import SecondIcon from "./circles/second";
import ThirdIcon from "./circles/third";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useSwiper } from "swiper/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const [SwiperVar, setSwiperVar] = React.useState(useSwiper())
  const navigate = useNavigate()
  return (

    <div className="Introbody">
      <>
        <Swiper
          onSwiper={(sw) => {
            setSwiperVar(sw);
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className='mySwiper'
        >
          <SwiperSlide>
            <div className='container2'>
              <div className='wrap'>
                <div className='Circle'>
                  <FirstIcon />
                </div>
                <h1 className='title'>Welcome to MD</h1>
                <p className='desc'>
                  Our team will present you an interactive solution to The
                  Digital Divide
                </p>

                <div className='dotsWrap'>
                  <div className='dot active'></div>
                  <div className='dot'></div>
                  <div className='dot'></div>
                </div>
                <button
                  type='submit'
                  onClick={() => SwiperVar.slideNext()}
                  className='btn'
                >
                  Let’s start!
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='container2'>
              <div className='wrap'>
                <div className='Circle'>
                  <SecondIcon />
                </div>
                <h1 className='title'>Everything in one</h1>
                <p className='desc'>
                  Here you can see solution from different perspective.
                </p>

                <div className='dotsWrap'>
                  <div className='dot'></div>
                  <div className='dot active'></div>
                  <div className='dot'></div>
                </div>
                <button
                  type='submit'
                  onClick={() => SwiperVar.slideNext()}
                  className='btn'
                >
                  Let’s start!
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container2">
              <div className="wrap">
                
                <div className="Circle planet">
                    <ThirdIcon/>
                </div>
                <h1 className='title'>Save planet?</h1>
                <p className='desc'>
                  Let’s save planet with the best solution ever!
                </p>

                <div className='dotsWrap'>
                  <div className='dot'></div>
                  <div className='dot'></div>
                  <div className='dot active'></div>
                </div>
                <button type="submit" onClick={() => {navigate("/team-display")}} className="btn" >Let’s start!</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}
