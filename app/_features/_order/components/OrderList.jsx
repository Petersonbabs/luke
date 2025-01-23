import OrderData from "@/data/order.json";
import OrderCard from "./OrderCard";

export default function OrderList({userOrders, custom }) {
 
  return (
    <section>
      <section className="flex flex-col gap-4">
        {userOrders.map((item) => (
          <OrderCard item={item} key={item._id} custom={custom} />
        ))}
      </section>
    </section>
  );
}
