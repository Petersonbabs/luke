"use client";
import { withPermission } from "@/app/_features/_authentication/AuthChecker";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { toast } from "sonner";

const ReviewContext = createContext();
export const useReviewContext = () => {
  const context = useContext(ReviewContext);
  if (!context) {
    throw new Error("use Review must be used within the ReviewProvider");
  }
  return context;
};

const ReviewProvider = ({ children }) => {
  const [productReviews, setProductReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(false);
  const [addingReview, setAddingReview] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const { user } = useAuthContext();

  // GET ALL PRODUCT REVIEWS
  const getProductReviews = async (productId) =>{
    setLoadingReviews(true)
    try {
        const response = await axios(`${baseUrl}/review/${productId}`)
        const data = response.data;
      console.log(response);
      console.log(data);
    } catch (error) {
        console.log(error)
    } finally {
        setLoadingReviews(true)

    }
  }

  //   ADD REVIEW TO A PRODUCT
  const addReview = withPermission(async (reviewForm, productId) => {
    setAddingReview(true);
    try {
      const response = await axios.post(
        `${baseUrl}/review/${user.id}/${productId}`,
        reviewForm
      );
      const data = response.data;
      console.log(response);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setAddingReview(false);
    }
  });

  const value = {
    productReviews,
    loadingReviews,
    addingReview,
    addReview,
    getProductReviews
  };
  return (
    <ReviewContext.Provider value={value}>{children}</ReviewContext.Provider>
  );
};
export default ReviewProvider;
