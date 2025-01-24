
import { useOrderContext } from "@/context/OrderContext";
import { useState } from "react";

const useCheckoutForm = () => {
  const {handleOrderInputChange, formData} = useOrderContext()


  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      if (!formData[field] && formData[field] !== false  ) {
        newErrors[field] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    formData,
    handleOrderInputChange,
    validateForm,
    errors,
  };
};

export default useCheckoutForm;
