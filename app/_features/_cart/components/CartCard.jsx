"use client"
import { useCartContext } from "@/context/CartContext";
import { ImageIcon, Loader2, Minus, Plus, Trash } from "lucide-react";
import { useState } from "react";

const CartCard = ({ item, custom }) => {
  const [quantity, setQuantity] = useState(item?.quantity)
  const {increaseDecreaseCartItem, removeFromCart, removingCartItem, operatingCartItem  } = useCartContext()
const itemDetail = {color: item?.color, size: item?.size, quantity: 1} 
  const getColorImage  = (color)=>{
    const chosencolor = item.productId.colors.find(item =>item.color == color)
    return chosencolor.image
  }
  return (
    <div className="flex p-4 gap-4 items-center flex-wrap w-full  rounded-md border">
      <div className="left w-[30%] bg-d9 flex justify-center items-center">
        {item.color ? (
          <img
            src={getColorImage(item.color)}
            alt={item.title + " image"}
            width={200}
            height={150}
            className="h-[130px] object-cover"
          />
        ) : (
          item.productId.mainImage ?
          <img
            src={item.productId.mainImage}
            alt={item.title + " image"}
            width={200}
            height={150}
            className="h-[130px] object-cover"
          /> :
          <ImageIcon />
        )}
      </div>
      <div className="right flex-1 flex flex-col justify-between h-full">
        <div className="space-y-1">
          <h3 className="text-xl ">{item.productId.name}</h3>
            <div className="flex items-center space-x-2">
            <span className="text-lg">
              ₦{item?.total.toLocaleString()} 
            </span>
            <span className="text-[10px]">( ₦{item.price.toLocaleString()} * {item.quantity} )</span>
            </div>
          <div className="flex gap-4 flex-wrap items-center text-sm">
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
          <div className="flex justify-between w-[100% ] items-center mt-4">
            {
              removingCartItem ==  item?._id ?
              <Loader2 className="animate-spin w-4" /> :
              <Trash size={16} onClick={()=>{
                removeFromCart(item?.productId._id, itemDetail, item?._id)
              }}/>
            }
            <div className="flex gap-4 bg-white py-2 px-4 items-center">
              <button onClick={()=>{
                increaseDecreaseCartItem('decrease', item?.productId?._id, item._id, itemDetail)
              }}>
                <Minus className="w-4"/>
              </button>
              <div>
                {
                  operatingCartItem == item?._id ?
                  <Loader2 className="animate-spin m-auto w-4" /> :
                  <span>{item?.quantity}</span>
                }
              </div>
              <button onClick={()=>{
                increaseDecreaseCartItem('increase', item?.productId?._id, item._id, itemDetail)
              }}>
                <Plus className="w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
