"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export function AutoplayCarousel({ data, content }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className={`w-full h-[97vh]  `}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-full">
        {data.slides?.map((slide, index) => (
          <CarouselItem
            key={index}
            className={`${
              slide.label == "slide 1"
                ? "bg-transparent"
                : slide.label == "slide 2"
                ? "bg-[#fdd0d0]"
                : "bg-[#baffd4]"
            } relative h-[97vh]`}
          >
            {/* TOP TEXT */}
            <section className="absolute top-[45%] left-[50%] translate-x-[-50%] lg:translate-x-0 text-center lg:text-start bg-[#00000070] lg:bg-transparent lg:text-black p-2 text-white lg:top-[150px] lg:left-[5%] w-[90vw] max-w-[400px]">
              <h1 className="text-2xl lg:text-3xl leading-6 mb-4">{slide.topTexts.heading}</h1>
              <span className="font-[100] text-[20px]">
                {slide.topTexts.subHeading}
              </span>
            </section>
            {/* END OF TOP TEXT */}
            {/* IMAGE */}
            <div className="h-full">
              <img
                src={slide.background_img}
                alt={slide.label}
                className="w-[100%] h-[100%] object-cover lg:object-contain m-auto"
              />
            </div>
            {/* END OF IMAGE */}

            {/* ACTION BUTTON */}
            <button>hihihiihih</button>
            <Link href={data.action.href} className="text-xl z-50 block w-[60vw] max-w-[400px] absolute bottom-[10%] bg-white text-black left-[50%] translate-x-[-50%] cursor-pointer hover:bg-[#f0f0f0] transition-all text-center py-4 border">{data.action.content}</Link>
            {/* END OF ACTION BUTTON */}
            <p className="hidden lg:block absolute lbd-sub-text font-semibold w-[200px] bottom-[10%] right-8">
              {slide.bottomText}
            </p>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselNext />
        <CarouselPrevious /> */}
    </Carousel>
  );
}
