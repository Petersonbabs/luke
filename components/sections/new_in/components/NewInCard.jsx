import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import cloth1 from "@/public/illustrations/cloth-1.png";
import { Heart } from "lucide-react";

const NewInCard = ({ product, index }) => {
  return (
    <div className="">
      <Card className="rounded-none pt-4 shadow-none border-none ">
        <CardContent className="relative">
            <button className="absolute right-6 top-2 font-thin">
                <Heart />
            </button>
          <div className="h-[300px]">
            <Image
              src={cloth1}
              alt="New in featured image"
              className="h-full object-cover "
            />
          </div>
          <div className="content py-4">
            <h3 className="text-lg">{product?.name}</h3>
            <div className="flex gap-8 justify-between  items-center">
              <div>
                <span className="text-gray-500 text-sm">{product?.category}</span>
              </div>
              <div className="space-x-3">
                <span className="line-through decoration-red-500">
                  ₦{product?.price.toLocaleString()}
                </span>
                <span>₦{product?.discountedPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>
          <button className="block border w-full py-2 bg-[#FBFBFB]">Add to cart</button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewInCard;
