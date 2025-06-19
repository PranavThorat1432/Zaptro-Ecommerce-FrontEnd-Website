import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from "../assets/Loading4.webm"
import Breadcrums from '../MyComponents/Breadcrums'
import { Minus, Plus } from 'lucide-react'
import { useCart } from '../Context/CartContext';

const SingleProduct = ({product}) => {
    const params = useParams()
    const [singleProduct, setSingleProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const [quantity, setQuantity] = useState(1)
    const {addToCart} = useCart()

    const getSingleProduct = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`https://fakestoreapi.in/api/products/${params.id}`)
            const product = res.data.product;
            setSingleProduct(product)
        } catch (error) {
            console.log(error);
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

    const truncateDescription = (description) => {
        const words = description.split(' ')
        if (words.length > 30) {
            return words.slice(0, 30).join(' ') + '...'
        }
        return description
    }
    
    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <video muted autoPlay loop>
                    <source src={Loading} type="video/webm" />
                </video>
            </div>
        )
    }

    return (
        <div className='px-4 pb-4 md:px-0'>
            {/* Breadcrumbs */}
            <Breadcrums title={singleProduct.title || 'Product'} />
            
            {/* Product Content */}
            {singleProduct && Object.keys(singleProduct).length > 0 ? (
                <div className="max-w-6xl mx-auto mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Product Image */}
                        <div className="flex justify-center">
                            <img 
                                src={singleProduct.image} 
                                alt={singleProduct.title}
                                className="max-w-md h-auto object-contain rounded-lg shadow-lg"
                            />
                        </div>
                        
                        {/* Product Details */}
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                    {singleProduct.title}
                                </h1>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {truncateDescription(singleProduct.description)}
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-4">
                                <span className="text-3xl font-bold text-red-500">
                                    ${singleProduct.price}
                                </span>
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                    {singleProduct.category}
                                </span>
                            </div>

                            {/* Quantity Selector */}
                            <div className="flex items-center gap-4">
                                <span className="text-gray-700 font-medium">Quantity:</span>
                                <div className="flex items-center border border-gray-300 rounded-lg">
                                    <button 
                                        onClick={() => handleQuantityChange(quantity - 1)}
                                        className="p-2 hover:bg-gray-100 transition-colors rounded-l-lg"
                                        disabled={quantity <= 1}
                                    >
                                        <Minus className="w-4 h-4 text-gray-600" />
                                    </button>
                                    <span className="px-4 py-2 text-lg font-semibold text-gray-800 min-w-[60px] text-center">
                                        {quantity}
                                    </span>
                                    <button 
                                        onClick={() => handleQuantityChange(quantity + 1)}
                                        className="p-2 hover:bg-gray-100 transition-colors rounded-r-lg"
                                        disabled={quantity >= 99}
                                    >
                                        <Plus className="w-4 h-4 text-gray-600" />
                                    </button>
                                </div>
                                <span className="text-sm text-gray-500">
                                    {(quantity * singleProduct.price).toFixed(2)} total
                                </span>
                            </div>
                            
                            <div className="flex items-center gap-4">
                                <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105" onClick={() => addToCart(product)}>
                                    Add to Cart ({quantity})
                                </button>
                                <button className="border-2 border-red-500 text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300">
                                    Buy Now
                                </button>
                            </div>
                            
                            <div className="border-t pt-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Details</h3>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <p><strong>Brand:</strong> {singleProduct.brand}</p>
                                    <p><strong>Category:</strong> {singleProduct.category}</p>
                                    <p><strong>Price:</strong> ${singleProduct.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-16">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product not found</h2>
                    <p className="text-gray-600">The product you're looking for doesn't exist.</p>
                </div>
            )}
        </div>
    );
}

export default SingleProduct
