import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Navbar from './MyComponents/Navbar'
import axios from 'axios'
import Footer from './MyComponents/Footer'
import SingleProducts from './Pages/SingleProduct'
import { Toaster } from 'react-hot-toast'
import ResponseiveMenu from './MyComponents/ResponseiveMenu'
import { useCart } from './Context/CartContext'
import ProtectedRoute from './MyComponents/ProtectedRoute'

const App = () => {
  const [location, setLocation] = useState(null)
  const [openDropdown, setOpenDropdown] = useState(false)
  const [openNav, setOpenNav] = useState(false);
  const {cartItem, setCartItem} = useCart()

  const getLocation = async () => {
    try {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords

        const apiKey = "fb758b0feb5846e7812860039a6d3721" // 🔁 Replace with your actual API key

        const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`

        try {
          const response = await axios.get(url)
          const data = response.data

          if (data.results.length > 0) {
            const result = data.results[0]
            const exactLocation = {
              formatted: result.formatted,
              road: result.components.road || "N/A",
              neighbourhood: result.components.neighbourhood || "N/A",
              city: result.components.city || result.components.town || result.components.village || "N/A",
              state: result.components.state || "N/A",
              postcode: result.components.postcode || "N/A",
              country: result.components.country || "N/A",
              lat: result.geometry.lat,
              lng: result.geometry.lng
            }

            setLocation(exactLocation)
            setOpenDropdown(false)
          }
        } catch (error) {
          console.error("❌ Failed to fetch location:", error)
        }
      }, (error) => {
        console.error("❌ Geolocation error:", error)
        if (error.code === 1) {
          // Permission denied
          alert("Location access was denied. Please enable location permissions in your browser settings to use this feature.")
        }
      })
    } catch (error) {
      console.error("❌ Location service error:", error)
    }
  }

  useEffect(() => {
    // Only get location if user hasn't denied permission before
    if (navigator.geolocation) {
      getLocation()
    }
  }, [])

  // Load cart items from localStorage on initial load
  useEffect(() => {
    const storedCart = localStorage.getItem('cartItem')
    if(storedCart) {
      setCartItem(JSON.parse(storedCart))
    }
  },[])

  // Save cart items to Localstorage on every Change
  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItem))
  },[cartItem])

  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
          success: {
            iconTheme: {
              primary: '#10B981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: '#fff',
            },
          },
        }}
      />
      <ResponseiveMenu openNav={openNav} setOpenNav={setOpenNav} />
      <Navbar 
        location={location} 
        getLocation={getLocation} 
        openDropdown={openDropdown} 
        setOpenDropdown={setOpenDropdown}
        openNav={openNav}
        setOpenNav={setOpenNav}
      />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:id' element={<SingleProducts/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/cart' element={<ProtectedRoute><Cart location={location} getLocation={getLocation}/></ProtectedRoute>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
