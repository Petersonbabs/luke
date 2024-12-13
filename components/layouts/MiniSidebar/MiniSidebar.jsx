import HeaderData from "@/data/layouts/mainheader";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const MiniSidebar = ({ setOpen }) => {
  const toggleOpen = () => {
    setOpen(false); // Close the Sheet
  };

  return (
    <section className="my-8 grid gap-4">
      {HeaderData?.menu?.map((item, key) => (
        <Link
          href={item.href}
          key={key}
          onClick={toggleOpen}
          className="flex justify-between items-center w-full link-text"
        >
          <span>{item.label}</span>
          <ChevronRight className="font-thin" />
        </Link>
      ))}
    </section>
  );
};

export default MiniSidebar;
