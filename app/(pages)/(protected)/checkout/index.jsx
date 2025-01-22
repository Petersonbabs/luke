"use client";
import CartList from "@/app/_features/_cart/components/CartList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CheckoutForm from "@/app/_features/_cart/components/CheckoutForm";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useCartContext } from "@/context/CartContext";
import { useState } from "react";
import useCheckoutForm from "@/app/_features/_cart/hooks/useCheckoutForm";
import { useOrderContext } from "@/context/OrderContext";
import { Bike } from "lucide-react";

const CheckoutIndex = () => {
  const { formData, handleInputChange, validateForm, errors } =
    useCheckoutForm();
  const { createNewOrder, creatingOrder } = useOrderContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      createNewOrder(formData);
    }
  };
  const { cartItems } = useCartContext();
  const [deliveryFee, setDeliveryFee] = useState(3000);
  return (
    <section className="pt-[90px] container">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/checkout">Checkout</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section className="flex flex-col md:flex-row gap-6 mt-8">
        {/* /LEFT: CHECKOUT FORM */}
        <section className="flex-1">
          <CheckoutForm />
        </section>

        {/* RIGHT: ORDER REVIEW */}
        <section className="space-y-4">
          <section className="space-y-4 flex-1">
            <h2 className="text-3xl">Review Your Cart</h2>
            <CartList cartItems={cartItems} />
          </section>
          <Card>
            <ul className="space-y-4 mb-4 p-4">
              <li className="flex justify-between items-center">
                <span>Subtotal:</span>
                <span>₦{cartItems?.subTotal.toLocaleString()}</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Discount:</span>
                <span>₦0.00</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Delivery Fee:</span>
                <span>₦{deliveryFee.toLocaleString()}</span>
              </li>
              <li className="flex justify-between items-center">
                <span>VAT:</span>
                <span>₦0.00</span>
              </li>
            </ul>
            <div className="mb-4 p-4 flex justify-between items-center ">
              <span className="font-bold">Total</span>
              <span>
                ₦{(cartItems?.subTotal + deliveryFee).toLocaleString()}
              </span>
            </div>
          </Card>
            <button
              onClick={handleSubmit}
              disabled={creatingOrder}
              className={` w-full transition-all text-white py-2 px-4 rounded ${
                creatingOrder
                  ? "bg-blue-400 hover:bg-blue-400"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {creatingOrder ? (
                <p className="flex gap-4 justify-center  items-center">
                  <Bike className=" animate-bounce" />
                  <span>Ordering...</span>
                </p>
              ) : (
                <p className="flex gap-4 justify-center items-center">
                  <Bike />
                  <span>Place Order</span>
                </p>
              )}
            </button>
        </section>
      </section>
    </section>
  );
};

export default CheckoutIndex;
