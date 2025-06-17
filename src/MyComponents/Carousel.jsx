import React, { useContext, useEffect } from 'react'
import { getData } from '../Context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Category from './Category';

const Carousel = () => {
    const {data, fetchAllProducts} = getData()

    useEffect(() => {
        fetchAllProducts()
    },[])

    const SamplePrevArrow = (props) => {
      const { className, style, onClick } = props;
      return (
        <div
          onClick={onClick}
          className={`arrow ${className}`}
          style={{ zIndex: 3 }}
        >
          <AiOutlineArrowLeft
            className="arrows"
            style={{
                ...style,
                display: "block",
                borderRadius: "50%",
                backgroundColor: "#f53347",
                color: "white",
                position: "absolute",
                padding: "10px",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%) translateX(50%)",
                cursor: "pointer",
                transition: "background-color 0.2s ease-in-out",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#555")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#f53347")}
          />
        </div>
      );
    };
    const SampleNextArrow = (props) => {
      const { className, style, onClick } = props;
      return (
        <div
          onClick={onClick}
          className={`arrow ${className}`}
          style={{ zIndex: 3 }}
        >
          <AiOutlineArrowRight
            className="arrows"
            style={{
                ...style,
                display: "block",
                borderRadius: "50%",
                backgroundColor: "#f53347",
                color: "white",
                position: "absolute",
                padding: "10px",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%) translateX(-50%)",
                cursor: "pointer",
                transition: "background-color 0.2s ease-in-out",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#555")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#f53347")}
          />
        </div>
      );
    };
    
    var settings = {
      dots: false,
      autoplay: true,
      autoplayspeed: 2000,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,  
      nextArrow: <SampleNextArrow to="next"></SampleNextArrow>,
      prevArrow: <SamplePrevArrow to="prev"></SamplePrevArrow>
    };
    
  return (
    <div>
      <Slider {...settings}>
        {
            data ?.slice(0,7)?.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10">
                        <div className="flex gap-10 justify-center h-[600px] items-center px-4">
                            <div className="space-y-6">

                                <h3 className="text-red-500 font-semibold font-sans text-sm">
                                Powering Your World with the Best in Electronics</h3>

                                <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-[500px] text-white">
                                {item.title}</h1>

                                <p className="md:w-[500px] line-clamp-3 text-gray-400 pr-7">
                                {item.description}</p>

                                <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2 transition-transform duration-300 transform hover:scale-105 hover:from-red-600 hover:to-purple-600 shadow-md hover:shadow-lg">
                                Shop Now</button>

                            </div>

                            <div>
                                <img src={item.image} alt={item.title} className='rounded-full w-[550px] hover:scale-105 transition-all shadow-2xl shadow-red-400' />
                            </div>
                        </div>
                    </div>
                )
            })
        }
        
      </Slider>

      <Category/>
    </div>
  );
}

export default Carousel
