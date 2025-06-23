import React, { useState, useEffect } from 'react'
import { useCart } from '../Context/CartContext'
import { FaRegTrashAlt } from 'react-icons/fa'
import { LuNotebookText } from 'react-icons/lu'
import { MdDeliveryDining, MdOutlineNavigateNext } from 'react-icons/md'
import { GiShoppingBag } from 'react-icons/gi'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import emptyCart from '../assets/empty-cart.png'
import toast from 'react-hot-toast'

const Cart = ({location, getLocation}) => {
  const { cartItem, updateQuantity, removeFromCart } = useCart()
  const { user } = useUser()
  const navigate = useNavigate()

  const [deliveryInfo, setDeliveryInfo] = useState({
    fullName: '',
    address: '',
    state: '',
    postcode: '',
    country: '',
    phone: ''
  })

  useEffect(() => {
    if (user) {
      setDeliveryInfo(prev => ({ ...prev, fullName: user.fullName || '' }))
    }
    if (location) {
      setDeliveryInfo(prev => ({
        ...prev,
        address: location.formatted || '',
        state: location.state || '',
        postcode: location.postcode || '',
        country: location.country || ''
      }))
    }
  }, [user, location])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setDeliveryInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", deliveryInfo);
    toast.success("Delivery information saved!");
  };

  const totalPrice = cartItem.reduce((total, item) => total + item.price * item.quantity, 0)
  const deliveryCharge = 25;
  const handlingCharge = 5;
  const grandTotal = totalPrice + handlingCharge;

  if (cartItem.length === 0) {
    return (
      <div className='min-h-[80vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col gap-6 justify-center items-center text-center px-4'>
        <img src={emptyCart} alt="Empty Cart" className='w-64 sm:w-80 animate-fade-in-up'/>
        <h1 className='text-3xl sm:text-5xl font-bold bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent animate-fade-in-up [animation-delay:200ms]'>
          Oh no! Your Cart is Empty
        </h1>
        <p className="text-gray-300 text-lg max-w-md animate-fade-in-up [animation-delay:300ms]">Looks like you haven't added anything to your cart yet. Time to go exploring!</p>
        <button 
          className='group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 flex items-center gap-3 animate-fade-in-up [animation-delay:400ms] cursor-pointer' 
          onClick={() => navigate('/products')}
        >
          <span>Continue Shopping</span>
          <MdOutlineNavigateNext className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 sm:py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl sm:text-4xl font-bold mb-8'>My Cart ({cartItem.length})</h1>
        
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start'>
          {/* Left Section: Cart Items & Delivery */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Cart Items */}
            <div className='space-y-4'>
              {cartItem?.map((item, index) => (
                <div key={index} className='bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300 hover:bg-white/10'>
                  <div className='flex items-center gap-4 w-full sm:w-auto'>
                    <img src={item.image} alt={item.title} className='w-20 h-20 rounded-lg object-cover flex-shrink-0'/>
                    <div className='flex-grow'>
                      <h2 className='font-semibold line-clamp-2'>{item.title}</h2>
                      <p className='text-red-400 font-bold text-lg'>${item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className='flex items-center gap-4 w-full sm:w-auto justify-between'>
                    <div className='bg-gray-700 text-white flex items-center gap-4 px-3 py-1 rounded-lg font-bold text-lg'>
                      <button className='cursor-pointer hover:text-red-400 transition-colors' onClick={() => updateQuantity(cartItem, item.id, "decrease")}>-</button>
                      <span>{item.quantity}</span>
                      <button className='cursor-pointer hover:text-red-400 transition-colors' onClick={() => updateQuantity(cartItem, item.id, "increase")}>+</button>
                    </div>
                    <button className='p-3 bg-gray-700/50 rounded-full hover:bg-red-500/20 group transition-all duration-300 cursor-pointer' onClick={() => removeFromCart(item.id)}>
                      <FaRegTrashAlt className='text-red-400 group-hover:text-red-300 transition-colors'/>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Delivery Info Form */}
            <div className='bg-white/5 border border-white/10 rounded-xl p-6'>
              <h2 className='text-2xl font-bold mb-4'>Delivery Information</h2>
              <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='md:col-span-2'>
                  <label htmlFor="fullName" className='text-sm text-gray-300 mb-1 block'>Full Name</label>
                  <input type="text" name="fullName" id="fullName" value={deliveryInfo.fullName} onChange={handleInputChange} placeholder='Enter Your Name' className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500' required />
                </div>
                <div className='md:col-span-2'>
                  <label htmlFor="address" className='text-sm text-gray-300 mb-1 block'>Address</label>
                  <input type="text" name="address" id="address" value={deliveryInfo.address} onChange={handleInputChange} placeholder='Enter Your Address' className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500' required />
                </div>
                <div>
                  <label htmlFor="state" className='text-sm text-gray-300 mb-1 block'>State</label>
                  <input type="text" name="state" id="state" value={deliveryInfo.state} onChange={handleInputChange} placeholder='Enter Your State' className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500' required />
                </div>
                <div>
                  <label htmlFor="postcode" className='text-sm text-gray-300 mb-1 block'>Postcode</label>
                  <input type="text" name="postcode" id="postcode" value={deliveryInfo.postcode} onChange={handleInputChange} placeholder='Enter Your Postcode' className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500' required />
                </div>
                <div>
                  <label htmlFor="country" className='text-sm text-gray-300 mb-1 block'>Country</label>
                  <input type="text" name="country" id="country" value={deliveryInfo.country} onChange={handleInputChange} placeholder='Enter Your Country' className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500' required />
                </div>
                <div>
                  <label htmlFor="phone" className='text-sm text-gray-300 mb-1 block'>Phone No.</label>
                  <input type="tel" name="phone" id="phone" value={deliveryInfo.phone} onChange={handleInputChange} placeholder='Enter Your Phone No.' className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500' required />
                </div>
                <div className='md:col-span-2 flex flex-col sm:flex-row gap-3 mt-4'>
                  <button type="submit" className='w-full sm:w-auto text-center bg-gradient-to-r from-red-500 to-purple-500 font-semibold py-2 px-6 rounded-lg transition-all transform hover:scale-105 cursor-pointer'>Save Information</button>
                  <button type="button" onClick={getLocation} className='w-full sm:w-auto text-center bg-white/10 border border-white/20 font-semibold py-2 px-6 rounded-lg transition-all transform hover:scale-105 hover:bg-white/20 cursor-pointer'>Detect Location</button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Section: Order Summary */}
          <div className='lg:col-span-1 sticky top-24'>
            <div className='bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden'>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500/10 rounded-full blur-2xl animate-pulse"></div>
              <h2 className='text-2xl font-bold mb-4'>Bill Details</h2>
              <div className='space-y-3 text-gray-300'>
                <div className='flex justify-between items-center'>
                  <h3 className='flex gap-2 items-center'><span><LuNotebookText/></span>Items Total</h3>
                  <p className='font-medium text-white'>${totalPrice.toFixed(2)}</p>
                </div>
                <div className='flex justify-between items-center'>
                  <h3 className='flex gap-2 items-center'><span><MdDeliveryDining/></span>Delivery Charge</h3>
                  <p className='font-medium text-white'><span className='text-gray-400 line-through mr-2'>${deliveryCharge.toFixed(2)}</span><span className='text-green-400'>Free</span></p>
                </div>
                <div className='flex justify-between items-center'>
                  <h3 className='flex gap-2 items-center'><span><GiShoppingBag/></span>Handling Charge</h3>
                  <p className='font-medium text-white'>${handlingCharge.toFixed(2)}</p>
                </div>
                <hr className='border-white/10 my-4'/>
                <div className='flex justify-between items-center text-xl font-bold'>
                  <h3>Grand Total</h3>
                  <p className='text-red-400'>${grandTotal.toFixed(2)}</p>
                </div>
              </div>
              <div className='mt-6'>
                <h3 className='font-semibold mb-2'>Apply Promo Code</h3>
                <div className='flex gap-2'>
                  <input type="text" placeholder='Enter Code' className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500' />
                  <button className='bg-white/10 text-white border border-white/20 cursor-pointer px-4 py-1 rounded-lg hover:bg-white/20 transition-colors'>Apply</button>
                </div>
              </div>
              <button className='w-full mt-6 group bg-gradient-to-r from-red-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 flex items-center justify-center gap-3 cursor-pointer'>
                <span>Proceed to Checkout</span>
                <MdOutlineNavigateNext className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
