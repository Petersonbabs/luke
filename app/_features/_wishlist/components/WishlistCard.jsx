import { AnimatedLoader } from "@/components/common/Loader";
import { useWishListContext } from "@/context/WishListContext";
import { Trash2 } from "lucide-react";

const WishlistCard = ({ item }) => {
  const { removingFromWishList, removeFromWishList } = useWishListContext();
  return (
    <div className="p-4 bg-white space-y-3 relative">
      <button
        className="absolute right-8 text-white flex items-center justify-center bg-[#00000084] rounded-full top-10 font-thin w-8 h-8 hover:bg-black transition-all"
        onClick={() => {
            removeFromWishList(item._id);
        }}
      >
        {removingFromWishList == item._id ? (
          <AnimatedLoader className="text-white size-4" />
        ) : (
          <Trash2 className="w-5 text-white size-4" />
        )}
      </button>
      <div className="h-[200px] border">
        <img
          src={item.mainImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h2>{item.name}</h2>
        <span>₦{item.price.toLocaleString()}</span>
      </div>
      <a className="btn black-btn btn-full text-center" href={`/products/${item?._id}`}>View Product</a>
    </div>
  );
};

export default WishlistCard;
