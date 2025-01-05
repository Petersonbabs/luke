import CartData from "@/data/cart.json";
import CartCard from "./CartCard";

export default function CartList({custom}) {
  return (
    <section>
      <section className="flex flex-col gap-4">
        {CartData.items.map((item) => (
          <CartCard item={item} key={item.id} custom={custom}/>
        ))}
      </section>
    </section>
  );
}
