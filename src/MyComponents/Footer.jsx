import React from 'react'
import { Link } from 'react-router-dom'
// import Logo from '../assets/Logo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between">
        {/*  info */}
        <div className="mb-6 md:mb-0">
          <Link to="/">
            {/* <img src={Logo} alt="" className='w-32'/> */}
            <h1 className="text-red-500 text-2xl font-bold">Zaptro</h1>
          </Link>
          <p className="mt-2 text-sm">
            Powering Your World with the Best in Electronics.
          </p>
          <p className="mt-2 text-sm">
            123 Electronics St, Style City, NY 10001
          </p>
          <p className="text-sm">Email: support@Zaptro.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>

        {/* customer service link */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold">Customer Service</h3>
          <ul className="mt-2 text-sm space-y-2 text-gray-400">
            {[
              { label: "Contact Us", href: "#" },
              { label: "Shipping & Returns", href: "#" },
              { label: "FAQs", href: "#" },
              { label: "Order Tracking", href: "#" },
              { label: "Size Guide", href: "#" },
            ].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer transition-all ease-in-out duration-200 hover:border-b-2 "
              >
                <a
                  href={item.href}
                  className="block py-2 px-4 text-gray-400 hover:text-white hover:bg-gray-900 rounded-md relative"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-width duration-200" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* social media links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <FaFacebook className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaTwitterSquare className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
          </div>
        </div>

        {/* newsletter subscription */}
        <div>
          <h3 className="text-xl font-semibold">Stay in the Loop</h3>
          <p className="mt-2 text-sm">
            Subscribe to get special offers, free giveaways, and more
          </p>
          <form action="" className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 rounded-l-md  text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* bottom section */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <Link>
            <span className="text-red-500 cursor-pointer" to={"/"}>
              Zaptro.
            </span>
          </Link>{" "}
          All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer