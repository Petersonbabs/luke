"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Orders from "./subPages/Orders";
import PaymentMethod from "./subPages/PaymentMethod";
import { BookText, ChartNoAxesGantt, ChevronDown, CreditCard } from "lucide-react";

const ProfilePageIndex = ({ toRender, shufflePage }) => {
  const menuList = [{ name: "My Orders", icon: <BookText /> }, { name: "Payment Method",  icon: <CreditCard/>  }];
  const toRenderComponents = [<Orders />, <PaymentMethod />];


  return (
    <div className="w-full  ml-auto md:w-[65%] lg:w-[70%] xl:w-[80%] bg-white p-8">
      <DropdownMenu className="">
        <DropdownMenuTrigger className="mb-9 border w-full flex items-center gap-4 justify-end bg-black text-white py-2 md:hidden ">
          <span>Menu</span>
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[90vw] rounded-none  ml-2">
          {menuList.map((item, index) => (
            <DropdownMenuItem className={`hover:bg-black flex items-center rounded-none hover:text-white h-8 text-[16px] mb-2 cursor-pointer ${toRender == index && "bg-black text-white transition-all"}`}
            onClick={() => {
              shufflePage(index);
            }}
            >
              {item.icon}
              <span>{item.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {toRenderComponents[toRender]}
    </div>
  );
};

export default ProfilePageIndex;
