import { Input } from "@/components/ui/input";
import { Bike, ShoppingBasket, Truck } from "lucide-react";
import "../style/style.css";
import PayStackLogo from "@/public/icons/Paystack_Logo.png";
import FluterWaveLogo from "@/public/icons/Fluterwave_Logo.png";
import Image from "next/image";
import useCheckoutForm from "../hooks/useCheckoutForm";
import { useOrderContext } from "@/context/OrderContext";
import { AnimatedLoader } from "@/components/common/Loader";

const CheckoutForm = () => {
  const { formData, handleInputChange, validateForm, errors } = useCheckoutForm();
  const {createNewOrder, creatingOrder} = useOrderContext()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      createNewOrder(formData);
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <h2 className="text-3xl">Shipping Address</h2>
      <div>
      <div className="flex gap-4 items-center flex-wrap">
        <div className="flex flex-1 hover:bg-d9 cursor-pointer relative  transition-all items-center gap-4 border">
          <input
            type="radio"
            id="delivery"
            name="pickup"
            value={false}
            className="ml-3"
            onChange={handleInputChange}
          />
          <label htmlFor="delivery" className="flex items-end gap-2 py-2 pr-3 cursor-pointer w-full ">
            <Truck className="font-thin size-6" />
            <span className="self-end">Delivery</span>
          </label>
        </div>
        <div className="flex flex-1 hover:bg-d9 cursor-pointer relative  transition-all items-center gap-4 border ">
          <input
            type="radio"
            id="pickup"
            name="pickup"
            value={true}
            className="ml-3"
            onChange={handleInputChange}
          />
          <label htmlFor="pickup" className="flex items-end gap-2 py-2 pr-3 cursor-pointer w-full ">
            <ShoppingBasket className="font-thin size-6" />
            <span className="self-end">Pickup</span>
          </label>
        </div>
      </div>
        <p className="mt-2 text-center"> {errors.name && <p className="text-red-500">{errors.name}</p>}</p>
      </div>

      <div className="space-y-2">
        <label htmlFor="name">Full Name</label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Full Name"
          value={formData.name}
          onChange={handleInputChange}
          className="bg-white"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="email">Email Address</label>
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleInputChange}
          className="bg-white"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="phone">Phone Number</label>
        <Input
          type="text"
          name="phone"
          id="phone"
          placeholder="Enter Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          className="bg-white"
        />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="country">Country</label>
        <Input
          type="text"
          name="country"
          id="country"
          placeholder="Enter Country"
          value={formData.country}
          onChange={handleInputChange}
          className="bg-white"
        />
        {errors.country && <p className="text-red-500">{errors.country}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="address">Address</label>
        <Input
          type="text"
          name="address"
          id="address"
          placeholder="Enter address"
          value={formData.address}
          onChange={handleInputChange}
          className="bg-white"
        />
        {errors.address && <p className="text-red-500">{errors.address}</p>}
      </div>

      <div className="flex flex-col sm:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-2">
          <label htmlFor="city">City</label>
          <Input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            onChange={handleInputChange}
            className="bg-white"
          />
          {errors.city && <p className="text-red-500">{errors.city}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="state">State</label>
          <Input
            type="text"
            name="state"
            id="state"
            value={formData.state}
            onChange={handleInputChange}
            className="bg-white"
          />
          {errors.state && <p className="text-red-500">{errors.state}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="zipCode">Zip Code</label>
          <Input
            type="text"
            name="zipCode"
            id="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            className="bg-white"
          />
          {errors.zipCode && <p className="text-red-500">{errors.zipCode}</p>}
        </div>
      </div>

      <div>
        <h2 className="text-3xl">Payment Method</h2>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex flex-1 hover:bg-d9 cursor-pointer relative  transition-all items-center gap-4 border max-w-[300px]">
            <input
              type="radio"
              id="paystack"
              name="paymentType"
              value="paystack"
              className="ml-3"
              checked
              onChange={handleInputChange}
            />
            <label htmlFor="paystack" className="flex items-end gap-2 py-3 pr-3 cursor-pointer w-full">
              <Image src={PayStackLogo} alt="PayStackLogo" width={100} height={100} />
            </label>
          </div>
          <div className="hidden flex-1 hover:bg-d9 cursor-pointer relative  transition-all items-center gap-4 border">
            <input
              type="radio"
              id="flutterwave"
              name="paymentType"
              value="flutterwave"
              className="ml-3"
              onChange={handleInputChange}
            />
            <label htmlFor="flutterwave" className="flex items-end gap-2 py-2 pr-3 cursor-pointer w-full">
              <Image src={FluterWaveLogo} alt="FlutterWaveLogo" width={100} height={100} />
            </label>
          </div>
        </div>
      </div>

      <button type="submit" disabled={creatingOrder} className={`  transition-all text-white py-2 px-4 rounded ${creatingOrder ? "bg-blue-400 hover:bg-blue-400" : "bg-blue-500 hover:bg-blue-600"}`}>
        {
          creatingOrder ?
          <p className="flex gap-4 items-center">
            <Bike className=" animate-bounce" />
            <span>Ordering...</span>
          </p> :
          <p className="flex gap-4 items-center">
            <Bike />
            <span>Place Order</span>
          </p>
        }
      </button>
    </form>
  );
};

export default CheckoutForm;