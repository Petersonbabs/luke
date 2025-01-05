import { Input } from "@/components/ui/input";
import { ShoppingBasket, Truck } from "lucide-react";
import "../style/style.css";
import PayStackLogo from "@/public/icons/Paystack_Logo.png"
import FluterWaveLogo from "@/public/icons/Fluterwave_Logo.png"
import Image from "next/image";

const CheckoutForm = () => {
  return (
    <form className="space-y-8">
      <h2 className="text-3xl">Shipping Address</h2>
      <div className="flex gap-4 items-center flex-wrap">
        <div className="flex flex-1 hover:bg-d9 cursor-pointer transition-all items-center gap-4 border py-2 px-6">
          <input type="radio" id="delivery" name="deliveryType" />
          <label htmlFor="delivery" className="flex items-end gap-2">
            <Truck className="font-thin size-6" />
            <span className="self-end">Delivery</span>
          </label>
        </div>
        <div className="flex flex-1 hover:bg-d9 cursor-pointer transition-all items-center gap-4 border py-2 px-6">
          <input type="radio" id="delivery" name="deliveryType" />
          <label htmlFor="delivery" className="flex items-end gap-2">
            <ShoppingBasket className="font-thin size-6" />
            <span className="self-end">Pickup</span>
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="fullName">Full Name</label>
        <Input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Enter Full Name"
          className="bg-white"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email">Email Address</label>
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Email"
          className="bg-white"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="phoneNumber">Phone Number</label>
        <Input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Enter Phone Number"
          className="bg-white"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="country">Country</label>
        <Input
          type="text"
          name="country"
          id="country"
          placeholder="Enter Country"
          className="bg-white"
        />
      </div>

      <div className="flex flex-col sm:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-2">
          <label htmlFor="city">City</label>
          <Input type="text" name="city" id="city" className="bg-white" />
        </div>
        <div className="space-y-2">
          <label htmlFor="state">State</label>
          <Input type="text" name="state" id="state" className="bg-white" />
        </div>
        <div className="space-y-2">
          <label htmlFor="zipCode">Zip Code</label>
          <Input type="text" name="zipCode" id="zipCode" className="bg-white" />
        </div>
      </div>

      <div>
        <h2 className="text-3xl">Payment Method</h2>
        <div className="flex gap-4 items-center flex-wrap">
            {/* PAYSTACK */}
          <div className="flex flex-1 hover:bg-d9 cursor-pointer transition-all items-center gap-4 border py-2 px-6">
            <input type="radio" id="paystack" name="paymentType" />
            <label htmlFor="paystack" className="flex items-end gap-2">
              <Image src={PayStackLogo} alt="PayStackLogo" width={100} height={100}/>
            </label>
          </div>
          {/* FLUTTERWAVE */}
          <div className="flex flex-1 hover:bg-d9 cursor-pointer transition-all items-center gap-4 border py-2 px-6">
            <input type="radio" id="flutterwave" name="paymentType" />
            <label htmlFor="flutterwave" className="flex items-end gap-2">
            <Image src={FluterWaveLogo} alt="PayStackLogo" width={100} height={100}/>
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
