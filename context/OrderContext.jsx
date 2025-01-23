"use client"
import { withPermission } from "@/app/_features/_authentication/AuthChecker";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const orderContext = createContext()
export const useOrderContext = ()=>{
    const context = useContext(orderContext)
    if(!context){
        throw new Error("use order must be used within the OrderProvider")
    }
    return context
}

const OrderProvider = ({children})=>{

    const [newOrder, setNewOrder] = useState({})
    const [userOrders, setUserOrders] = useState({})
    const [loadingAllOrders, setLoadingAllOrders] = useState(false)
    const [creatingOrder, setCreatingOrder] = useState(false)
    const [verifyingPayment, setVerifyingPayment] = useState(false)
    const [loadingSingleOrder, setLoadingSinlgeOrder] = useState(false)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const {user} = useAuthContext()
    const [paymentVerified, setPaymentVerified] = useState(false)
    const navigate = useRouter()

    // GET ALL USER'S ORDERS
    const getAllOrders = withPermission(async ()=>{
        setLoadingAllOrders(true )
        try {
            const response = await axios(`${baseUrl}/user/order/${user.id}`)
            const data = response.data
            setUserOrders(data.orders)
        } catch (error) {
            console.log(error);
        } finally{
            setLoadingAllOrders(false)
        }
    })
    
    // GET ALL USER'S ORDERS
    const getSingleOrder = withPermission(async (orderId)=>{
        setLoadingAllOrders(true )
        try {
            const response = await axios(`${baseUrl}/single/order/${user.id}/${orderId}`)
            const data = response.data
            console.log(response);
            console.log(data);
        } catch (error) {
            console.log(error);
        } finally{
            setLoadingAllOrders(false)
        }
    })

     // VERIFY PAYMENT
    const verifyPayment = withPermission(async (paymentCode)=>{
        setVerifyingPayment(true)
        
        try {
            const response = await axios.post(`${baseUrl}/verify/paystack/payment/${paymentCode}`)
            const data = response.data
            setPaymentVerified(data)
        } catch (error) {
            console.log(error)
            if(error.code == "ERR_BAD_REQUEST"){
                toast.error(error.response.data.message)
            }
        } finally {
            setVerifyingPayment(false)
        }
    })

    // CREATE NEW ORDER
    const createNewOrder = withPermission(async (formData)=>{
        console.log(formData)
        setCreatingOrder(true)
        try {
            const response = await axios.post(`${baseUrl}/order/${user.id}`, formData)
            const data = response.data
            navigate.push(data.paymentLink)
            console.log(response);
            console.log(data);
        } catch (error) {
            console.log(error)
            // if(error.name == "AxiosError"){
            //     toast.error(error.message)
            // }
            if(error.code == "ERR_BAD_REQUEST"){
                toast.error(error.response.data.message)
            }
        }finally{
            setCreatingOrder(false)
        }
    })

    const value = {
        newOrder,
        userOrders,
        loadingAllOrders,
        loadingSingleOrder,
        creatingOrder,
        paymentVerified,
        createNewOrder,
        getAllOrders,
        getSingleOrder,
        verifyPayment,
        verifyingPayment
    }
    return <orderContext.Provider value={value}>{children}</orderContext.Provider>
}
export default OrderProvider