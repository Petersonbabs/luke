"use client"
import Link from "next/link";
import HeaderData from "@/data/layouts/mainheader";
import "../Headers/HeaderStyle.css"
import { usePathname } from "next/navigation";

const FooterIndex = () => {
  const { logo } = HeaderData;
  const profilePage = usePathname() == "/profile"

  return (
    <footer className={`pt-16 pb-12 ${profilePage ? "hidden" : ""}`}>
      <section className="container flex flex-col gap-4 sm:flex-row sm:items-start justify-between">
        <section >
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

        {/* important links */}
        <section className="space-y-4 sm:text-end">
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
