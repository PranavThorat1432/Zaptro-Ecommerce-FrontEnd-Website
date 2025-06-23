import React from "react";
import { Link } from "react-router-dom";
import { Award, Rocket, ShieldCheck, HeartHandshake, Zap, Target, Lightbulb } from 'lucide-react';
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  const values = [
    { icon: Zap, title: "Innovation", description: "We constantly seek out and offer the latest in tech to keep you ahead of the curve." },
    { icon: Award, title: "Quality", description: "We are committed to providing only high-quality, reliable products from trusted brands." },
    { icon: HeartHandshake, title: "Customer-Centric", description: "Our customers are at the heart of everything we do. Your satisfaction is our priority." },
    { icon: Lightbulb, title: "Inspiration", description: "We aim to inspire a passion for technology and its potential to improve lives." }
  ];

  const features = [
    { icon: Award, title: "Top-Quality Products", description: "Curated selection of electronics from industry-leading brands." },
    { icon: Rocket, title: "Lightning-Fast Shipping", description: "Get your tech delivered to your doorstep with speed and care." },
    { icon: ShieldCheck, title: "Secure & Easy Shopping", description: "A seamless and secure checkout process you can trust." },
    { icon: HeartHandshake, title: "Reliable Customer Support", description: "Our dedicated team is always here to help you with any questions." }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white animate-fade-in">
      {/* Hero Section */}
      <div className="relative text-center py-20 sm:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1),transparent_40%)]"></div>
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            About <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">Zaptro</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms]">
            Powering Your World with the Best in Electronics. We are your one-stop destination for cutting-edge technology and exceptional service.
          </p>
        </div>
      </div>

      {/* Our Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 animate-fade-in-up [animation-delay:300ms]">
            <div className="flex items-center gap-4">
              <Target className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              At Zaptro, our mission is to make innovative technology accessible to everyone. We're passionate about connecting people with the tools and tech they need to thrive in a digital world — all at competitive prices and delivered with speed and care.
            </p>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl shadow-lg animate-fade-in-up [animation-delay:400ms]">
            <blockquote className="text-xl italic text-gray-200 border-l-4 border-red-500 pl-6">
              "We envision a future where technology elevates everyday life. We are committed to staying ahead of the curve, offering solutions that are both practical and affordable."
              <cite className="block text-right not-italic mt-4 text-sm text-gray-400">— The Zaptro Team</cite>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-900/50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Core Values</h2>
            <p className="text-lg text-gray-400 mt-2">The principles that guide our work and define our brand.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/10 animate-fade-in-up" style={{ animationDelay: `${500 + index * 100}ms` }}>
                <div className="inline-block p-4 bg-red-500/10 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why Choose Zaptro?</h2>
          <p className="text-lg text-gray-400 mt-2">Your satisfaction is our guarantee.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-transparent hover:border-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${900 + index * 100}ms` }}>
              <div className="flex-shrink-0 p-3 bg-red-500/10 rounded-full">
                <feature.icon className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gray-800/50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Join the Zaptro Family</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a tech enthusiast, a professional, or just looking for something cool and functional — Zaptro has something for everyone. Explore our products and find your next favorite gadget today.
          </p>
          <Link to={'/products'}>
            <button className='group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 flex items-center justify-center gap-3 w-fit mx-auto'>
              <span>Start Shopping</span>
              <IoArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default About;