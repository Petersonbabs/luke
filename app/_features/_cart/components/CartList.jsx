import { useCartContext } from "@/context/CartContext";
import CartCard from "./CartCard";
import Loader from "@/components/common/Loader";
import ItemNotFound from "@/components/common/ItemNotFound";

export default function CartList({ custom, cartItems }) {
  const { loadingCart } = useCartContext();
  return (
    <section>
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
            <ItemNotFound text={"You have a empty cart"} />
          )}
        </>
      )}
    </section>
  );
}
