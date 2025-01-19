"use client"
import { withPermission } from "@/app/_features/_authentication/AuthChecker";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { toast } from "sonner";

const cartContext = createContext()
export const useCartContext = ()=>{
    const context = useContext(cartContext)
    if(!context){
        throw new Error("use cart must be used within the CartProvider")
    }
    return context
}

const CartProvider = ({children})=>{
    const [cartItems, setCartItems] = useState()
    const [addingToCart, setAddingToCart] = useState(false)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const {user} = useAuthContext()


    // ADD TO CART
    const addToCart = withPermission(async (productId, items)=>{
        setAddingToCart(true)
        console.log(items);
        try {
            const response = await axios.post(`${baseUrl}/add/cart/${user.id}/${productId}`, items)
            const {message} = response.data
            toast.success(message)
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        } finally{
            setAddingToCart(false)
        }
    })
    const value = {
        cartItems,
        addToCart,
        addingToCart
    }
    return <cartContext.Provider value={value}>{children}</cartContext.Provider>
}
export default CartProvider