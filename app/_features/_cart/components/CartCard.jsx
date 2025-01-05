import { ImageIcon, Trash } from "lucide-react";
import Image from "next/image";

const CartCard = ({ item }) => {
  return (
    <div className="flex p-4 gap-4 items-center flex-wrap w-full  rounded-md border">
      <div className="left w-[30%] bg-d9">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title + " image"}
            width={200}
            height={150}
            className="h-[130px] object-cover"
          />
        ) : (
          <ImageIcon />
        )}
      </div>
      <div className="right flex flex-col justify-between h-full">
        <div className="soace-y-3">
          <h3 className="text-xl">{item.title}</h3>
          <div className="flex gap-4 flex-wrap items-center text-sm">
            <span className="text-lg">
              ₦{item?.price.toLocaleString()}
            </span>
            <span>
              Color:{" "}
              <span className={`text-${item.color.toLowerCase()}-500 `}>
                {item?.color}
              </span>
            </span>
            <span>
              Size: <span className="border py-1 px-3 text-sm">{item?.size.toLowerCase()}</span>
            </span>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mt-4">
            <Trash size={16} />
            <div className="flex gap-4 bg-white py-2 px-4 items-center">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
