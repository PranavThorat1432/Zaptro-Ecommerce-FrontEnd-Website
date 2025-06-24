import React from 'react'
import { getData } from '../Context/DataContext'
import { Filter, Search, ChevronsUpDown, Tag, Layers3 } from 'lucide-react'
import { FaIndianRupeeSign } from "react-icons/fa6";

const FilterSection = ({search, setSearch, brand, setBrand, priceRange, setPriceRange, category, setCategory,  handleBrandChange, handleCategoryChange}) => {
  const {categoryOnlyData, brandOnlyData} = getData()

  return (
    <>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ef4444;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #dc2626;
        }
        /* For Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #ef4444 rgba(255, 255, 255, 0.05);
        }
      `}</style>
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6 h-max sticky top-24">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Filter className="w-6 h-6 text-red-400" />
          <h2 className="text-2xl font-bold text-white">Filters</h2>
        </div>

        {/* Search Section */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Search Products</label>
          <div className="relative">
            <input
              type="text"
              value={search}
              placeholder="Search for products..."
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 pl-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Category Section */}
        <div>
          <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
            <Layers3 className="w-5 h-5 text-red-400" />
            Category
          </h3>
          <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
            {categoryOnlyData?.map((item, index) => (
              <label key={index} className="flex items-center cursor-pointer group p-2 rounded-lg transition-colors hover:bg-white/10">
                <input 
                  type="radio" 
                  name="category"
                  checked={category === item} 
                  value={item} 
                  onChange={handleCategoryChange}
                  className="sr-only"
                />
                <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-300 group-hover:border-red-400 ${category === item ? "border-red-500 bg-red-500" : "border-gray-500"}`}>
                  <div className={`w-2.5 h-2.5 bg-white rounded-full transform transition-transform duration-300 ${category === item ? "scale-100" : "scale-0"}`}></div>
                </div>
                <span className="ml-3 text-gray-300 font-medium capitalize group-hover:text-white transition-colors">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Brand Section */}
        <div>
          <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
            <Tag className="w-5 h-5 text-red-400" />
            Brand
          </h3>
          <div className="relative">
            <select
              value={brand}
              onChange={handleBrandChange}
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-red-500 transition-all cursor-pointer text-white"
            >
              {brandOnlyData?.map((item, index) => (
                <option key={index} value={item} className="bg-gray-800 text-white py-2">
                  {item.toUpperCase()}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <ChevronsUpDown className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Price Range Section */}
        <div>
          <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
            <FaIndianRupeeSign className="w-5 h-5 text-red-400" />
            Price Range
          </h3>
          <div className="space-y-4">
            <input 
              type="range" 
              value={priceRange[1]} 
              min="0" 
              max="5000" 
              step="100"
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer range-slider"
            />
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Min: $0</span>
              <span className="text-base font-bold text-red-400">${priceRange[0]} - ${priceRange[1]}</span>
              <span className="text-sm text-gray-400">Max: $5000</span>
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <button 
          onClick={() => {
            setSearch(''); 
            setCategory("All"); 
            setBrand("All"); 
            setPriceRange([0, 5000])
          }}
          className="w-full bg-gradient-to-r from-red-500/80 to-purple-500/80 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 flex items-center justify-center gap-2 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reset Filters
        </button>
      </div>
    </>
  );
}

export default FilterSection
