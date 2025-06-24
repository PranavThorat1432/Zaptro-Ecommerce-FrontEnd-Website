import React, { useState } from 'react'
import { getData } from '../Context/DataContext'
import { useNavigate } from 'react-router-dom'
import { 
  Smartphone, 
  Laptop, 
  Headphones, 
  Watch, 
  Camera, 
  Gamepad2, 
  Speaker, 
  Tablet,
  Monitor,
  Keyboard,
  Mouse,
  Printer
} from 'lucide-react'

const Category = () => {
    const { categoryOnlyData } = getData()
    const [activeCategory, setActiveCategory] = useState('All')
    const navigate = useNavigate()

    // Category icons mapping
    const categoryIcons = {
        'All': <Monitor className="w-5 h-5 sm:w-6 sm:h-6" />,
        'smartphones': <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />,
        'laptops': <Laptop className="w-5 h-5 sm:w-6 sm:h-6" />,
        'headphones': <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />,
        'smartwatches': <Watch className="w-5 h-5 sm:w-6 sm:h-6" />,
        'cameras': <Camera className="w-5 h-5 sm:w-6 sm:h-6" />,
        'gaming': <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6" />,
        'speakers': <Speaker className="w-5 h-5 sm:w-6 sm:h-6" />,
        'tablets': <Tablet className="w-5 h-5 sm:w-6 sm:h-6" />,
        'monitors': <Monitor className="w-5 h-5 sm:w-6 sm:h-6" />,
        'keyboards': <Keyboard className="w-5 h-5 sm:w-6 sm:h-6" />,
        'mice': <Mouse className="w-5 h-5 sm:w-6 sm:h-6" />,
        'printers': <Printer className="w-5 h-5 sm:w-6 sm:h-6" />
    }

    const handleCategoryClick = (category) => {
        setActiveCategory(category)
        navigate('/products', { 
            state: { 
                selectedCategory: category 
            } 
        })
    }

    return (
        <div className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden py-12 sm:py-16'>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Header */}
                <div className="text-center mb-10 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                        SHOP BY <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">CATEGORY</span>
                    </h2>
                    <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
                        EXPLORE OUR WIDE RANGE OF PRODUCTS ACROSS DIFFERENT CATEGORIES
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6">
                        {categoryOnlyData?.map((item, index) => {
                            const isActive = activeCategory === item
                            
                            return (
                                <div key={index} className="flex flex-col items-center text-center group">
                                    <button 
                                        onClick={() => handleCategoryClick(item)}
                                        className={`
                                            relative flex flex-col items-center justify-center
                                            w-24 h-24 sm:w-28 sm:h-28 
                                            rounded-2xl p-2
                                            transition-all duration-300 ease-in-out
                                            transform group-hover:scale-105 group-hover:-translate-y-2
                                            border
                                            cursor-pointer
                                            ${isActive 
                                                ? 'bg-gradient-to-br from-red-500 to-purple-500 text-white border-transparent shadow-lg shadow-red-500/30' 
                                                : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-white/20'
                                            }
                                        `}
                                    >
                                        {/* Icon */}
                                        <div className="mb-2 transition-all duration-300 ease-in-out">
                                            {categoryIcons[item.toLowerCase()] || categoryIcons['All']}
                                        </div>

                                        {/* Category Name */}
                                        <span className="font-semibold text-[10px] sm:text-xs uppercase transition-all duration-300 ease-in-out line-clamp-1">
                                            {item}
                                        </span>

                                        {/* Active Indicator */}
                                        {isActive && (
                                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse border-2 border-gray-800"></div>
                                        )}
                                    </button>
                                    <div className="mt-2 text-center">
                                        <span className="text-xs text-gray-400 font-medium uppercase transition-colors group-hover:text-white">
                                            {item === 'All' ? 'All Products' : item}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Bottom Decoration */}
                <div className="mt-12 flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default Category
