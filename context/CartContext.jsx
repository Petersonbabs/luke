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
    const [addingToCart, setAddingToCart] = useState("")
    const [loadingCart, setLoadingCart] = useState(false)
    const [operatingCartItem, setOperatingCartItem] = useState("")
    const [removingCartItem, setRemovingCartItem] = useState("")
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const {user} = useAuthContext()


    // ADD TO CART
    const addToCart = withPermission(async (productId, items)=>{
        setAddingToCart(productId)
        const {color, quantity, size} = items.items[0]
        if(!color || !quantity || !size){
            toast.info('Wait, choose your size, color & quantiy 😉')
            return
        }
        try {
            const response = await axios.post(`${baseUrl}/add/cart/${user.id}/${productId}`, items)
            const {message} = response.data
            toast.success(message)
            getUserCart()
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        } finally{
            setAddingToCart("")
        }
    })

    // GET USER CART
    const getUserCart = async(donotLoad=false)=>{
        if(!donotLoad){setLoadingCart(true)}
        try {
            const response = await axios(`${baseUrl}/cart/${user.id}`)
            const data = response.data
            setCartItems(data)
        } catch (error) {
            console.log(error)
        }finally {
            setLoadingCart(false)
        }
    }


    // CLEAR USER CART
    const clearUserCart = withPermission(async(donotLoad)=>{
        if(!donotLoad){setLoadingCart(true)}
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
    const increaseDecreaseCartItem = withPermission(async(operation, productId, cartItemId, formData)=>{
        setOperatingCartItem(cartItemId)
        try {
            const response = await axios.post(`${baseUrl}/cart/${operation}/quantity/${user.id}/${productId}`, formData)
            const data = response.data
            toast.success(data.message)
            getUserCart(true)
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }finally {
            setOperatingCartItem("")
        }
    })

    const removeFromCart = withPermission(async(productId, itemDetail, cartItemId)=>{
        setRemovingCartItem(cartItemId)
        try {
            const response = await axios.post(`${baseUrl}/remove/cart/${user.id}/${productId}`, itemDetail)
            const data = response.data
            getUserCart(true)
            toast.success(data.message)
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }finally {
            setRemovingCartItem("")
        }
    })

    const value = {
        cartItems,
        addingToCart,
        loadingCart,
        operatingCartItem,
        removingCartItem,
        getUserCart,
        addToCart,
        clearUserCart,
        increaseDecreaseCartItem,
        removeFromCart
    }
    return <cartContext.Provider value={value}>{children}</cartContext.Provider>
}
export default CartProvider