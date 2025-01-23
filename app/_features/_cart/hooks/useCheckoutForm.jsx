import { useAuthContext } from "@/context/AuthContext";
import { useState } from "react";

const useCheckoutForm = () => {
  const { user } = useAuthContext();
  const [formData, setFormData] = useState({
    name: "Peter Babs",
    email: user?.email,
    phone: "09089786756",
    country: "Nigeria",
    address: "Gbaji Market, Behind Brewery Company",
    city: "Ibadan",
    state: "Oyo State",
    zipCode: "200109",
    pickup: true,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value,type } = e.target;
    const newValue = type === "radio" ? value === "true" : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      if (!formData[field] && formData[field] !== false  ) {
        console.log(formData[field]);
        newErrors[field] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    formData,
    handleInputChange,
    validateForm,
    errors,
  };
};

export default useCheckoutForm;
