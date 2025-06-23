import React, { useEffect, useState } from 'react'
import { getData } from '../Context/DataContext'
import { useLocation } from 'react-router-dom'
import FilterSection from '../MyComponents/FilterSection'
import ProductsCart from '../MyComponents/ProductsCart'
import PageInition from '../MyComponents/PageInition'
import { SlidersHorizontal, X } from 'lucide-react'
import { FaSadTear } from "react-icons/fa";
import Breadcrums from '../MyComponents/Breadcrums'
import ProductCardSkeleton from '../MyComponents/ProductCardSkeleton'

const ProductSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {[...Array(8)].map((_, i) => (
      <div key={i} className="bg-white/5 rounded-2xl p-4 animate-pulse">
        <div className="bg-gray-700/50 rounded-lg w-full h-48 mb-4"></div>
        <div className="h-4 bg-gray-700/50 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-700/50 rounded w-1/2 mb-4"></div>
        <div className="h-8 bg-gray-700/50 rounded w-full"></div>
      </div>
    ))}
  </div>
);

const FilterSidebarSkeleton = () => (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6 animate-pulse">
        <div className="h-8 bg-gray-700/50 rounded w-1/3"></div>
        <div className="space-y-4">
            <div className="h-6 bg-gray-700/50 rounded w-1/4"></div>
            <div className="h-10 bg-gray-700/50 rounded-lg w-full"></div>
        </div>
        <div className="space-y-4">
            <div className="h-6 bg-gray-700/50 rounded w-1/4"></div>
            {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-gray-700/50 rounded-full"></div>
                    <div className="h-4 bg-gray-700/50 rounded w-2/3"></div>
                </div>
            ))}
        </div>
    </div>
)

const Products = () => {
  const {data, fetchAllProducts, loading} = getData()
  const location = useLocation()
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [brand, setBrand] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [page, setPage] = useState(1)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchAllProducts()
  },[])

  // Handle category selection from navigation
  useEffect(() => {
    if (location.state?.selectedCategory) {
      setCategory(location.state.selectedCategory)
      // Clear the state to prevent it from persisting on page refresh
      window.history.replaceState({}, document.title)
    }
  }, [location.state])

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }
  const handleBrandChange = (e) => {
    setBrand(e.target.value)
  }

  const pageHandler = (selectedPage) => {
    setPage(selectedPage)
  }

  const filterData = data?.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === "All" || item.category === category
    const matchesBrand = brand === "All" || item.brand === brand
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1]
    
    return matchesSearch && matchesCategory && matchesBrand && matchesPrice
  })

  const dynamicPage = Math.ceil(filterData?.length / 8)

  // Lock background scroll when filter modal is open (mobile)
  useEffect(() => {
    if (isFilterOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    // Clean up on unmount
    return () => document.body.classList.remove('overflow-hidden');
  }, [isFilterOpen]);

  return (
    <div className='bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen px-4 sm:px-6 lg:px-8 py-8'>
      <Breadcrums page={'Products'} />
      {/* Mobile Filter Button (top, below breadcrumbs) */}
      <div className="lg:hidden flex justify-end mb-4">
        <button
          className="bg-gradient-to-r from-red-500 to-purple-500 text-white p-3 rounded-lg shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
          onClick={() => setIsFilterOpen(true)}
          aria-label="Open Filters"
        >
          <SlidersHorizontal className="w-5 h-5" />
          <span className="font-semibold hidden sm:inline">Filters</span>
        </button>
      </div>
      <div className='max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 pt-6'>
        {/* Filters Column */}
        <div className='lg:col-span-1 hidden lg:block'>
          <FilterSection search={search} setSearch={setSearch} brand={brand} setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} category={category} setCategory={setCategory} handleBrandChange={handleBrandChange} handleCategoryChange={handleCategoryChange}/>
        </div>
        
        {/* Products Column */}
        <div className='lg:col-span-3'>
          {loading ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6'>
              {Array.from({ length: 8 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <>
              {filterData?.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-[40vh] text-center py-12 animate-fade-in-up">
                  <FaSadTear className="w-16 h-16 text-red-400 mb-4 animate-bounce" />
                  <h2 className="text-2xl font-bold mb-2">No results found</h2>
                  <p className="text-gray-300 mb-6">Try adjusting your filters or search to find products.</p>
                  <a href="/products" className="inline-block bg-gradient-to-r from-red-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
                    Go to All Products
                  </a>
                </div>
              ) : (
                <>
                  <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6'>
                    {filterData?.slice(page * 8 - 8, page * 8).map((product, index) => (
                      <ProductsCart key={index} product={product} />
                    ))}
                  </div>
                  <PageInition page={page} pageHandler={pageHandler} dynamicPage={dynamicPage} />
                </>
              )}
            </>
          )}
        </div>
      </div>
      
      {/* Mobile Filter Sidebar */}
      <div
        className={`fixed inset-0 z-50 flex transition-transform duration-300 ${isFilterOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)}></div>
        <div
          className="h-full w-80 max-w-[90vw] bg-gray-900 ml-auto p-6 overflow-y-auto relative"
          style={{ overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Filters</h2>
            <button onClick={() => setIsFilterOpen(false)} className="p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
          <FilterSection search={search} setSearch={setSearch} brand={brand} setBrand={setBrand} category={category} setCategory={setCategory} priceRange={priceRange} setPriceRange={setPriceRange} handleCategoryChange={handleCategoryChange} handleBrandChange={handleBrandChange} />
        </div>
      </div>
    </div>
  )
}

export default Products
