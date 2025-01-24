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
      <div className="flex gap-4 flex-wrap items-center mt-16">
            <Link
              href={
                "https://www.facebook.com/share/1DpEPouYJv/?mibextid=wwXIfr"
              }
              className="border w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-black hover:text-white transition-all"
            >
              <i class="fa-brands fa-facebook"></i>
            </Link>
            <Link
              href={
                "https://www.tiktok.com/@luxeby_dnbl?_t=ZT-8slCi5PUzwk&_r=1"
              }
              className="border w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-black hover:text-white transition-all"
            >
              <i class="fa-brands fa-tiktok"></i>
            </Link>
            <Link
              href={
                "https://x.com/luxeby_dnbl?s=11&t=FHcqg1t8XJzuJ8YP9IeT4g"
              }
              className="border w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-black hover:text-white transition-all"
            >
              <i class="fa-brands fa-x-twitter"></i>
            </Link>
            <Link
              href={
                "https://www.instagram.com/luxeby_dnbl/profilecard/?igsh=Ym8yaDBxZXZ0emJj"
              }
              className="border w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-black hover:text-white transition-all"
            >
              <i class="fa-brands fa-instagram"></i>
            </Link>
            <Link
              href={
                "https://wa.me/message/5FQCAVCR2E7HK1"
              }
              className="border w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-black hover:text-white transition-all"
            >
              <i class="fa-brands fa-whatsapp"></i>
            </Link>
          </div>
    </section>
  );
};

export default MiniSidebar;
