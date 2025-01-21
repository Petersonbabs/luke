"use client";
import { useCartContext } from "@/context/CartContext";
import { useProductsContext } from "@/context/ProductContext";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const useSingleProduct = () => {
  const { getSingleProduct, singleProduct } = useProductsContext();
  const { addToCart, addingToCart } = useCartContext();
  const [selectedImage, setSelectedImage] = useState(singleProduct?.mainImage);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [colors, setColors] = useState([]);
  const { id } = useParams();
  const [formData, setFormData] = useState({
    items: [
      {
        size: "md",
        color: "",
        quantity: 1,
      },
    ],
  });

  // Update colors and set default color on product load
  useEffect(() => {
    if (singleProduct?.colors) {
      const allColors = singleProduct.colors;
      setColors(allColors);
      const defaultColor = allColors[0]?.color || "";
      setSelectedColor(defaultColor);
      setFormData((prev) => ({
        ...prev,
        items: [
          {
            ...prev.items[0],
            color: defaultColor,
          },
        ],
      }));
    }
    setSelectedImage(singleProduct?.mainImage);
  }, [singleProduct]);

  // Fetch single product data
  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  // Handle image click
  const handleImageClick = (image, color) => {
    setSelectedImage(image);
    // setFormData((prev) => ({
    //   ...prev,
    //   items: [
    //     {
    //       ...prev.items[0],
    //       color,
    //     },
    //   ],
    // }));
  };

  // Handle size selection
  const handleSelectSize = (size) => {
    setFormData((prev) => ({
      ...prev,
      items: [
        {
          ...prev.items[0],
          size,
        },
      ],
    }));
  };

  // Handle color selection
  const handleSelectColor = (color) => {
    setSelectedColor(color);
    setFormData((prev) => ({
      ...prev,
      items: [
        {
          ...prev.items[0],
          color,
        },
      ],
    }));
  };

  // Handle add to cart
  const handleAddToCart = () => {
    addToCart(id, formData);
  };

  return {
    singleProduct,
    formData,
    handleSelectSize,
    loading: addingToCart,
    selectedImage,
    selectedColor,
    handleImageClick,
    handleSelectColor,
    handleAddToCart,
    colors,
    setSelectedImage,
  };
};

export default useSingleProduct;
