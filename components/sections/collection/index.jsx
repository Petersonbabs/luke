import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import KaftanImage from "@/public/illustrations/kaftan.png"
import ManCloth2 from "@/public/illustrations/cloth-2.png"
import Trendy from "@/public/illustrations/trendy.png"
import ManSitting from "@/public/illustrations/man-sitting-transparent.png"
import "./CollectionStyle.css";
import Image from "next/image";

const CollectionsIndex = () => {
  return (
    <section className="collection">
      <section className="container">
        <div className="header">
          <Tabs defaultValue="men">
            <div className="flex items-center justify-between">
              <h2 className="lbd-sub-text">
                Unlock the Magic of Our Collection
              </h2>
              <TabsList>
                <TabsTrigger value="men">Men</TabsTrigger>
                <TabsTrigger value="women">Women</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="men">
                <section className="content grid md:grid-cols-2 lg:grid-cols-4">
                    <div className="collection-img">
                        <Image src={KaftanImage} alt="Kaftan Image" width={100} height={100} />
                        <h2 className="collection-name">Kaftan</h2>
                    </div>
                    <div className="collection-img">
                        <Image src={ManCloth2} alt="Kaftan Image" width={100} height={100} />
                        <h2 className="collection-name">Boubou</h2>
                    </div>
                    <div className="collection-img">
                        <Image src={Trendy} alt="Kaftan Image" width={100} height={100} />
                        <h2 className="collection-name">Trendy</h2>
                    </div>
                    <div className="collection-img">
                        <Image src={ManSitting} alt="Kaftan Image" width={100} height={100} />
                        <h2 className="collection-name">Chinos</h2>
                    </div>
                </section>
            </TabsContent>
            <TabsContent value="women">
            <section className="content grid md:grid-cols-2 lg:grid-cols-3">
                    <div className="collection-img">
                        <Image src={KaftanImage} alt="Kaftan Image" width={100} height={100} />
                        <h2 className="collection-name">Kaftan</h2>
                    </div>
                    <div className="collection-img">
                        <Image src={KaftanImage} alt="Kaftan Image" width={100} height={100} />
                        <h2 className="collection-name">Kaftan</h2>
                    </div>
                    <div className="collection-img">
                        <Image src={KaftanImage} alt="Kaftan Image" width={100} height={100} />
                        <h2 className="collection-name">Kaftan</h2>
                    </div>
                </section>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </section>
  );
};

export default CollectionsIndex;
