"use client";
import ItemNotFound from "@/components/common/ItemNotFound";
import ProductCard from "@/components/common/ProductCard";
import { useProductsContext } from "@/context/ProductContext";
import { useEffect, useState } from "react";
import "./categories.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams, useRouter } from "next/navigation";
import Loader, { AnimatedLoader } from "@/components/common/Loader";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";

export default function ProductsPageIndex() {
  const {
    allProducts,
    getAllProducts,
    getProductsByCategory,
    categoryProducts,
    loadingCategoryProducts,
    getByAppeal,
    loadingAppeal,
    sortCategoryOrder,
    isSorting,
    appealProducts,
  } = useProductsContext();
  // const searchParams = useSearchParams();
  const url = new URL( window && window.location.href);
  const params = new URLSearchParams(url.search);
  const c = params.get("c");
  
  const n = params.get("n");
  const router = useRouter();
  const [category, setCategory] = useState(c);
  const [appeal, setAppeal] = useState(n);

  const changeCategory = (selectedCategory) => {
    setCategory(selectedCategory);
    router.push(`/products/?c=${selectedCategory.toLowerCase()}&n=${appeal}`);
  };
  

  const sortProducts = (order) => {
    sortCategoryOrder(order, category);
  };

  useEffect(() => {
    getByAppeal(appeal);
  }, [appeal]);

  useEffect(() => {
    getProductsByCategory(category);
  }, [c, category]);
  return (
    <div className="pt-[70px] container">
      <section className="my-8">
        <Tabs defaultValue={appeal}>
          <section className="flex flex-wrap gap-4 items-center justify-between">
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

            <Select
              onValueChange={(e) => {
                sortProducts(e);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue
                  placeholder="Sort by"
                  onChange={(e) => {
                    sortProducts(e);
                  }}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="ascend">Ascend</SelectItem>
                  <SelectItem value="descend">Descend</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </section>
          <TabsContent value="men">
            {loadingAppeal ? (
              <AnimatedLoader />
            ) : (
              <AppealCategories
                appealProducts={appealProducts}
                changeCategory={changeCategory}
                selectedCategory={category}
              />
            )}
          </TabsContent>
          <TabsContent value="women">
            {loadingAppeal ? (
              <AnimatedLoader />
            ) : (
              <AppealCategories
                appealProducts={appealProducts}
                changeCategory={changeCategory}
                selectedCategory={category}
              />
            )}
          </TabsContent>
          <TabsContent value="unisex">
            {loadingAppeal ? (
              <AnimatedLoader />
            ) : (
              <AppealCategories
                appealProducts={appealProducts}
                changeCategory={changeCategory}
                selectedCategory={category}
              />
            )}
          </TabsContent>
        </Tabs>
      </section>
      <h1 className="lbd-h1 text-center capitalize mb-4">
        Products in {category}
      </h1>
      <section>
        {loadingCategoryProducts ? (
          <Loader />
        ) : (
          <section>
            {categoryProducts?.length > 0 ? (
              <section className="grid categories-grid sm:grid-cols-3 gap-4">
                {categoryProducts?.map((product) => (
                  <ProductCard product={product} key={product._id}/>
                ))}
              </section>
            ) : (
              <ItemNotFound text={"No result!"} />
            )}
          </section>
        )}
        <section>
          {categoryProducts?.hasPreviousPage && <ArrowLeft />}
          {categoryProducts?.hasNextPage && <ArrowLeft />}
        </section>
      </section>
    </div>
  );
}

const AppealCategories = ({
  appealProducts,
  selectedCategory,
  changeCategory,
}) => {
  return (
    <section className="flex gap-4 my-4 overflow-x-scroll categories-scroll">
      {appealProducts?.map((category, index) => (
        <div
        onClick={() => {
          changeCategory(category.name);
        }}
          key={index}
          className={`bg-white px-4 py-2 flex gap-3 rounded-full items-center hover:bg-gray-50 transition-all cursor-pointer ${
            selectedCategory.toLowerCase() == category.name.toLowerCase()
              ? "border-2 border-black"
              : ""
          }`}
        >
          <div
            className="border w-[24px] h-[24px] rounded-full bg-gray-50"
            
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h3 className="line-clamp-1">{category.name}</h3>
        </div>
      ))}
    </section>
  );
};
