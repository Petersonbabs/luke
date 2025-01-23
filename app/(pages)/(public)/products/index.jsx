"use client";
import ItemNotFound from "@/components/common/ItemNotFound";
import ProductCard from "@/components/common/ProductCard";
import { useProductsContext } from "@/context/ProductContext";
import { useEffect, useState } from "react";
import "./categories.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams, useRouter } from "next/navigation";
import Loader, { AnimatedLoader } from "@/components/common/Loader";

export default function ProductsPageIndex() {
  const {
    allProducts,
    getAllProducts,
    getProductsByCategory,
    categoryProducts,
    loadingCategoryProducts,
    getByAppeal,
    loadingAppeal,
    appealProducts,
  } = useProductsContext();
  const searchParams = useSearchParams();
  const router = useRouter();
  const c = searchParams.get("c");
  const n = searchParams.get("n");
  const [category, setCategory] = useState(c);
  const [appeal, setAppeal] = useState(n);

  const changeCategory = (selectedCategory) => {
    setCategory(selectedCategory);
    router.push(`/products/?c=${selectedCategory.toLowerCase()}&n=${appeal}`);
  };

  useEffect(() => {
    getByAppeal(appeal);
  }, [appeal]);

  useEffect(() => {
    getProductsByCategory(category);
  }, [c]);
  return (
    <div className="pt-[70px] container">
      <section className="my-8">
        <Tabs defaultValue={appeal}>
          <TabsList>
            <TabsTrigger
              value="men"
              onClick={() => {
                setAppeal("men");
              }}
            >
              Men
            </TabsTrigger>
            <TabsTrigger
              value="women"
              onClick={() => {
                setAppeal("women");
              }}
            >
              Women
            </TabsTrigger>
            <TabsTrigger
              value="unisex"
              onClick={() => {
                setAppeal("unisex");
              }}
            >
              Unisex
            </TabsTrigger>
          </TabsList>
          <TabsContent value="men">
            {loadingAppeal ? (
              <AnimatedLoader />
            ) : (
              <AppealCategories appealProducts={appealProducts} changeCategory={changeCategory} selectedCategory={category} />
            )}
          </TabsContent>
          <TabsContent value="women">
            {loadingAppeal ? (
              <AnimatedLoader />
            ) : (
              <AppealCategories appealProducts={appealProducts} changeCategory={changeCategory} selectedCategory={category} />
            )}
          </TabsContent>
          <TabsContent value="unisex">
            {loadingAppeal ? (
              <AnimatedLoader />
            ) : (
              <AppealCategories appealProducts={appealProducts} changeCategory={changeCategory} selectedCategory={category} />
            )}
          </TabsContent>
        </Tabs>
      </section>
      <h1 className="lbd-h1 text-center capitalize">Products in {category}</h1>
      <section>
        {loadingCategoryProducts ? (
          <Loader />
        ) : (
          <section>
            {categoryProducts?.length > 0 ? (
              <section className="grid categories-grid sm:grid-cols-3 gap-4">
                {categoryProducts?.map((product) => (
                  <ProductCard product={product} />
                ))}
              </section>
            ) : (
              <ItemNotFound text={"No result!"} />
            )}
          </section>
        )}
      </section>
    </div>
  );
}

const AppealCategories = ({ appealProducts, selectedCategory, changeCategory }) => {
  return (
    <section className="flex gap-4 my-4 overflow-x-scroll categories-scroll">
      {appealProducts?.map((category, index) => (
        <div
          key={index}
          className={`bg-white px-4 py-2 flex gap-3 rounded-full items-center hover:bg-gray-50 transition-all cursor-pointer ${selectedCategory.toLowerCase() == category.name.toLowerCase() ? "border-2 border-black" : ""}`}
        >
          <div
            className="border w-[24px] h-[24px] rounded-full bg-gray-50"
            onClick={() => {
              changeCategory(category.name);
            }}
          >
            <img src={category.image} alt={category.name} className="w-full h-full object-cover rounded-full" />
          </div>
          <h3 className="line-clamp-1">{category.name}</h3>
        </div>
      ))}
    </section>
  );
};
