import MainHeader from "@/components/layouts/Headers/Header";

export default function PagesLayout({ children }) {
  return (
    <section>
      <MainHeader />
      <section>{children}</section>
    </section>
  );
}
