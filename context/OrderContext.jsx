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
    const [formData, setFormData] = useState({
        name: "",
        email: user?.email,
        phone: "",
        country: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        pickup: "false",
      });

      const handleOrderInputChange = (e) => {
        const { name, value,type } = e.target;
        // const newValue = type === "radio" ? value === "true" : value;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
        
      };

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

    // CLEAR CART
    const clearCart = withPermission(async ()=>{
        setCreatingOrder(true)
        try {
            const response = await axios.post(`${baseUrl}/clear/cart/${user.id}`, formData)
            const data = response.data
            toast.success(data.message)
        } catch (error) {
            console.log(error)
            if(error.code == "ERR_BAD_REQUEST"){
                toast.error(error.response.data.message)
            }
        }finally{
            setCreatingOrder(false)
        }
    })

     // VERIFY PAYMENT
    const verifyPayment = withPermission(async (paymentCode)=>{
        setVerifyingPayment(true)
        
        try {
            const response = await axios.post(`${baseUrl}/verify/paystack/payment/${paymentCode}`)
            const data = response.data
            setPaymentVerified(data)
            clearCart()
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
        setCreatingOrder(true)
        try {
            const response = await axios.post(`${baseUrl}/order/${user.id}`, formData)
            const data = response.data
            navigate.push(data.paymentLink)
            
        } catch (error) {
            console.log(error)
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
        formData,
        createNewOrder,
        getAllOrders,
        getSingleOrder,
        verifyPayment,
        handleOrderInputChange,
        verifyingPayment
    }
    return <orderContext.Provider value={value}>{children}</orderContext.Provider>
}
export default OrderProvider