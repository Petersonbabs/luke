import { Star, User } from "lucide-react";
import Image from "next/image";

export default function ReviewCard({review}) {
  return (
    <section className="review-card flex gap-4 border p-4 flex-wrap border-x-0 border-b-1 border-t-0">
      <div className="left flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#eee]">
        {
            review.userImage ?
            <Image src={review.userImage}/> :
            <User className="text-[#666]"/>
        }
      </div>
      <div className="right flex flex-col gap-2 ">
        <div className="flex items-center gap-3">
          <h3>{review.email}.</h3>
          <span className="text-[#999] hidden">03-12-2024</span>
        </div>
        <div className="flex gap-4 items-center">
            {[1, 2, 3, 4, 5].map((rating, index) => (
              <Star className={`${review.rating >= rating ? " fill-black" : ""} size-4`} onClick={()=>{handleInput("rating", rating)}}/>
            ))}
          </div>
        <p>{review.review}</p>
      </div>
    </section>
  );
}
