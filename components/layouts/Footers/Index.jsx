"use client";
import Link from "next/link";
import HeaderData from "@/data/layouts/mainheader";
import "../Headers/HeaderStyle.css";
import { usePathname } from "next/navigation";

const FooterIndex = () => {
  const { logo } = HeaderData;
  const profilePage = usePathname() == "/profile";

  return (
    <footer className={`pt-16 pb-12 ${profilePage ? "hidden" : ""}`}>
      <section className="container grid gap-6 sm:flex-row sm:grid-cols-2 md:grid-cols-3 justify-between">
        <section>
          <Link className="logo block " href={"/"}>
            <img src={logo} alt="Luxe By Dnbl Logo" className="" />
          </Link>
          <h3 className="text-2xl">Newsletter</h3>
          <p>stay in touch with latest updates from DNBL.</p>
          <form className="flex items-center gap-2 sm:gap-4 mt-4 flex-wrap">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="h-full p-3 block border"
            />
            <button className="btn bg-black text-white block">Subscribe</button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl">Social Links</h2>
          <div className="flex gap-4 flex-wrap items-center">
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
            <Link
              href={
                "https://www.threads.net/@luxeby_dnbl?invite=1"
              }
              className="border w-8 h-8 flex items-center justify-center rounded-full text-sm hover:bg-black hover:text-white transition-all"
            >
              <i class="fa-brands fa-threads"></i>
            </Link>
          </div>
        </section>

        {/* important links */}
        <section className="space-y-4 md:text-end">
          <h3 className="text-2xl">Important Links</h3>
          <ul className="space-y-3 ">
            <li>
              <Link href={"/about"}>About Us</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact Us</Link>
            </li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
          <section></section>
        </section>
      </section>
    </footer>
  );
};

export default FooterIndex;
