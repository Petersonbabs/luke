"use client"
import React, { createContext, useState, useContext } from "react";
import ProductData from "@/data/singleProduct"

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [loadingProducts, setLoadingProducts] = useState(false)
  const [singleProduct, setSingleProduct] = useState()
 

  const getSingleProduct = (productId) => {
    setSingleProduct(ProductData)
    
  };

  const value = {
    loadingProducts,
    singleProduct,
    getSingleProduct,
  }

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

export default ProductsProvider