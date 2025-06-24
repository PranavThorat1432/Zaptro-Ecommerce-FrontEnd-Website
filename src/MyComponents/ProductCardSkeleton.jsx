import React from 'react'

const ProductCardSkeleton = () => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-gray-700/50 rounded-lg mb-4"></div>
      
      {/* Title Skeleton */}
      <div className="h-6 bg-gray-700/50 rounded w-3/4 mb-2"></div>
      
      {/* Price Skeleton */}
      <div className="h-5 bg-gray-700/50 rounded w-1/4 mb-4"></div>
      
      {/* Button Skeleton */}
      <div className="h-10 bg-gray-700/50 rounded-lg"></div>
    </div>
  )
}

export default ProductCardSkeleton 