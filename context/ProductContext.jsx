"use client";
import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [singleProduct, setSingleProduct] = useState();
  const [bestSales, setBestSales] = useState();
  const [popular, setPopular] = useState();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // GET ALL NEW IN
  const getAllNewIn = async () => {
    setLoadingProducts(true)
    try {
      const response = await axios(`${baseUrl}/newin`);
      const data = response.data
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally{
      setLoadingProducts(false)
    }
  };

  // GET BEST SELLERS
  const getBestSales = async()=>{
    setLoadingProducts(true)
    try {
      const response = await axios(`${baseUrl}/bestseller`)
      const data = response.data
      setBestSales(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingProducts(false)
    }
  }
  
  // GET ALL POPULAR
  const getAllPopular = async()=>{
    setLoadingProducts(true)
    try {
      const response = await axios(`${baseUrl}/popular`)
      const data = response.data
      setPopular(data)
      console.log(data);

    } catch (error) {
      console.log(error)
    } finally {
      setLoadingProducts(false)
    }
  }

  const getSingleProduct = async (productId) => {
    try {
      const response = await axios(`${baseUrl}/product/${productId}`)
      const data = response.data
      console.log(data);
      setSingleProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    loadingProducts,
    singleProduct,
    bestSales,
    getSingleProduct,
    getAllNewIn,
    getBestSales,
    getAllPopular,
    popular
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within an ProductsProvider");
  }
  return context;
};

export default ProductsProvider;
