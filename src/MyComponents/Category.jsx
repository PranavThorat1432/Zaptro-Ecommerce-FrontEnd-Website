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
    const [hoveredCategory, setHoveredCategory] = useState(null)
    const navigate = useNavigate()

    // Category icons mapping
    const categoryIcons = {
        'All': <Monitor className="w-5 h-5" />,
        'smartphones': <Smartphone className="w-5 h-5" />,
        'laptops': <Laptop className="w-5 h-5" />,
        'headphones': <Headphones className="w-5 h-5" />,
        'smartwatches': <Watch className="w-5 h-5" />,
        'cameras': <Camera className="w-5 h-5" />,
        'gaming': <Gamepad2 className="w-5 h-5" />,
        'speakers': <Speaker className="w-5 h-5" />,
        'tablets': <Tablet className="w-5 h-5" />,
        'monitors': <Monitor className="w-5 h-5" />,
        'keyboards': <Keyboard className="w-5 h-5" />,
        'mice': <Mouse className="w-5 h-5" />,
        'printers': <Printer className="w-5 h-5" />
    }

    const handleCategoryClick = (category) => {
        setActiveCategory(category)
        navigate('/products', { 
            state: { 
                selectedCategory: category 
            } 
        })
    }

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '0 20px'
    }

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: '24px',
        maxWidth: '1200px',
        width: '100%',
        justifyItems: 'center'
    }

    const itemStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    }

    const buttonStyle = (isActive, isHovered) => ({
        position: 'relative',
        width: '96px',
        height: '96px',
        borderRadius: '16px',
        padding: '16px',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'scale(1.05) translateY(-8px)' : 'scale(1)',
        background: isActive 
            ? 'linear-gradient(135deg, #ef4444, #9333ea)' 
            : 'rgba(255, 255, 255, 0.1)',
        border: `1px solid ${isActive ? 'transparent' : 'rgba(255, 255, 255, 0.2)'}`,
        color: isActive ? 'white' : '#d1d5db',
        cursor: 'pointer',
        boxShadow: isActive ? '0 25px 50px -12px rgba(239, 68, 68, 0.25)' : 'none'
    })

    return (
        <div className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden'>
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

            <div className='relative max-w-7xl mx-auto px-4 py-8'>
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                        SHOP BY <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">CATEGORY</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        EXPLORE OUR WIDE RANGE OF PRODUCTS ACROSS DIFFERENT CATEGORIES
                    </p>
                </div>

                {/* Categories Grid - Centered */}
                <div style={containerStyle}>
                    <div style={gridStyle}>
                        {categoryOnlyData?.map((item, index) => {
                            const isActive = activeCategory === item
                            const isHovered = hoveredCategory === item
                            
                            return (
                                <div key={index} style={itemStyle}>
                                    <button 
                                        style={buttonStyle(isActive, isHovered)}
                                        onClick={() => handleCategoryClick(item)}
                                        onMouseEnter={() => setHoveredCategory(item)}
                                        onMouseLeave={() => setHoveredCategory(null)}
                                    >
                                        {/* Icon */}
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '8px',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            {categoryIcons[item.toLowerCase()] || categoryIcons['All']}
                                        </div>

                                        {/* Category Name */}
                                        <div style={{ textAlign: 'center' }}>
                                            <span style={{
                                                fontWeight: '600',
                                                fontSize: '12px',
                                                textTransform: 'uppercase',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                {item}
                                            </span>
                                        </div>

                                        {/* Active Indicator */}
                                        {isActive && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '-4px',
                                                right: '-4px',
                                                width: '12px',
                                                height: '12px',
                                                background: '#4ade80',
                                                borderRadius: '50%',
                                                animation: 'pulse 2s infinite'
                                            }}></div>
                                        )}

                                        {/* Hover Effect */}
                                        {isHovered && !isActive && (
                                            <div style={{
                                                position: 'absolute',
                                                inset: '0',
                                                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(147, 51, 234, 0.2))',
                                                borderRadius: '16px',
                                                animation: 'pulse 2s infinite'
                                            }}></div>
                                        )}
                                    </button>

                                    {/* Category Label */}
                                    <div style={{ marginTop: '8px', textAlign: 'center' }}>
                                        <span style={{
                                            fontSize: '12px',
                                            color: '#9ca3af',
                                            fontWeight: '500',
                                            textTransform: 'uppercase'
                                        }}>
                                            {item === 'All' ? 'All Products' : item}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Bottom Decoration */}
                <div className="mt-8 flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
            `}</style>
        </div>
    )
}

export default Category
