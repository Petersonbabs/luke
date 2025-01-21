"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NewInCard from "./NewInCard";
import Link from "next/link";
import { useProductsContext } from "@/context/ProductContext";
import { useEffect } from "react";
import Loader from "@/components/common/Loader";
import ItemNotFound from "@/components/common/ItemNotFound";

export default function NewinList() {
  const { getAllNewIn, newIn, loadingNewin } = useProductsContext();
  useEffect(() => {
    getAllNewIn();
  }, []);
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className=" my-8 mx-auto"
    >
      {!loadingNewin ? (
        <CarouselContent>
          {newIn?.length > 0 ? (
            <>
              {newIn.slice(0, 5).map((product, index) => (
                <CarouselItem
                  key={index}
                  className=" md:basis-1/2 lg:basis-1/3"
                >
                  <NewInCard index={index} product={product.product} />
                </CarouselItem>
              ))}
            </>
          ) : (
            <ItemNotFound text={`No result!`} />
          )}
        </CarouselContent>
      ) : (
        <Loader />
      )}
      <CarouselPrevious className="left-0 md:left-[-1rem]"></CarouselPrevious>
      <CarouselNext className="right-0 md:right-[-1rem]" />
    </Carousel>
  );
}
