"use client";
import { Input } from "@/components/ui/input";
import useSingleProduct from "./hook/useSingleProduct";
import { Heart, Loader2 } from "lucide-react";
import "./singleproduct.css";
import BestOfSalesList from "@/components/sections/Best_of_sales/BestList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReviewsList from "@/app/_features/_reviews/components/ReviewsList";

const SingleProductIndex = () => {
  const {
    singleProduct,
    handleSelectSize,
    formData,
    loading,
    selectedColor,
    selectedImage,
    colors,
    handleImageClick,
    addingToCart,
    handleAddToCart
  } = useSingleProduct();

  

  return (
    <section className="pt-[70px]">
      <section className="container">
        {/* PRODUCT OVERVIEW */}
        <section className="grid gap-6 md:grid-cols-2">
          {/* Left Section */}
          <section className="left grid gap-4">
            {/* Big Image */}
            <div className="big-image w-full border ">
              <img
                src={selectedImage}
                alt={singleProduct?.name + " selected image"}
                className="w-full h-auto"
              />
            </div>

            {/* Small Images */}
            <div className="small-images flex gap-4 overflow-x-auto">
              {[
                singleProduct?.mainImage,
                singleProduct?.firstImage,
                singleProduct?.secondImage,
                singleProduct?.thirdImage,
              ].map((image, index) => (
                <div
                  key={index}
                  className={`cursor-pointer border-2 ${
                    selectedImage === image
                      ? "border-blue-500"
                      : "border-gray-300"
                  } rounded`}
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={image}
                    alt={`${singleProduct?.name} thumbnail ${index + 1}`}
                    className="w-16 h-16 object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Right Section */}
          <section className="right space-y-6 py-4">
            <h2 className="text-2xl">{singleProduct?.name}</h2>
            <span className="text-2xl">
              ₦{singleProduct?.price.toLocaleString()}
            </span>
            <div>
              <span>Color - {selectedColor}</span>
              <div className="flex gap-4 my-2">
                {colors?.map((color, key) => (
                  <div
                    key={key}
                    className={`border w-12 h-12 flex items-center justify-center bg-${
                      color.color
                    }-500  cursor-pointer p-2 ${
                      selectedImage == color.image
                        ? "border border-blue-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => {
                      handleImageClick(color.image,color.color);
                    }}
                  >
                    {color.color}
                  </div>
                ))}
              </div>
            </div>
            <div className="size">
              <span>Size</span>
              <div className="flex gap-4">
                {["sm", "md", "lg", "Xl"].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSelectSize(size)}
                    className={`${
                      formData.items[0].size === size && "bg-d4 border-none"
                    } border`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span>Specify your size</span>
              <Input
                onChange={(e) => {
                  handleSelectSize(e.target.value);
                }}
              />
            </div>

            {/* Actions */}
            <section className="flex gap-4 items-center justify-start">
              <button className="btn btn-full btn-green" disabled={addingToCart} onClick={handleAddToCart}>
                {!addingToCart ? (
                  <span>Add to Bag</span>
                ) : (
                  <Loader2 className="animate-spin m-auto" />
                )}
              </button>
              <div className="wishlist-btn">
                {!loading ? (
                  <Heart className="size-4" />
                ) : (
                  <Loader2 className="animate-spin m-auto" />
                )}
              </div>
            </section>
          </section>
        </section>
        {/* END OF PRODUCT OVERVIEW */}

        {/* REVIEWS & DESCRIPTION */}
        <section className="mt-16 ">
          <Tabs defaultValue="reviews">
            <TabsList className="mb-4 gap-8">
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="description">Description</TabsTrigger>
            </TabsList>
            <TabsContent value="reviews">
              <ReviewsList />
            </TabsContent>
            <TabsContent value="description">
              <p>{singleProduct?.description}</p>
            </TabsContent>
          </Tabs>
        </section>
        {/* END OF REVIEWS & DESCRIPTION */}

        {/* YOU MAY ALSO LIKE */}
        <section className="mt-16">
          <BestOfSalesList title={"You May Also Like"} />
        </section>
        {/* END OF YOU MAY ALSO LIKE */}
      </section>
    </section>
  );
};

export default SingleProductIndex;
