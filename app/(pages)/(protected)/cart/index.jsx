import CartList from "@/app/_features/_cart/components/CartList";
import OrderSummary from "@/app/_features/_cart/components/OrderSummary";

const CartPage = () => {
  return (
    <section className="pt-[70px] container">
      <h2 className="lbd-h1">My Bag</h2>
      <section className="mt-8 flex flex-col md:flex-row gap-8 justify-between">
        <CartList />
        <OrderSummary/>
      </section>
    </section>
  );
};

export default CartPage;
