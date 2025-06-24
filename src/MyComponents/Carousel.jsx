import React, { useContext, useEffect, useState } from 'react'
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

    const SamplePrevArrow = ({ onClick }) => (
      <div
        onClick={onClick}
        className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-20 cursor-pointer"
        style={{ zIndex: 20 }}
      >
        <div className="bg-[#f53347] hover:bg-[#555] text-white rounded-full p-2 sm:p-3 transition-colors duration-200 ease-in-out shadow-md">
          <AiOutlineArrowLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </div>
      </div>
    );
    
    const SampleNextArrow = ({ onClick }) => (
      <div
        onClick={onClick}
        className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-20 cursor-pointer"
        style={{ zIndex: 20 }}
      >
        <div className="bg-[#f53347] hover:bg-[#555] text-white rounded-full p-2 sm:p-3 transition-colors duration-200 ease-in-out shadow-md">
          <AiOutlineArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </div>
      </div>
    );
    
    var settings = {
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    
  return (
    <div className="relative">
      <Slider {...settings}>
        {
            data?.slice(0,7)?.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden">
                        
                        {/* Animated background pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] animate-pulse"></div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 min-h-[80vh] sm:min-h-[auto] py-24 sm:py-32 md:py-40">
                            <div className="space-y-4 md:space-y-6 text-center lg:text-left max-w-2xl">
                                {/* Badge inline with title */}
                                <div className="hidden md:inline-flex items-center px-6 py-3 bg-red-500/40 backdrop-blur-sm rounded-full border border-red-500/50">
                                    <h3 className="text-red-300 font-semibold text-sm">
                                        🚀 Powering Your World with the Best in Electronics
                                    </h3>
                                </div>

                                {/* Title */}
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase line-clamp-3 text-white leading-tight">
                                    <span className="bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
                                        {item.title}
                                    </span>
                                </h1>

                                {/* Description */}
                                <p className="text-base sm:text-lg line-clamp-3 text-gray-300 leading-relaxed max-w-xl">
                                    {item.description}
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-110 hover:from-red-600 hover:to-purple-600 shadow-lg hover:shadow-2xl hover:shadow-red-500/30 font-semibold group hover:-translate-y-1">
                                        <span className="flex items-center gap-2">
                                            Shop Now
                                            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </span>
                                    </button>
                                    <button className="border-2 border-white/30 text-white px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm font-semibold hover:scale-105 transform">
                                        Learn More
                                    </button>
                                </div>

                                {/* Stats */}
                                <div className="flex justify-center lg:justify-start gap-8 pt-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">10K+</div>
                                        <div className="text-sm text-gray-400">Happy Customers</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">500+</div>
                                        <div className="text-sm text-gray-400">Products</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">24/7</div>
                                        <div className="text-sm text-gray-400">Support</div>
                                    </div>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="relative">
                                <div className="relative group">
                                    {/* Glow effect */}
                                    <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                    
                                    {/* Main image - KEEPING ORIGINAL HOVER EFFECT */}
                                    <img 
                                        src={item.image} 
                                        // alt={item.title} 
                                        className='relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl shadow-red-400 hover:scale-105 transition-all duration-500 border border-white/20' 
                                    />
                                    
                                    {/* Floating elements */}
                                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-bounce"></div>
                                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse"></div>
                                </div>
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
