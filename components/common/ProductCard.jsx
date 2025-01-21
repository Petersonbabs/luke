import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="border bg-white">
      <Card className="rounded-none mt-4 pt-4 shadow-none border-none w-[270px]">
        <CardContent className="relative">
          <button className="absolute right-2 top-2 font-thin">
            <Heart />
          </button>
          <a href={`/products/${product._id}`} className="p-1">
            <div className="h-[300px]">
              <img
                src={product?.mainImage}
                alt="New in featured image"
                className="h-full w-full object-cover "
              />
            </div>
            <div className="content py-4">
              <h3 className="text-lg">{product?.name}</h3>
              <div className="flex-col gap-8 justify-between  items-center">
                <div>
                  <span className="text-gray-500 text-sm">
                    {product?.category}
                  </span>
                </div>
                <div className="space-x-3">
                  <span className="line-through text-gray-600 text-sm decoration-red-500">
                    ₦{product?.price?.toLocaleString()}
                  </span>
                  <span>₦{product?.discountedPrice?.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </a>
          <a
            href={`/products/${product._id}`}
            className="block text-center hover:bg-gray-100 cursor-pointer border w-full py-2 bg-[#FBFBFB]"
          >
            View
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
