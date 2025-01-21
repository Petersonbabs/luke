"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Orders from "./subPages/Orders";
import PaymentMethod from "./subPages/PaymentMethod";
import {
  BookText,
  ChartNoAxesGantt,
  ChevronDown,
  CreditCard,
  Upload,
} from "lucide-react";
import withAuthProtection, {
  withPermission,
} from "@/app/_features/_authentication/AuthChecker";
import { useAuthContext } from "@/context/AuthContext";

const ProfilePageIndex = ({ toRender, shufflePage, checkPermission }) => {
  const { signOut } = useAuthContext();
  const menuList = [
    { name: "My Orders", icon: <BookText /> },
    { name: "Payment Method", icon: <CreditCard /> },
  ];
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
            <DropdownMenuItem
              className={`hover:bg-black flex items-center rounded-none hover:text-white h-8 text-[16px] mb-2 cursor-pointer ${
                toRender == index && "bg-black text-white transition-all"
              }`}
              onClick={() => {
                checkPermission(shufflePage, index);
              }}
            >
              {item.icon}
              <span>{item.name}</span>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem
            className={`hover:bg-black flex items-center rounded-none hover:text-white h-8 text-[16px] mb-2 cursor-pointer `}
            onClick={() => {
              signOut();
            }}
          >
            <Upload className="rotate-[-90deg]" />
            <span>SignOut</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {toRenderComponents[toRender]}
    </div>
  );
};

export default withAuthProtection(ProfilePageIndex);
