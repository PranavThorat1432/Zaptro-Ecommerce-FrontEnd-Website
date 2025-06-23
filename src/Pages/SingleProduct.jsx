import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrums from '../MyComponents/Breadcrums'
import { Minus, Plus, ShoppingCart, Star, Zap } from 'lucide-react'
import { useCart } from '../Context/CartContext';
import toast from 'react-hot-toast';

const ProductSkeleton = () => (
    <div className='max-w-7xl mx-auto mt-8 animate-pulse'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="bg-gray-700/50 rounded-lg w-full h-96"></div>
        <div className="space-y-6">
          <div className="h-8 bg-gray-700/50 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-700/50 rounded w-full"></div>
            <div className="h-4 bg-gray-700/50 rounded w-full"></div>
            <div className="h-4 bg-gray-700/50 rounded w-2/3"></div>
          </div>
          <div className="h-10 bg-gray-700/50 rounded w-1/4"></div>
          <div className="h-12 bg-gray-700/50 rounded-lg w-1/2"></div>
          <div className="flex gap-4">
            <div className="h-14 bg-gray-700/50 rounded-lg w-1/2"></div>
            <div className="h-14 bg-gray-700/50 rounded-lg w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );

const SingleProduct = () => {
    const params = useParams()
    const [singleProduct, setSingleProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [quantity, setQuantity] = useState(1)
    const { addToCart } = useCart()

    const getSingleProduct = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`https://fakestoreapi.in/api/products/${params.id}`)
            if(res.data && res.data.product) {
                setSingleProduct(res.data.product)
            } else {
                setSingleProduct(null)
            }
        } catch (error) {
            console.log(error);
            setSingleProduct(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getSingleProduct()
    }, [params.id])

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1 && newQuantity <= 99) {
            setQuantity(newQuantity)
        }
    }

    const handleAddToCart = () => {
        addToCart({ ...singleProduct, quantity });
        toast.success(`${singleProduct.title} added to cart!`);
    };

    if (loading) {
        return (
            <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4 sm:p-6 lg:p-8'>
                <Breadcrums title={'Loading...'} />
                <ProductSkeleton />
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4 sm:p-6 lg:p-8'>
            <Breadcrums title={singleProduct?.title || 'Product'} />
            
            {singleProduct ? (
                <div className="max-w-7xl mx-auto mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Product Image */}
                        <div className="relative flex justify-center items-center bg-white/5 p-4 sm:p-8 rounded-2xl border border-white/10 shadow-lg">
                            <div className="absolute inset-4 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
                            <img 
                                src={singleProduct.image} 
                                alt={singleProduct.title}
                                className="relative max-h-[500px] h-auto object-contain transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        
                        {/* Product Details */}
                        <div className="flex flex-col justify-center space-y-6">
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                                    {singleProduct.title}
                                </h1>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-400/50">
                                        {singleProduct.category}
                                    </span>
                                    <div className="flex items-center gap-1 text-yellow-400">
                                        <Star size={16} fill="currentColor" />
                                        <span className="font-semibold">4.5</span>
                                        <span className="text-gray-400 text-sm">(120 reviews)</span>
                                    </div>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    {singleProduct.description}
                                </p>
                            </div>
                            
                            <div className="flex items-baseline gap-4">
                                <span className="text-4xl font-bold text-red-400">
                                    ${singleProduct.price.toFixed(2)}
                                </span>
                                <span className="text-lg text-gray-400 line-through">
                                    ${(singleProduct.price * 1.25).toFixed(2)}
                                </span>
                            </div>

                            {/* Quantity Selector */}
                            <div className="flex items-center gap-4">
                                <span className="text-gray-300 font-medium">Quantity:</span>
                                <div className="flex items-center bg-white/10 border border-white/20 rounded-lg">
                                    <button 
                                        onClick={() => handleQuantityChange(quantity - 1)}
                                        className="p-3 hover:bg-white/20 transition-colors rounded-l-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={quantity <= 1}
                                    >
                                        <Minus className="w-4 h-4 text-white" />
                                    </button>
                                    <span className="px-5 py-2 text-lg font-semibold text-white min-w-[60px] text-center">
                                        {quantity}
                                    </span>
                                    <button 
                                        onClick={() => handleQuantityChange(quantity + 1)}
                                        className="p-3 hover:bg-white/20 transition-colors rounded-r-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={quantity >= 99}
                                    >
                                        <Plus className="w-4 h-4 text-white" />
                                    </button>
                                </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                                <button 
                                    className="cursor-pointer w-full sm:w-auto group flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25"
                                    onClick={handleAddToCart}
                                >
                                    <ShoppingCart className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                    <span>Add to Cart</span>
                                </button> 
                                <button className="cursor-pointer w-full sm:w-auto group flex items-center justify-center gap-3 border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/50 transform hover:scale-105">
                                    <Zap className="w-5 h-5 group-hover:text-yellow-300 transition-colors" />
                                    <span>Buy Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-20">
                    <h2 className="text-3xl font-semibold text-red-500 mb-4">Product Not Found</h2>
                    <p className="text-gray-400">Sorry, the product you are looking for does not exist or is unavailable.</p>
                </div>
            )}
        </div>
    );
}

export default SingleProduct
