"use client"
import CartList from "@/app/_features/_cart/components/CartList";
import OrderSummary from "@/app/_features/_cart/components/OrderSummary";
import { useCartContext } from "@/context/CartContext";
import { useEffect } from "react";


const CartPage = () => {
  const {getUserCart, cartItems, deliveryFee, getDeliveryFee, cartWeight} = useCartContext()
  
  useEffect(()=>{
    getUserCart()
    getDeliveryFee()
  },[])
  return (
    <section className="pt-[70px] container">
      <h2 className="lbd-h1">My Bag</h2>
      <section className="mt-8 flex flex-col md:flex-row gap-8 justify-between">
        <CartList cartItems={cartItems}/>
        {
          cartItems?.items.length > 0 && (
            <OrderSummary cartItems={cartItems} deliveryFee={deliveryFee * cartWeight}/>
          )
        }
      </section>
    </section>
  );
};

export default CartPage;
