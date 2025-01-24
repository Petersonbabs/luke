"use client";
import { withPermission } from "@/app/_features/_authentication/AuthChecker";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { toast } from "sonner";
import { useWishListContext } from "./WishListContext";

const cartContext = createContext();
export const useCartContext = () => {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("use cart must be used within the CartProvider");
  }
  return context;
};

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState();
  const [addingToCart, setAddingToCart] = useState("");
  const [loadingCart, setLoadingCart] = useState(false);
  const [operatingCartItem, setOperatingCartItem] = useState("");
  const [removingCartItem, setRemovingCartItem] = useState("");
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const { user } = useAuthContext();
  const { getUserWishList, removeFromWishList, userWishList } =
    useWishListContext();
    const [deliveryFee, setDeliveryFee] = useState(0)

  const checkoutFromWislist = (productId) => {
    getUserWishList();
    const productIsInWishList = userWishList.find(
      (item) => item._id == productId
    );
    if(productIsInWishList){
        removeFromWishList(productId)
    }
  };

  // ADD TO CART
  const addToCart = withPermission(async (productId, items) => {
      const { color, quantity, size } = items.items[0];
      if (!color || !quantity || !size) {
          toast.info("Wait, choose your size, color & quantiy 😉");
          return;
        }
        setAddingToCart(productId);
    try {
      const response = await axios.post(
        `${baseUrl}/add/cart/${user.id}/${productId}`,
        items
      );
      if (response.status == 200) {
        const { message } = response.data;
        toast.success(message);
        getUserCart();
        checkoutFromWislist(productId);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setAddingToCart("");
    }
  });

  // GET USER CART
  const getUserCart = async (donotLoad = false) => {
    if (!donotLoad) {
      setLoadingCart(true);
    }
    try {
      const response = await axios(`${baseUrl}/cart/${user.id}`);
      const data = response.data;
      setCartItems(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCart(false);
    }
  };
 
  // GET DELIVERY FEE
  const getDeliveryFee = async () => {
    try {
      const response = await axios(`${baseUrl}/shipping/fee`);
      const data = response.data;
      setDeliveryFee(data[0].fee)
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCart(false);
    }
  };

  // CLEAR USER CART
  const clearUserCart = withPermission(async (donotLoad) => {
    if (!donotLoad) {
      setLoadingCart(true);
    }
    try {
      const response = await axios.post(`${baseUrl}/clear/cart/${user.id}`);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCart(false);
    }
  });

  // INCREASE CART ITEM QUANTITY
  const increaseDecreaseCartItem = withPermission(
    async (operation, productId, cartItemId, formData) => {
      setOperatingCartItem(cartItemId);
      try {
        const response = await axios.post(
          `${baseUrl}/cart/${operation}/quantity/${user.id}/${productId}`,
          formData
        );
        const data = response.data;
        toast.success(data.message);
        getUserCart(true);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      } finally {
        setOperatingCartItem("");
      }
    }
  );

  const removeFromCart = withPermission(
    async (productId, itemDetail, cartItemId) => {
      setRemovingCartItem(cartItemId);
      try {
        const response = await axios.post(
          `${baseUrl}/remove/cart/${user.id}/${productId}`,
          itemDetail
        );
        const data = response.data;
        getUserCart(true);
        toast.success(data.message);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      } finally {
        setRemovingCartItem("");
      }
    }
  );

  const value = {
    cartItems,
    addingToCart,
    loadingCart,
    operatingCartItem,
    removingCartItem,
    deliveryFee,
    getUserCart,
    addToCart,
    clearUserCart,
    increaseDecreaseCartItem,
    removeFromCart,
    getDeliveryFee
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
export default CartProvider;
