import CartData from "@/data/cart.json";
import CartCard from "./CartCard";

export default function CartList() {
  return (
    <section>
      <section className="flex flex-col gap-4">
        {CartData.items.map((item) => (
          <CartCard item={item} key={item.id} />
        ))}
      </section>
    </section>
  );
}
