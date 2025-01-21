"use client";
import ProductCard from "@/components/common/ProductCard";
import Link from "next/link";
import { useProductsContext } from "@/context/ProductContext";
import { useEffect } from "react";

const MostPopularIndex = ({ title }) => {
  const { getAllPopular, popular } = useProductsContext();
  useEffect(() => {
    getAllPopular();
  }, []);
  return (
    <section className="container my-8 mx-auto">
      <h2 className="lbd-sub-text mb-4">{title}</h2>
      <section className="flex overflow-x-scroll scrolled-product">
        {popular?.slice(0, 5).map((product, index) => (
          <section key={index} className="md:basis-1/2 lg:basis-1/3">
            <ProductCard index={index} product={product?.product} />
          </section>
        ))}
      </section>
    </section>
  );
};

export default MostPopularIndex;
