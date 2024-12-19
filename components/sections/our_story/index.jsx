import Image from "next/image";
import Guarantee1 from "@/public/brand/guarantee-1.png";
import Guarantee2 from "@/public/brand/guarantee-2.png";
import Guarantee3 from "@/public/brand/guarantee-3.png";

const OurStoryIndex = () => {
  return (
    <section className="bg-white py-12 space-y-12">
      <div className="text-center w-[90vw] m-auto max-w-[1000px] space-y-4">
        <h2 className="lbd-sub-text">Our Story</h2>
        <p className="font-thin">
          luxe by dnbl envisions a world where Nigerian elegance and heritage
          are celebrated globally through premium fashion. We aim to bridge
          cultures with exquisite products embodying Nigeria's vibrant
          traditions and sophisticated craftsmanship. Our goal is to inspire
          pride and connection among the Nigerian diaspora and fashion
          enthusiasts worldwide, making our brand synonymous with quality,
          community, and cultural excellence.
        </p>
        <button className="btn btn-full btn-d6">learn more</button>
      </div>
      <div className="container text-center space-y-4">
        <h2 className="lbd-sub-text"> We Guarantee You</h2>
        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div  className="h-[400px]">
            <div className="h-[70%] ">
              <Image src={Guarantee1} alt="Guarantee 1" className="h-full object-cover"/>
            </div>
            <span className="bg-d6 py-2 block">01</span>
            <p className="capitalize bg-d8 py-4">Wide range of styles</p>
          </div>
          <div className="h-[400px] ">
            <div className="h-[70%] flex items-center">
              <Image src={Guarantee2} alt="Guarantee 2" className="w-[60%] m-auto object-cover"/>
            </div>
            <span className="bg-d6 py-2 block">02</span>
            <p className="capitalize bg-d8 py-4">Uncompromised quality</p>
          </div>
          <div className="h-[400px] ">
            <div className="h-[70%]">
              <Image src={Guarantee3} alt="Guarantee 3" className="h-full object-cover"/>
            </div>
            <span className="bg-d6 py-2 block">03</span>
            <p className="capitalize bg-d8 py-4">exceptional customer service</p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default OurStoryIndex;
