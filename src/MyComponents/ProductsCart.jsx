import React, { useState } from 'react'
import { IoCartOutline, IoHeart, IoHeartOutline, IoStar, IoEyeOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
// import Products from '../Pages/Products';

const ProductsCart = ({product}) => {
  const navigate = useNavigate()
  const [isLiked, setIsLiked] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => {
        setIsAdded(false);
    }, 2000);
  };

  return (
    <div 
      className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/20 transition-all duration-300 group cursor-pointer flex flex-col h-full"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      {/* Product Image Container */}
      <div className="relative overflow-hidden p-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Like Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 p-2 bg-black/30 backdrop-blur-sm rounded-full text-white hover:text-red-400 hover:bg-black/50 transition-all duration-200"
        >
          {isLiked ? (
            <IoHeart className="w-5 h-5 text-red-500" />
          ) : (
            <IoHeartOutline className="w-5 h-5" />
          )}
        </button>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-red-500/20 text-red-300 border border-red-400/50 px-2.5 py-1 rounded-full text-xs font-semibold">
            {product.category}
          </span>
        </div>

        {/* View Details Button */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2 text-white font-semibold py-2 px-4 border-2 border-white/50 rounded-lg backdrop-blur-sm hover:bg-white/10">
            <IoEyeOutline className="w-5 h-5" />
            <span>View Details</span>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-gray-400 font-medium mb-1">{product.brand}</p>
        <h3 className="font-semibold text-white mb-2 line-clamp-2 text-base h-12">
          {product.title}
        </h3>
        
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <IoStar 
                key={i} 
                className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-600'}`} 
              />
            ))}
          </div>
          <span className="text-xs text-gray-400 ml-1">(120 reviews)</span>
        </div>
        
        <div className="flex items-baseline justify-between mb-4">
          <p className="text-2xl font-bold text-red-400">${product.price.toFixed(2)}</p>
          {product.price > 100 && (
            <p className="text-xs text-green-400 font-medium">Free Shipping</p>
          )}
        </div>
        
        <div className="flex-1"></div>
        
        <button 
          onClick={handleAddToCart} 
          disabled={isAdded}
          className={`w-full group/btn flex items-center justify-center gap-2 font-semibold py-2.5 px-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm cursor-pointer ${
            isAdded
              ? 'bg-green-500 text-white'
              : 'bg-gradient-to-r from-red-500 to-purple-500 text-white hover:shadow-lg hover:shadow-red-500/30'
          }`}
        >
          {isAdded ? (
            <>✓ Added</>
          ) : (
            <>
              <IoCartOutline className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default ProductsCart
