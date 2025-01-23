"use client";
import HeaderData from "@/data/layouts/mainheader";
import Link from "next/link";
import "./HeaderStyle.css";
import SheetUI from "../SheetUI/SheetUI";
import { AlignRight, Heart, ShoppingCart, User } from "lucide-react";
import MiniSidebar from "../MiniSidebar/MiniSidebar";
import { useEffect, useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useCartContext } from "@/context/CartContext";
import { useWishListContext } from "@/context/WishListContext";

export default function MainHeader() {
  const { logo, menu, actions } = HeaderData;
  const { user } = useAuthContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const {getUserWishList, userWishList} = useWishListContext()
  const {getUserCart, loadingCart, cartItems} = useCartContext()
  useEffect(()=>{
    if(user){
      getUserCart()
      getUserWishList()
    }
  },[user])
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed ${
        isScrolled ? "bg-white" : "bg-transparent"
      } z-50 w-full p-0`}
    >
      <nav className="container h-[80px] flex justify-between items-center z-50">
        <Link className="logo translate-x-[-30px]" href={"/"}>
          <img src={logo} alt="Luxe By Dnbl Logo" className="" />
        </Link>
        <div className="hidden md:flex gap-4 items-center">
          {menu?.map((item, key) => (
            <Link href={item.href} key={key}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-6 items-center text-sm">
          {actions?.map((item, key) => (
            <Link
              href={`/${item.label.toLowerCase()}`}
              key={key}
              className={`link-text ${
                item.label == "Wishlist" ? "md:block" : "block"
              } `}
            >
              <div dangerouslySetInnerHTML={{ __html: item.icon }} />
            </Link>
          ))}

          <Link href={"/wishlist"} className="relative">
            <Heart />
            {
              userWishList.length > 0 &&
            <span className="absolute top-[-5px] right-[-5px] flex h-5 w-5 text-[12px] bg-black rounded-full justify-center items-center text-white p-[2px]">
              {userWishList.length}
            </span>
            }
          </Link>
          <Link href={"/cart"} className="relative">
            <ShoppingCart />
            {
              cartItems?.items?.length > 0 &&
            <span className="absolute top-[-5px] right-[-5px] flex h-5 w-5 text-[12px] bg-black rounded-full justify-center items-center text-white p-[2px]">
              {cartItems?.items?.length}
            </span>
            }
          </Link>

          {!user ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <User />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem className="hover:bg-black hover:text-white w-full text-center ">
                    <Link href={'/login'} className="m-auto">Login</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-black hover:text-white w-full text-center ">
                    <Link href={'/signup'} className="m-auto">Signup</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Link href={'/profile'}>
              <User />
            </Link>
          )}

          <div className="md:hidden flex items-center">
            <SheetUI
              trigger={<AlignRight />}
              title={"Menu"}
              content={<MiniSidebar />}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
