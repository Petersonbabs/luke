import { ImageIcon} from "lucide-react";
import Image from "next/image";

const OrderCard = ({ item}) => {
  return (
    <div className="flex p-4 gap-4 items-center flex-wrap w-full  rounded-md border">
      <div className="left w-[30%] bg-d9 flex justify-center items-center">
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
        <div className="space-y-4">
          <h3 className="text-xl">{item.title}</h3>
          <div className="flex gap-4 w-full justify-between flex-wrap items-center text-sm">
            <span>
              Color:{" "}
              <span className={`text-${item.color.toLowerCase()}-500 `}>
                {item?.color}
              </span>
            </span>
            <span>
              Size: <span className="border py-1 px-3 text-sm">{item?.size.toLowerCase()}</span>
            </span>
            <span>
              Qty: {item?.quantity}
            </span>
          </div>

          <span className="text-lg">
              ₦{item?.price.toLocaleString()}
            </span>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
