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

const App = () => {
  const [location, setLocation] = useState(null)
  const [openDropdown, setOpenDropdown] = useState(false)

  const getLocation = async () => {
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
    })
  }

  useEffect(() => {
    getLocation()
  },[])

  return (
    <BrowserRouter>

    <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}></Navbar>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>

    <Footer/>

    </BrowserRouter>
  )
}

export default App
