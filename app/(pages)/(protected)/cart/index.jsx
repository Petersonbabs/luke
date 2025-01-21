"use client"
import CartList from "@/app/_features/_cart/components/CartList";
import OrderSummary from "@/app/_features/_cart/components/OrderSummary";
import { useCartContext } from "@/context/CartContext";
import { useEffect } from "react";


const CartPage = () => {
  const {getUserCart, cartItems} = useCartContext()
  useEffect(()=>{
    getUserCart()
  },[])
  return (
    <section className="pt-[70px] container">
      <h2 className="lbd-h1">My Bag</h2>
      <section className="mt-8 flex flex-col md:flex-row gap-8 justify-between">
        <CartList cartItems={cartItems}/>
        <OrderSummary/>
      </section>
    </section>
  );
};

export default CartPage;
