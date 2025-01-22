"use client";
import ItemNotFound from "@/components/common/ItemNotFound";
import ProductCard from "@/components/common/ProductCard";
import { useProductsContext } from "@/context/ProductContext";
import { useEffect } from "react";

export default function ProductsPageIndex() {
  const { allProducts, getAllProducts } = useProductsContext();
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="pt-[70px] container">
      <h1 className="lbd-h1 text-center">Products </h1>
      <section >
        {allProducts?.length > 0 ? (
          <section className="grid grid-cols-2 gap-4" >
            {allProducts?.map((product) => (
              <ProductCard product={product} />
            ))}
          </section>
        ) : (
          <ItemNotFound text={"No result!"} />
        )}
      </section>
    </div>
  );
}
