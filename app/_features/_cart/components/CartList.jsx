import CartCard from "./CartCard";

export default function CartList({custom, cartItems}) {
  return (
    <section>
      <section className="flex flex-col gap-4">
        {cartItems?.items.map((item, key) => (
          <CartCard item={item} key={key} custom={custom}/>
        ))}
      </section>
    </section>
  );
}
