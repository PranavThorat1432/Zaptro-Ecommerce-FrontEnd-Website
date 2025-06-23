import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where you would typically handle form submission,
    // e.g., send the data to a backend API or a service like EmailJS.
    console.log('Form submitted:', formData);
    toast.success('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: MapPin, text: "19, Jalgaon, Maharashtra, India" },
    { icon: Mail, text: "support@zaptro.com" },
    { icon: Phone, text: "+91 123456789" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center px-4 py-16 sm:py-24 animate-fade-in">
      <div className="relative max-w-6xl w-full mx-auto backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-0 w-48 h-48 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        <div className="relative grid md:grid-cols-2">
          {/* Info Section */}
          <div className="p-8 sm:p-12 lg:p-16 space-y-8 bg-black/20">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold">Get in Touch</h2>
              <p className="text-gray-300 mt-2">
                Have a question or need support? We're here to help you on your tech journey.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4 animate-fade-in-up" style={{ animationDelay: `${200 + index * 100}ms` }}>
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <p className="text-gray-200 mt-3">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8 sm:p-12 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300" 
                />
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300" 
                />
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..." 
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                ></textarea>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                <button 
                  type="submit" 
                  className="w-full group bg-gradient-to-r from-red-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;