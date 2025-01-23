"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [loadingAppeal, setLoadingAppeal] = useState(false);
  const [loadingNewin, setLoadingNewin] = useState(false);
  const [loadingBestOfSales, setLoadingBestOfSales] = useState(false);
  const [loadingCategoryProducts, setLoadingCategoryProducts] = useState(false);
  const [isSorting, setIsSorting] = useState(false);
  const [singleProduct, setSingleProduct] = useState();
  const [allProducts, setAllProducts] = useState();
  const [newIn, setNewIn] = useState();
  const [bestSales, setBestSales] = useState();
  const [appealProducts, setAppealProducts] = useState();
  const [categoryProducts, setCategoryProducts] = useState();
  const [popular, setPopular] = useState();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // GET ALL PRODUCTS
  const getAllProducts = async () => {
    setLoadingProducts(true)
    console.log('All products loading...');
    try {
      const response = await axios(`${baseUrl}/all/product`);
      const data = response.data
      setAllProducts(data)
    } catch (error) {
      console.log(error);
    } finally{
      setLoadingProducts(false)
      console.log('FETCH PRODUCTS DONE!...');
    }
  };

  // GET BY APPEAL (MEN, WOMEN)
  const getByAppeal = async (appeal) => {
    setLoadingAppeal(true)
    try {
      const response = await axios(`${baseUrl}/category/appeal/${appeal}`);
      const data = response.data
      
      setAppealProducts(data.productsByCategory)
    } catch (error) {
      console.log(error);
    } finally{
      setLoadingAppeal(false)
    }
  };

  // GET LATEST PRODUCTS IN A CATEGORY
  const getCategoryLatestProducts = async(category)=>{
    setIsSorting(true)
    try {
      const response = await axios(`${baseUrl}/product/category/latest/${category}`)
      const data = response.data
      console.log(data);
    } catch (error) {
      console.log(error)
    }finally {
      setIsSorting(false)
    }
  }

   // GET LATEST PRODUCTS IN A CATEGORY
   const getProductsByCategory = async(category)=>{
     
     setLoadingProducts(true)
     setLoadingCategoryProducts(true)
     
     try {
       const response = await axios(`${baseUrl}/product/category/${category}`)
       const data = response.data
      setCategoryProducts(data.products)
    } catch (error) {
      console.log(error)
    }finally {
      setLoadingCategoryProducts(false)
      setLoadingProducts(false)
    }
  }


  // GET ALL NEW IN
  const getAllNewIn = async () => {
    setLoadingNewin(true)
    try {
      const response = await axios(`${baseUrl}/newin`);
      const data = response.data
      setNewIn(data)
    } catch (error) {
      console.log(error);
    } finally{
      setLoadingNewin(false)
    }
  };

  // GET BEST SELLERS
  const getBestSales = async()=>{
    setLoadingBestOfSales(true)
    try {
      const response = await axios(`${baseUrl}/bestseller`)
      const data = response.data
      setBestSales(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingBestOfSales(false)
    }
  }
  
  // GET ALL POPULAR
  const getAllPopular = async()=>{
    setLoadingProducts(true)
    try {
      const response = await axios(`${baseUrl}/popular`)
      const data = response.data
      setPopular(data)
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
      setSingleProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  // SORT PRODUCT BY CATEGORY ORDER (ASCEND / DESCEND / LATEST)
  const sortCategoryOrder = async(order, category)=>{
    setLoadingCategoryProducts(true)
    try {
      const response = await axios(`${baseUrl}/product/category/${order}/${category}`)
      const data = response.data
      console.log(data);
      setCategoryProducts(data)
    } catch (error) {
      console.log(error)
    }finally {
      setLoadingCategoryProducts(false)
    }
  }

  const value = {
    loadingProducts,
    singleProduct,
    bestSales,
    popular,
    isSorting,
    loadingAppeal,
    newIn,
    appealProducts,
    loadingNewin,
    loadingBestOfSales,
    allProducts,
    categoryProducts,
    loadingCategoryProducts,
    getAllProducts,
    getByAppeal,
    sortCategoryOrder,
    getSingleProduct,
    getAllNewIn,
    getBestSales,
    getAllPopular,
    getCategoryLatestProducts,
    getProductsByCategory
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
