import { useCartContext } from "@/context/CartContext";
import { ImageIcon, Trash } from "lucide-react";
import { useState } from "react";

const CartCard = ({ item, custom }) => {
  const [quantity, setQuantity] = useState(item?.quantity)
  const {increaseDecreaseCartItem, removeFromCart} = useCartContext()
  console.log(item);
  return (
    <div className="flex p-4 gap-4 items-center flex-wrap w-full  rounded-md border">
      <div className="left w-[30%] bg-d9 flex justify-center items-center">
        {item.productId.mainImage ? (
          <img
            src={item.productId.mainImage}
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
          <h3 className="text-xl">{item.productId.name}</h3>
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
        <div className={custom}>
          <div className="flex justify-between items-center mt-4">
            <Trash size={16} onClick={()=>{
              removeFromCart("678a58f32d64ef7ace96d323")
            }}/>
            <div className="flex gap-4 bg-white py-2 px-4 items-center">
              <button onClick={()=>{
                increaseDecreaseCartItem('decrease', item?.productId?._id, item._id)
              }}>-</button>
              <span>{item?.quantity}</span>
              <button onClick={()=>{
                increaseDecreaseCartItem('increase', item?.productId?._id, item._id)
              }}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
