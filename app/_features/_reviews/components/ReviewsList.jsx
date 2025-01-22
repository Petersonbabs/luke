import ReviewsData from "@/data/review.json";
import ReviewCard from "./ReviewCard";
import Image from "next/image";
import ReviewStars from "@/public/icons/stars.png";
import { Input } from "@/components/ui/input";
import { ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import "../styles/review.css"
import { useReviewContext } from "@/context/ReviewContext";
import { useEffect } from "react";

export default function ReviewsList({id}) {
  const {productReviews, getProductReviews} = useReviewContext()
  useEffect(()=>{
    getProductReviews(id)
    console.log(productReviews);
    
  },[])

  return (
    <section className="flex flex-col gap-4 md:flex-row justify-between">
      <section>
        {productReviews?.map((review, key) => (
          <ReviewCard review={review} key={key}/>
        ))}
      </section>
      {/* POST REVIEW */}
      <section className="sticky top-16">
        <div className="mb-4 bg-d9 p-8 rounded-lg flex w-full flex-col items-center gap-3 ">
          <h3 className="text-3xl">How is your order?</h3>
          <p>please take a moment to rate and review.</p>
          <Image src={ReviewStars} alt="Review Stars" width={150}/>
          <div className=" flex bg-white rounded-lg items-center border w-full">
            <Input className="border-none  focus-visible:ring-0 flex-1 h-[50px]" placeholder="Type review"/>
            <div className="items-center w-[30px]  relative cursor-pointer h-[30px]">
              <ImageIcon className="absolute inset-0 cursor-pointer"/>
              <Input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer"/>
            </div>
          </div>
        </div>
        <Button className="bg-black w-full p-6 hover:bg-[#666]">Submit Review</Button>
      </section>
    </section>
  );
}
