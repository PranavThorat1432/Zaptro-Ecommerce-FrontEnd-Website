import React, { useState } from 'react'
import { IoCartOutline } from 'react-icons/io5';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import { IoStar } from 'react-icons/io5';
// import Products from '../Pages/Products';

const ProductsCart = ({product}) => {
  const [isLiked, setIsLiked] = useState(false);
  
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col h-full">
      {/* Product Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Like Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200"
        >
          {isLiked ? (
            <IoHeart className="w-4 h-4 text-red-500" />
          ) : (
            <IoHeartOutline className="w-4 h-4 text-gray-600" />
          )}
        </button>
        
        {/* Category Badge */}
        <div className="absolute top-2 left-2">
          <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3 flex flex-col flex-1">
        {/* Brand */}
        <p className="text-xs text-gray-500 font-medium mb-1">{product.brand}</p>
        
        {/* Title */}
        <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors text-sm">
          {product.title}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <IoStar 
                key={i} 
                className={`w-3 h-3 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-xs text-gray-600 ml-1">(4.0)</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-lg font-bold text-gray-800">${product.price}</p>
            {product.price > 100 && (
              <p className="text-xs text-green-600 font-medium">Free Shipping</p>
            )}
          </div>
        </div>
        
        {/* Spacer to push button to bottom */}
        <div className="flex-1"></div>
        
        {/* Add to Cart Button */}
        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 px-3 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-sm">
          <IoCartOutline className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductsCart
