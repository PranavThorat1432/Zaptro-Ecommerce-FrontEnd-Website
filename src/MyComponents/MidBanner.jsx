import React, { useState } from 'react'
import banner from '../assets/banner1.jpg'
import { IoArrowForward, IoPlay, IoPause } from 'react-icons/io5'

const MidBanner = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-24 overflow-hidden'>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4'>
        <div 
          className='relative rounded-3xl overflow-hidden h-[650px] lg:h-[750px] bg-cover bg-center shadow-2xl parallax-banner'
          style={{
            backgroundImage: `url(${banner})`, 
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient Overlay */}
          <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40'></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className={`absolute top-10 left-10 w-20 h-20 bg-red-500/20 rounded-full blur-xl transition-all duration-700 ${isHovered ? 'scale-150' : 'scale-100'}`}></div>
            <div className={`absolute bottom-10 right-10 w-16 h-16 bg-purple-500/20 rounded-full blur-xl transition-all duration-700 delay-200 ${isHovered ? 'scale-150' : 'scale-100'}`}></div>
            <div className={`absolute top-1/2 left-1/4 w-12 h-12 bg-blue-500/20 rounded-full blur-lg transition-all duration-700 delay-100 ${isHovered ? 'scale-125' : 'scale-100'}`}></div>
          </div>

          {/* Content */}
          <div className='relative z-10 flex items-center justify-center h-full'>
            <div className='text-center text-white px-6 lg:px-8 max-w-4xl'>
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-12 animate-fade-in">
                <span className="text-white font-semibold text-sm">
                  🎉 Limited Time Offer - Free Shipping on All Orders
                </span>
              </div>

              {/* Main Heading */}
              <h1 className='text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight animate-fade-in-up'>
                <span className="bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
                  Next-Gen Electronics
                </span>
                <br />
                <span className="text-white">at Your Fingertips</span>
              </h1>

              {/* Subtitle */}
              <p className='text-lg lg:text-xl mb-10 text-gray-200 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200'>
                Discover the latest tech innovations with unbeatable prices, lightning-fast delivery, 
                and exceptional customer support. Your journey to the future starts here.
              </p>

              {/* CTA Buttons */}
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-300'>
                <button className='group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 flex items-center gap-3'>
                  <span>Shop Now</span>
                  <IoArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className='group border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm flex items-center gap-3'>
                  <IoPlay className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>

              {/* Features Grid */}
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up delay-400'>
                <div className='text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300'>
                  <div className='text-2xl mb-2'>🚚</div>
                  <h3 className='font-semibold text-white mb-1'>Free Shipping</h3>
                  <p className='text-sm text-gray-300'>On orders over $50</p>
                </div>
                <div className='text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300'>
                  <div className='text-2xl mb-2'>🛡️</div>
                  <h3 className='font-semibold text-white mb-1'>Secure Payment</h3>
                  <p className='text-sm text-gray-300'>100% protected</p>
                </div>
                <div className='text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300'>
                  <div className='text-2xl mb-2'>⚡</div>
                  <h3 className='font-semibold text-white mb-1'>Fast Delivery</h3>
                  <p className='text-sm text-gray-300'>Same day shipping</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 right-8 w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 left-8 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Custom CSS for animations and parallax */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-400 {
          animation-delay: 400ms;
        }
        
        /* Parallax effect */
        .parallax-banner {
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        
        /* Fallback for mobile devices */
        @media (max-width: 768px) {
          .parallax-banner {
            background-attachment: scroll;
          }
        }
      `}</style>
    </div>
  )
}

export default MidBanner