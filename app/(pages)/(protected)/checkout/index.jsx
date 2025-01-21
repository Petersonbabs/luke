"use client"
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
import CartData from "@/data/cart.json";
import Link from "next/link";

const CheckoutIndex = () => {
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
        <section className="flex-1">
          <CheckoutForm />
        </section>
        <section className="space-y-4">
          <section className="space-y-4 flex-1">
            <h2 className="text-3xl">Review Your Cart</h2>
            <CartList custom="hidden" />
          </section>
          <Card>
          <ul className="space-y-4 mb-4 p-4">
            <li className="flex justify-between items-center">
                <span>Subtotal:</span>
                <span>₦{CartData?.subTotal.toLocaleString()}</span>
            </li>
            <li className="flex justify-between items-center">
                <span>Discount:</span>
                <span>₦0.00</span>
            </li>
            <li className="flex justify-between items-center">
                <span>Delivery Fee:</span>
                <span>₦{CartData?.deliveryFee.toLocaleString()}</span>
            </li>
            <li className="flex justify-between items-center">
                <span>VAT:</span>
                <span>₦0.00</span>
            </li>
        </ul>
        <Link href={'#'} className="justify-center py-4 btn-full btn-green rounded text-center flex items-center gap-4" >Pay Now</Link>
          </Card>
        </section>
      </section>
    </section>
  );
};

export default CheckoutIndex;
