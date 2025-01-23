"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "./CollectionStyle.css";
import { useProductsContext } from "@/context/ProductContext";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import Loader from "@/components/common/Loader";
import ItemNotFound from "@/components/common/ItemNotFound";
import { useRouter } from "next/navigation";

const CollectionsIndex = () => {
  const { getByAppeal, loadingAppeal, appealProducts } = useProductsContext();
  const [appeal, setAppeal] = useState("men");
  const toggleAppeal = (appealName) => {
    setAppeal(appealName);
  };
   const router = useRouter()
  const handleToCategory = (category)=>{
    router.push(`/products/?c=${category}&n=${appeal}`)
  }
  useEffect(() => {
    getByAppeal(appeal);
  }, [appeal]);
  return (
    <section className="collection">
      <section className="container">
        <div className="header">
          <Tabs defaultValue="men">
            <div className="flex flex-col gap-3 md:flex-row items-center justify-between">
              <h2 className="lbd-sub-text">
                Unlock the Magic of Our Collection
              </h2>
              <TabsList>
                <TabsTrigger
                  value="men"
                  onClick={(e) => {
                    toggleAppeal("men");
                  }}
                >
                  Men
                </TabsTrigger>
                <TabsTrigger
                  value="women"
                  onClick={(e) => {
                    toggleAppeal("women");
                  }}
                >
                  Women
                </TabsTrigger>
                <TabsTrigger
                  value="unisex"
                  onClick={(e) => {
                    toggleAppeal("unisex");
                  }}
                >
                  Unisex
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="men">
              {loadingAppeal ? (
                <Loader />
              ) : (
                <>
                  {appealProducts?.length > 0 && appeal == "men"  ? (
                    <section className="content gap-2 grid md:grid-cols-2 lg:grid-cols-4">
                      {appealProducts?.slice(0, 4).map((category) => (
                        <div className="collection-img" key={category._id} onClick={()=>{
                          handleToCategory(category.name.toLowerCase())
                        }}>
                          <img
                            src={category.image}
                            alt={category.name}
                            width={100}
                            height={100}
                          />
                          <h2 className="collection-name">{category.name}</h2>
                        </div>
                      ))}
                    </section>
                  ) : (
                    <ItemNotFound text={`No ${appeal} collection found!`}/>
                  )}
                </>
              )}
            </TabsContent>
            <TabsContent value="women">
              {loadingAppeal ? (
                <Loader />
              ) : (
                <>
                  {appealProducts?.length > 0 && appeal == "women" ? (
                    <section className="content gap-2 grid md:grid-cols-2 lg:grid-cols-4">
                    {appealProducts?.slice(0, 4).map((category) => (
                      <div className="collection-img" key={category._id} onClick={()=>{
                        handleToCategory(category.name.toLowerCase())
                      }}>
                        <img
                          src={category.image}
                          alt={category.name}
                          width={100}
                          height={100}
                        />
                        <h2 className="collection-name">{category.name}</h2>
                      </div>
                    ))}
                  </section>
                  ) : (
                    <ItemNotFound text={`No ${appeal} collection found!`}/>
                  )}
                </>
              )}
            </TabsContent>
            <TabsContent value="unisex">
              {loadingAppeal ? (
                <Loader />
              ) : (
                <>
                  {appealProducts?.length > 0 && appeal == "unisex" ? (
                    <section className="content gap-2 grid md:grid-cols-2 lg:grid-cols-4">
                    {appealProducts?.slice(0, 4).map((category) => (
                      <div className="collection-img" key={category._id} onClick={()=>{
                        handleToCategory(category.name.toLowerCase())
                      }}>
                        <img
                          src={category.image}
                          alt={category.name}
                          width={100}
                          height={100}
                        />
                        <h2 className="collection-name">{category.name}</h2>
                      </div>
                    ))}
                  </section>
                  ) : (
                    <ItemNotFound text={`No ${appeal} collection found!`}/>
                  )}
                </>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </section>
  );
};

export default CollectionsIndex;
