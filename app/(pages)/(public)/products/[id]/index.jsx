"use client";
import { Input } from "@/components/ui/input";
import useSingleProduct from "./hook/useSingleProduct";
import { Heart } from "lucide-react";
import "./singleproduct.css";
import BestOfSalesList from "@/components/sections/Best_of_sales/BestList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReviewsList from "@/app/_features/_reviews/components/ReviewsList";

const SingleProductIndex = () => {
  const { singleProduct } = useSingleProduct();
  console.log(singleProduct);
  return (
    <section className="pt-[70px]">
      <section className="container">
        {/* PRODUCT OVERVIEW */}
        <section className="grid gap-4 md:grid-cols-2">
          <section className="left grid gap-4">
            <div className="big-image ">
              <img
                src={singleProduct?.mainImage}
                alt={singleProduct?.name + " main image"}
              />
            </div>
            <div className="small-images flex gap-4">
              <div>
                <img
                  src={singleProduct?.firstImage}
                  alt={singleProduct?.name + " image"}
                />
              </div>
              <div>
                <img
                  src={singleProduct?.secondImage}
                  alt={singleProduct?.name + " image"}
                />
              </div>
              <div>
                <img
                  src={singleProduct?.thirdImage}
                  alt={singleProduct?.name + " image"}
                />
              </div>
            </div>
          </section>
          <section className="right space-y-6 py-4">
            <h2 className="text-2xl">{singleProduct?.name}</h2>
            <span className="text-2xl">
              ₦{singleProduct?.price.toLocaleString()}
            </span>
            <div className="size">
              <span>Size</span>
              <div className="flex gap-4">
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
              </div>
            </div>
            <div>
              <span>Specify your size</span>
              <Input />
            </div>

            {/* actions */}
            <section className="flex gap-4 items-center justify-start ">
              <button className="btn btn-full btn-green ">Add to bag</button>
              <div className="wishlist-btn">
                <Heart className="size-4" />
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
