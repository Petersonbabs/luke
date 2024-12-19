import * as React from "react"

import ProductsData from "@/data/products.json"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import NewInCard from "./NewInCard"

export default function NewinList() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className=" my-8 mx-auto"
    >
      <CarouselContent>
        {ProductsData.slice(0, 5).map((product, index) => (
          <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <NewInCard index={index} product={product}/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='left-0 md:left-[-1rem]'></CarouselPrevious>
      <CarouselNext className="right-0 md:right-[-1rem]"/>
    </Carousel>
  )
}
