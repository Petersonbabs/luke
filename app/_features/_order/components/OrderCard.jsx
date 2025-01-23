import { ImageIcon} from "lucide-react";

const OrderCard = ({ item}) => {
  
  return (
    <div className="flex p-4 gap-4 items-center flex-wrap w-full  rounded-md border">
      <div className="left w-[30%] bg-d9 flex justify-center items-center">
        {item.items[0].productId.mainImage ? (
          <img
            src={item.items[0].productId.mainImage}
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
          <h3 className="text-xl">{item?.items[0].name}</h3>
          <div className="flex gap-4 w-full justify-between flex-wrap items-center text-sm">
            <span>
              Color:{" "}
              <span className={`text-500 `}>
                {item?.items[0].color}
              </span>
            </span>
            <span>
              Size: <span className="border py-1 px-3 text-sm">{item?.items[0].size}</span>
            </span>
            <span>
              Qty: {item?.items[0].quantity}
            </span>
          </div>

          <span className="text-lg">
              ₦{item?.total?.toLocaleString()}
            </span>
        </div>
      </div>
            <span className={`capitalize ${item.status == "pending" ? "bg-orange-500" : item.status == "dispatch" ? "bg-blue-500" : "bg-green-500"} text-white px-2 py-1 text-sm`}>{item.status}</span>
    </div>
  );
};

export default OrderCard;
