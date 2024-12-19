import Link from "next/link";
import HeaderData from "@/data/layouts/mainheader";
import "../Headers/HeaderStyle.css"

const FooterIndex = () => {
  const { logo } = HeaderData;
  return (
    <footer className="pt-16 pb-12">
      <section className="container flex flex-col gap-4 items-center sm:flex-row sm:items-start justify-between">
        <section>
          <Link className="logo block translate-x-[-30px]" href={"/"}>
            <img src={logo} alt="Luxe By Dnbl Logo" className="" />
          </Link>
          <h3 className="text-2xl">Newsletter</h3>
          <p>stay in touch with latest updates from DNBL.</p>
          <form className="flex items-center gap-4 mt-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="h-full p-3 block border"
            />
            <button className="btn bg-black text-white">Subscribe</button>
          </form>
        </section>

        {/* important links */}
        <section className="space-y-4">
            <h3 className="text-2xl">Important Links</h3>
          <ul className="text-end space-y-3 ">
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
