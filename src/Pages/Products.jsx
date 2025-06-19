import React, { useEffect, useState } from 'react'
import { getData } from '../Context/DataContext'
import { useLocation } from 'react-router-dom'
import FilterSection from '../MyComponents/FilterSection'
import Loading from "../assets/Loading4.webm"
import ProductsCart from '../MyComponents/ProductsCart'
import PageInition from '../MyComponents/PageInition'

const Products = () => {
  const {data, fetchAllProducts} = getData()
  const location = useLocation()
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [brand, setBrand] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [page, setPage] = useState(1)

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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className='max-w-7xl mx-auto px-4 py-8'>
        {
          data?.length > 0 ? (
            <>
              <div className='flex gap-8'>
                <div className='flex-shrink-0 w-80'>
                  <FilterSection search={search} setSearch={setSearch} brand={brand} setBrand={setBrand} category={category} setCategory={setCategory} priceRange={priceRange} setPriceRange={setPriceRange} handleCategoryChange={handleCategoryChange} handleBrandChange={handleBrandChange} />
                </div>
                <div className='flex-1'>
                  {/* Products Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Products</h1>
                        <p className="text-gray-600">
                          Showing {filterData?.length} of {data?.length} products
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                          <span className="text-sm text-gray-600">Page {page} of {dynamicPage}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Active Filters Display */}
                    {(search || category !== "All" || brand !== "All" || priceRange[1] !== 5000) && (
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
                        <h3 className="text-sm font-semibold text-gray-700 mb-2">Active Filters:</h3>
                        <div className="flex flex-wrap gap-2">
                          {search && (
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                              Search: "{search}"
                            </span>
                          )}
                          {category !== "All" && (
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                              Category: {category}
                            </span>
                          )}
                          {brand !== "All" && (
                            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                              Brand: {brand}
                            </span>
                          )}
                          {priceRange[1] !== 5000 && (
                            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                              Price: ${priceRange[0]} - ${priceRange[1]}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Products Grid */}
                  {filterData?.length > 0 ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                      {
                        filterData?.slice(page * 8 - 8, page * 8).map((product, index) => {
                          return <ProductsCart key={index} product={product} /> 
                        })  
                      }
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                        <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
                        <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                        <button 
                          onClick={() => {
                            setSearch(''); 
                            setCategory("All"); 
                            setBrand("All"); 
                            setPriceRange([0, 5000])
                          }}
                          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                          Clear All Filters
                        </button>
                      </div>
                    </div>
                  )}
                </div> 
              </div>
              
              {/* Pagination */}
              {filterData?.length > 8 && (
                <div className="mt-8 flex justify-center mb-8">
                  <PageInition pageHandler={pageHandler} page={page} dynamicPage={dynamicPage}/>
                </div>
              )}
             </>
          ) : (
            <div className='flex items-center justify-center h-[400px]'>
              <video muted autoPlay loop>
                <source src={Loading} type='video/webm'/>
              </video>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Products
