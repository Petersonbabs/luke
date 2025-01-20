"use client";
import { withPermission } from "@/app/_features/_authentication/AuthChecker";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { toast } from "sonner";

const WishListContext = createContext();
export const useWishListContext = () => {
  const context = useContext(WishListContext);
  if (!context) {
    throw new Error("use WishList must be used within the WishListProvider");
  }
  return context;
};

const WishListProvider = ({ children }) => {
  const [userWishList, setUserWishList] = useState([]);
  const [loadingWishList, setLoadingWishList] = useState(false);
  const [addingWishList, setAddingWishList] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const { user } = useAuthContext();

  // GET ALL PRODUCT WishList
  const getUserWishList = async () => {
    setLoadingWishList(true);
    try {
      const response = await axios(`${baseUrl}/favourite/${productId}`);
      const data = response.data;
      console.log(response);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingWishList(true);
    }
  };

  //   ADD WishList TO A PRODUCT
  const addToWishList = withPermission(async (productId) => {
    setAddingWishList(true);
    try {
      const response = await axios.post(
        `${baseUrl}/favourite/${user.id}/${productId}`);
      const data = response.data;
      console.log(response);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setAddingWishList(false);
    }
  });

  //   ADD WishList TO A PRODUCT
  const removeFromWishList = withPermission(async (productId) => {
    setAddingWishList(true);
    try {
      const response = await axios.post(
        `${baseUrl}/remove/favourite/${user.id}/${productId}`);
      const data = response.data;
      console.log(response);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setAddingWishList(false);
    }
  });

  const value = {
    userWishList,
    loadingWishList,
    addingWishList,
    addToWishList,
    getUserWishList,
    removeFromWishList  
  };
  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  );
};
export default WishListProvider;
