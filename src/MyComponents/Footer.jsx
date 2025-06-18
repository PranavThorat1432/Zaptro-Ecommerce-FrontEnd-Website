import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaTwitter, 
  FaYoutube,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaShieldAlt,
  FaTruck,
  FaCreditCard,
  FaHeadset
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h1 className="text-red-500 text-3xl font-bold hover:text-red-400 transition-colors">
                Zaptro
              </h1>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Powering Your World with the Best in Electronics. We bring you cutting-edge technology 
              and exceptional service for all your electronic needs.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-red-500 w-4 h-4" />
                <span className="text-sm">123 Electronics St, Style City, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-red-500 w-4 h-4" />
                <span className="text-sm">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-red-500 w-4 h-4" />
                <span className="text-sm">support@zaptro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaClock className="text-red-500 w-4 h-4" />
                <span className="text-sm">Mon-Fri: 9AM-6PM EST</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white border-b border-red-500 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Products", href: "/products" },
                { label: "Contact Us", href: "/contact" },
                { label: "Blog & News", href: "/blog" },
                { label: "Careers", href: "/careers" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm block py-1 hover:translate-x-1 transform"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white border-b border-red-500 pb-2">
              Customer Service
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Help Center", href: "/help", icon: FaHeadset },
                { label: "Shipping Info", href: "/shipping", icon: FaTruck },
                { label: "Returns & Exchanges", href: "/returns" },
                { label: "Order Tracking", href: "/tracking" },
                { label: "Size Guide", href: "/size-guide" },
                { label: "Gift Cards", href: "/gift-cards" },
                { label: "Student Discount", href: "/student-discount" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm py-1 hover:translate-x-1 transform flex items-center space-x-2"
                  >
                    {item.icon && <item.icon className="w-3 h-3" />}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white border-b border-red-500 pb-2">
              Stay Connected
            </h3>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-sm text-gray-300">
                Subscribe to get exclusive offers, new product alerts, and tech tips!
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <p className="text-sm text-gray-300">Follow us on social media</p>
              <div className="flex space-x-3">
                {[
                  { icon: FaFacebook, href: "#", color: "hover:text-blue-400" },
                  { icon: FaInstagram, href: "#", color: "hover:text-pink-400" },
                  { icon: FaTwitter, href: "#", color: "hover:text-blue-300" },
                  { icon: FaLinkedin, href: "#", color: "hover:text-blue-500" },
                  { icon: FaYoutube, href: "#", color: "hover:text-red-400" },
                  { icon: FaTiktok, href: "#", color: "hover:text-pink-300" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 transition-all duration-200 hover:bg-gray-600 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: FaShieldAlt, text: "Secure Shopping", desc: "SSL Protected" },
              { icon: FaTruck, text: "Fast Delivery", desc: "Free on orders $50+" },
              { icon: FaCreditCard, text: "Easy Payment", desc: "Multiple options" },
              { icon: FaHeadset, text: "24/7 Support", desc: "Always here to help" },
            ].map((badge, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <badge.icon className="w-8 h-8 text-red-500" />
                <div>
                  <p className="text-sm font-semibold text-white">{badge.text}</p>
                  <p className="text-xs text-gray-400">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()}{" "}
              <Link to="/" className="text-red-500 hover:text-red-400 font-semibold">
                Zaptro
              </Link>
              . All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer