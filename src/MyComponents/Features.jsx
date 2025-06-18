import React from 'react'
import { 
  Truck, 
  Lock, 
  RotateCcw, 
  Clock,
  Shield,
  Zap,
  Gift,
  Headphones
} from 'lucide-react'

const features = [
    {
        icon: Truck, 
        text: "Free Shipping", 
        subtext: "On orders over $50",
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-50",
        iconColor: "text-blue-600"
    },
    {
        icon: Lock, 
        text: "Secure Payment", 
        subtext: "100% Protected Payments",
        color: "from-green-500 to-green-600",
        bgColor: "bg-green-50",
        iconColor: "text-green-600"
    },
    {
        icon: RotateCcw, 
        text: "Easy Returns", 
        subtext: "30-days return policy",
        color: "from-purple-500 to-purple-600",
        bgColor: "bg-purple-50",
        iconColor: "text-purple-600"
    },
    {
        icon: Clock, 
        text: "24/7 Support", 
        subtext: "Dedicated customer support",
        color: "from-red-500 to-red-600",
        bgColor: "bg-red-50",
        iconColor: "text-red-600"
    },
    {
        icon: Shield, 
        text: "Warranty", 
        subtext: "Extended warranty available",
        color: "from-orange-500 to-orange-600",
        bgColor: "bg-orange-50",
        iconColor: "text-orange-600"
    },
    {
        icon: Zap, 
        text: "Fast Delivery", 
        subtext: "Same day shipping",
        color: "from-yellow-500 to-yellow-600",
        bgColor: "bg-yellow-50",
        iconColor: "text-yellow-600"
    },
    {
        icon: Gift, 
        text: "Gift Cards", 
        subtext: "Perfect for any occasion",
        color: "from-pink-500 to-pink-600",
        bgColor: "bg-pink-50",
        iconColor: "text-pink-600"
    },
    {
        icon: Headphones, 
        text: "Live Chat", 
        subtext: "Instant help when needed",
        color: "from-indigo-500 to-indigo-600",
        bgColor: "bg-indigo-50",
        iconColor: "text-indigo-600"
    }
]

const Features = () => {
  return (
    <div className='bg-gradient-to-br from-gray-50 to-white py-16 lg:py-20 overflow-hidden'>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Zaptro</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing you with the best shopping experience with our comprehensive 
            range of services and support.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
            {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                    <div 
                        key={index} 
                        className='group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-200'
                    >
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                        
                        {/* Icon Container */}
                        <div className={`relative mb-4 w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className={`w-8 h-8 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                        
                        {/* Content */}
                        <div className="relative">
                            <h3 className='text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors'>
                                {feature.text}
                            </h3>
                            <p className='text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors'>
                                {feature.subtext}
                            </p>
                        </div>

                        {/* Hover Effect Border */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
                        
                        {/* Floating Elements */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-red-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-bounce"></div>
                    </div>
                )
            })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-lg text-red-100 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Zaptro for their electronic needs. 
              Start shopping today and enjoy our premium services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                Shop Now
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
