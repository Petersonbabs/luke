"use client";
import ItemNotFound from "@/components/common/ItemNotFound";
import Loader from "@/components/common/Loader";
import ProductCard from "@/components/common/ProductCard";
import { useProductsContext } from "@/context/ProductContext";
import { useEffect } from "react";

const BestOfSalesIndex = ({ title }) => {
  const { getBestSales, bestSales, loadingBestOfSales } = useProductsContext();
  useEffect(() => {
    getBestSales();
  }, []);
  return (
    <section className="container my-8 mx-auto">
      <h2 className="lbd-sub-text mb-4">{title}</h2>
      <section className="flex overflow-x-scroll scrolled-product gap-4">
        {!loadingBestOfSales ? (
          <>
            {bestSales?.length > 0 ? (
              <>
                {bestSales?.slice(0, 5).map((product, index) => (
                  <section key={index} className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard index={index} product={product?.product} />
                  </section>
                ))}
              </>
            ) : (
              <ItemNotFound text={"No result!"} />
            )}
          </>
        ) : (
          <Loader />
        )}
      </section>
    </section>
  );
};

export default BestOfSalesIndex;
