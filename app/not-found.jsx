import MainHeader from "@/components/layouts/Headers/Header";
import Error from "@/public/illustrations/404-error.png"
import Image from "next/image";
import Link from "next/link";

const Notfound = () => {
  return (
    <section className="h-screen">
      <MainHeader />
      <div className="flex items-center h-full">
        <div className="text-center w-[90vw] max-w-[400px]  mx-auto my-auto">
        <Image src={Error} width={200} height={200} className="mx-auto"/>
        <h1 className="text-xl">Sorry, there's nothing here</h1>
        <Link href={'/'} className="dnl-btn text-xl z-50 block w-[90vw] max-w-[400px] mx-auto bg-white text-black cursor-pointer hover:bg-[#f0f0f0] transition-all text-center py-4 mt-4">Go Home</Link>
        </div>
      </div>
    </section>
  );
};

export default Notfound;
