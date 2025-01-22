import OrderData from "@/data/order.json";
import OrderCard from "./OrderCard";

export default function OrderList({ custom }) {
 
  return (
    <section>
      <section className="flex flex-col gap-4">
        {OrderData.items.map((item) => (
          <OrderCard item={item} key={item.id} custom={custom} />
        ))}
      </section>
    </section>
  );
}
