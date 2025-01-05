import { Button } from "@/components/ui/button"
import CartData from "@/data/cart.json";

const OrderSummary = () => {
  return (
    <section className="border rounded p-4 h-fit sticky top-16 flex-[.8]">
        <h3 className="text-2xl mb-4">Order Summary</h3>
        <ul className="space-y-4 mb-4">
            <li className="flex justify-between items-center">
                <span>Subtotal:</span>
                <span>₦{CartData?.subTotal.toLocaleString()}</span>
            </li>
            <li className="flex justify-between items-center">
                <span>Delivery Fee:</span>
                <span>₦{CartData?.deliveryFee.toLocaleString()}</span>
            </li>
            <li className="flex justify-between items-center">
                <span>Total:</span>
                <span>₦{CartData?.totalPrice.toLocaleString()}</span>
            </li>
        </ul>
        <Button className="btn btn-full black-btn">Checkout</Button>
    </section>
  )
}

export default OrderSummary
