import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Home, ChevronRight, Package } from 'lucide-react'

const Breadcrums = ({title}) => {
    const navigate = useNavigate()
    
    return (
        <div className="border-b border-white/10 pb-4 mb-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-400">
                {/* Home Link */}
                <button 
                    onClick={() => navigate('/')}
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                </button>
                
                <ChevronRight className="w-4 h-4" />
                
                {/* Products Link */}
                <button 
                    onClick={() => navigate('/products')}
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                    <Package className="w-4 h-4" />
                    <span>Products</span>
                </button>
                
                <ChevronRight className="w-4 h-4" />
                
                {/* Current Page */}
                <span className="font-semibold text-white truncate">
                    {title || 'Product'}
                </span>
            </nav>
        </div>
    )
}

export default Breadcrums
