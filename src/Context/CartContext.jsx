import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null)

export const CartProvider = ({children}) => {
    const [cartItem, setCartItem] = useState([])

    const addToCart = (product) => {
        const existingItem = cartItem.find(item => item.id === product.id);
        if(existingItem ) {
            // If the item already exists in the cart, you can choose to update it or ignore
            const updatedCart = cartItem.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
            setCartItem(updatedCart);
            toast.success('Product quantity updated in cart')
            return;
        } else {
            // If the item does not exist, add it to the cart
            setCartItem([...cartItem, {...product, quantity: 1}]);
            product.quantity = 1;
            toast.success(`Product is added to cart`)
        }
        setCartItem([...cartItem, product])
    }

    const updateQuantity = (cartItem, productId, action) => {
        setCartItem(
            cartItem.map((item) => {
                if (item.id === productId) {
                    let newUnit = item.quantity;
                    if (action === "increase") {
                        newUnit = newUnit + 1;
                        toast.success('Product quantity incresed!')
                    } else if (action === "decrease") {
                        newUnit = newUnit - 1;
                        toast.success('Product quantity decresed!')
                    }
                    return newUnit > 0 ? { ...item, quantity: newUnit } : null;
                }
                return item;
            }).filter((item) => item != null) //remove item with qnty zero
        );
        
    }

    const removeFromCart = (productId) => {
        setCartItem(cartItem.filter(item => item.id !== productId));
        toast.error('Product removed from cart')
    }

    return <CartContext.Provider value={{cartItem, setCartItem, addToCart, updateQuantity, removeFromCart}}>
        {children}
    </CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
