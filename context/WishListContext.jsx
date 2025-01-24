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
  const [wishListIds, setWishListIds] = useState([])
  const [loadingWishList, setLoadingWishList] = useState(false);
  const [addingWishList, setAddingWishList] = useState("");
  const [removingFromWishList, setRemovingFromWishList] = useState("");
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const { user } = useAuthContext();

  // GET ALL PRODUCT WishList
  const getUserWishList = async (doNotLoad) => {
    !doNotLoad && setLoadingWishList(true);
    try {
      const response = await axios(`${baseUrl}/favourite/${user.id}`);
      const data = response.data;
      setUserWishList(data.favorites)
      const ids = data.favorites.map(item => item._id)
      setWishListIds(ids)
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingWishList(false);
    }
  };

  //   ADD WishList TO A PRODUCT
  const addToWishList = withPermission(async (productId) => {
    setAddingWishList(productId);
    try {
      await axios.post(`${baseUrl}/add/favourite/${user.id}/${productId}`);
      toast.success('Added to wishlist')
      getUserWishList(true)
    } catch (error) {
      console.log(error);
    } finally {
      setAddingWishList("");
    }
  });

  //   ADD WishList TO A PRODUCT
  const removeFromWishList = withPermission(async (id) => {
    setRemovingFromWishList(id);
    try {
      await axios.post(`${baseUrl}/remove/favourite/${user.id}/${id}`);
      getUserWishList(true)
      toast.success('Removed from wishlist')
    } catch (error) {
      console.log(error);
    } finally {
      setRemovingFromWishList("");
    }
  });

  const value = {
    userWishList,
    loadingWishList,
    addingWishList,
    removingFromWishList,
    wishListIds,
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
