import ReviewCard from "./ReviewCard";
import { Input } from "@/components/ui/input";
import { ImageIcon, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import "../styles/review.css";
import { useReviewContext } from "@/context/ReviewContext";
import { useEffect, useState } from "react";
import { AnimatedLoader } from "@/components/common/Loader";

export default function ReviewsList({ id }) {
  const { productReviews, getProductReviews, addingReview, addReview } = useReviewContext();
  const [formData, setformData] = useState({
    rating: 0,
    review: "",
  });
  const handleInput = (name, value)=>{
    setformData(prev => (
      {...prev, [name]:value}
    ))
  }
  useEffect(() => {
    getProductReviews(id);
  }, []);

  return (
    <section className="flex flex-col gap-4 md:flex-row justify-between">
      <section>
        {productReviews?.map((review, key) => (
          <ReviewCard review={review} key={key} />
        ))}
      </section>
      {/* POST REVIEW */}
      <section className="sticky top-16">
        <div className="mb-4 bg-d9 p-8 rounded-lg flex w-full flex-col items-center gap-3 ">
          <h3 className="text-3xl">How is your order?</h3>
          <p>please take a moment to rate and review.</p>
          <div className="flex gap-4 items-center">
            {[1, 2, 3, 4, 5].map((rating, index) => (
              <Star className={`${formData.rating >= rating ? " fill-black" : ""}`} onClick={()=>{handleInput("rating", rating)}}/>
            ))}
          </div>
          <div className=" flex bg-white rounded-lg items-center border w-full">
            <Input
              className="border-none  focus-visible:ring-0 flex-1 h-[50px]"
              placeholder="Type review"
              onChange={(e)=>{handleInput("review", e.target.value)}}
            />
            <div className="items-center hidden w-[30px]  relative cursor-pointer h-[30px]">
              <ImageIcon className="absolute inset-0 cursor-pointer" />
              <Input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                
              />
            </div>
          </div>
        </div>
        <Button className="bg-black w-full p-6 hover:bg-[#666] flex items-center" onClick={()=>{addReview(formData, id)}} disabled={addingReview}>
          {
            addingReview ?
            <span>Sending...</span> :
            <span>Submit Review</span>
          }
        </Button>
      </section>
    </section>
  );
}
