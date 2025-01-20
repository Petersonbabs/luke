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
    const [loadingCart, setLoadingCart] = useState(false)
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

    // GET USER CART
    const getUserCart = withPermission(async()=>{
        setLoadingCart(true)
        try {
            const response = await axios(`${baseUrl}/cart/${user.id}`)
            const data = response.data
            setCartItems(data)
            console.log(data);
        } catch (error) {
            console.log(error)
        }finally {
            setLoadingCart(false)
        }
    })


    // CLEAR USER CART
    const clearUserCart = withPermission(async()=>{
        setLoadingCart(true)
        try {
            const response = await axios.post(`${baseUrl}/clear/cart/${user.id}`)
            const data = response.data
            console.log(data);
        } catch (error) {
            console.log(error)
        }finally {
            setLoadingCart(false)
        }
    })
    
    // INCREASE CART ITEM QUANTITY
    const increaseDecreaseCartItem = withPermission(async(operation, productId, cartItemId)=>{
        setLoadingCart(true)
        try {
            const response = await axios.post(`${baseUrl}/cart/${operation}/quantity/${user.id}/${productId}`)
            const data = response.data
            console.log(data);
        } catch (error) {
            console.log(error)
        }finally {
            setLoadingCart(false)
        }
    })

    const removeFromCart = withPermission(async(productId)=>{
        setLoadingCart(true)
        try {
            const response = await axios.post(`${baseUrl}/remove/cart/${user.id}/${productId}`)
            const data = response.data
            console.log(data);
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }finally {
            setLoadingCart(false)
        }
    })

    const value = {
        cartItems,
        addingToCart,
        loadingCart,
        getUserCart,
        addToCart,
        clearUserCart,
        increaseDecreaseCartItem,
        removeFromCart
    }
    return <cartContext.Provider value={value}>{children}</cartContext.Provider>
}
export default CartProvider