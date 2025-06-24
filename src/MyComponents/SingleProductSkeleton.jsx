import React from 'react'

const SingleProductSkeleton = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen p-4 sm:p-6 lg:p-8 animate-pulse ">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb Skeleton */}
        <div className="h-6 bg-gray-700/50 rounded w-1/3 mb-8"></div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image and Thumbnails Skeleton */}
          <div>
            <div className="w-full h-96 bg-gray-700/50 rounded-2xl mb-4"></div>
            <div className="grid grid-cols-5 gap-4">
              <div className="w-full h-20 bg-gray-700/50 rounded-lg"></div>
              <div className="w-full h-20 bg-gray-700/50 rounded-lg"></div>
              <div className="w-full h-20 bg-gray-700/50 rounded-lg"></div>
              <div className="w-full h-20 bg-gray-700/50 rounded-lg"></div>
              <div className="w-full h-20 bg-gray-700/50 rounded-lg"></div>
            </div>
          </div>
          
          {/* Product Info Skeleton */}
          <div className="space-y-6">
            <div className="h-10 bg-gray-700/50 rounded w-4/5"></div>
            <div className="h-6 bg-gray-700/50 rounded w-1/4"></div>
            <div className="h-5 bg-gray-700/50 rounded w-1/3 mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-700/50 rounded w-full"></div>
              <div className="h-4 bg-gray-700/50 rounded w-full"></div>
              <div className="h-4 bg-gray-700/50 rounded w-4/6"></div>
            </div>
            <div className="h-12 bg-gray-700/50 rounded-lg w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProductSkeleton 