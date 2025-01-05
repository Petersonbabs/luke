import { Star, User } from "lucide-react";
import Image from "next/image";

export default function ReviewCard({review}) {
  return (
    <section className="review-card flex gap-4 border p-4 border-x-0 border-b-1 border-t-0">
      <div className="left flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#eee]">
        {
            review.userImage ?
            <Image src={review.userImage}/> :
            <User className="text-[#666]"/>
        }
      </div>
      <div className="right flex flex-col gap-2 ">
        <div className="flex items-center gap-3">
          <h3>{review.userName}.</h3>
          <span className="text-[#999]">{review.date}</span>
        </div>
        <div className="flex">
            <Star size={16}/>
            <Star size={16}/>
            <Star size={16}/>
            <Star size={16}/>
            <Star size={16}/>
        </div>
        <p>{review.reviewText}</p>
      </div>
    </section>
  );
}
