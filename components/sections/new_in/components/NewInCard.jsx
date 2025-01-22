import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { AnimatedLoader } from "@/components/common/Loader";
import { useWishListContext } from "@/context/WishListContext";

const NewInCard = ({ product }) => {
  const {addToWishList, addingWishList} = useWishListContext()
  return (
    <div className="">
      <Card className="rounded-none pt-4 shadow-none border-none ">
        <CardContent className="relative">
          <button className="absolute right-8 text-white flex items-center justify-center bg-[#00000084] rounded-full top-8 font-thin w-10 h-10 hover:bg-black transition-all" onClick={()=>{
            addToWishList(product._id)
          }}>
            {
            addingWishList == product._id ?
              <AnimatedLoader className="text-white" /> :
            <Heart className="w-5 text-white" />
            }
          </button>
          <a href={`/products/${product._id}`}>
            <div className="h-[300px]">
              <img
                src={product?.mainImage}
                alt="New in featured image"
                className="h-full object-cover "
              />
            </div>
            <div className="content py-4">
              <h3 className="text-lg">{product?.name}</h3>
              <div className="flex gap-8 justify-between  items-center">
                <div>
                  <span className="text-gray-500 text-sm">
                    {product?.category}
                  </span>
                </div>
                <div className="space-x-3">
                  {product?.showOldPrice && product?.oldPrice && (
                    <span className="line-through decoration-red-500">
                      ₦{product.oldPrice?.toLocaleString()}
                    </span>
                  )}
                  <span>₦{product?.price?.toLocaleString()}</span>
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

export default NewInCard;
