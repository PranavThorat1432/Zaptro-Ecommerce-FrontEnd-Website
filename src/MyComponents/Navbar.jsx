import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { SignedIn, SignedOut, SignInButton, UserButton, } from "@clerk/clerk-react";
import { CgClose } from "react-icons/cg";
import { useCart } from "../Context/CartContext";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponseiveMenu from "./ResponseiveMenu";

const Navbar = ({location, getLocation, openDropdown, setOpenDropdown}) => {

  const {cartItem} = useCart()
  const [openNav, setOpenNav] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown)
  } 

  const handleLocationClick = () => {
    if (getLocation) {
      getLocation()
    }
  }

  return (
    <div className="relative z-50 ">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden px-4 md:px-8">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px] animate-pulse"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
      </div>

      {/* Main Navbar Content */}
      <div className="relative bg-white/10 backdrop-blur-md border-b border-white/20 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo section */}
          <div className="flex gap-7 items-center">
            <Link to={"/"} className="group">
              <h1 className="font-bold text-3xl text-white group-hover:scale-105 transition-transform duration-300">
                <span className="text-red-400 font-serif bg-gradient-to-r from-red-400 to-red-600 bg-clip-text">Z</span>
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">aptro</span>
              </h1>
            </Link>

            <div className="md:flex gap-2 cursor-pointer text-gray-200 items-center group hover:bg-white/10 p-2 rounded-lg transition-all duration-300 hidden relative">
              <MapPin className="text-red-400 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-white">
                {location ? (
                  <div className="-space-y-1">
                    <p className="text-sm">{location.city}</p>
                    <p className="text-xs text-gray-300">{location.state}</p>
                  </div>
                ) : (
                  <span className="text-sm">Add Address</span>
                )}
              </span> 
              <FaCaretDown 
                onClick={toggleDropdown} 
                className="text-gray-400 group-hover:text-red-400 transition-colors hover:rotate-180 transform duration-300"
              />
            </div>

            {/* Location Dropdown */}
            {openDropdown && (
              <div className="absolute top-16 left-60 w-[280px] bg-white/95 backdrop-blur-md shadow-2xl border border-white/20 rounded-xl p-6 z-[60] animate-fade-in">
                <h1 className="font-semibold mb-4 text-xl text-gray-800 flex justify-between items-center">
                  Change Location 
                  <span onClick={toggleDropdown}>
                    <CgClose className="cursor-pointer hover:text-red-500 transition-colors hover:scale-110" />
                  </span>
                </h1>
                <button 
                  onClick={handleLocationClick} 
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-lg cursor-pointer hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Detect my Location
                </button>
              </div>
            )}
          </div>

          {/* Menu section */}
          <nav className="flex gap-8 items-center">
            <ul className="md:flex gap-8 items-center text-lg font-semibold hidden">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `relative px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer group ${
                    isActive
                      ? "text-white bg-gradient-to-r from-red-500/20 to-purple-500/20 border border-white/20"
                      : "text-gray-200 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                <li className="relative">
                  Home
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                </li>
              </NavLink>
              <NavLink
                to={"/products"}
                className={({ isActive }) =>
                  `relative px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer group ${
                    isActive
                      ? "text-white bg-gradient-to-r from-red-500/20 to-purple-500/20 border border-white/20"
                      : "text-gray-200 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                <li className="relative">
                  Products
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                </li>
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  `relative px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer group ${
                    isActive
                      ? "text-white bg-gradient-to-r from-red-500/20 to-purple-500/20 border border-white/20"
                      : "text-gray-200 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                <li className="relative">
                  About
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                </li>
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  `relative px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer group ${
                    isActive
                      ? "text-white bg-gradient-to-r from-red-500/20 to-purple-500/20 border border-white/20"
                      : "text-gray-200 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                <li className="relative">
                  Contact
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                </li>
              </NavLink>
            </ul>

            {/* Cart Icon */}
            <Link to={"/cart"} className="relative group hover:scale-110 transition-transform duration-300">
              <div className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300">
                <IoCartOutline className="h-6 w-6 text-white group-hover:text-red-400 transition-colors"></IoCartOutline>
              </div>
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 px-2 py-1 rounded-full text-white text-xs font-bold shadow-lg animate-pulse">{cartItem.length}</span>
            </Link>

            {/* Auth Buttons */}
            <div className="items-center gap-3 hidden md:block">
              <SignedOut>
                <SignInButton className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold" />
              </SignedOut>
              <SignedIn>
                <div className="p-1 rounded-lg bg-white/10">
                  <UserButton />
                </div>
              </SignedIn>
            </div>
            {
              openNav ? <HiMenuAlt3 onClick={() => setOpenNav(false)} className="text-white h-7 w-7 md:hidden"/> : <HiMenuAlt1 onClick={() => setOpenNav(true)} className="text-white h-7 w-7 md:hidden"/>
            }
          </nav>
        </div>
        <ResponseiveMenu openNav={openNav} setOpenNav={setOpenNav} />
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
