import { useCartContext } from "@/context/CartContext";
import CartCard from "./CartCard";
import Loader from "@/components/common/Loader";
import ItemNotFound from "@/components/common/ItemNotFound";

export default function CartList({ custom, cartItems }) {
  const { loadingCart } = useCartContext();
  return (
    <section className="flex-1">
      {loadingCart ? (
        <Loader />
      ) : (
        <>
          {cartItems?.items?.length > 0 ? (
            <section className="flex flex-col gap-4">
              {cartItems?.items.map((item, key) => (
                <CartCard item={item} key={key} custom={custom} />
              ))}
            </section>
          ) : (
            <div className="bg-gray-50 flex-1 h-48 flex p-8  items-center justify-center">
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          )}
        </>
      )}
    </section>
  );
}
