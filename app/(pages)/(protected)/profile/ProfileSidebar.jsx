import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { useAuthContext } from "@/context/AuthContext";
import {  BookText,  Upload } from "lucide-react";
import React from "react";

const ProfileSidebar = ({ shufflePage, toRender }) => {
  const menuList = [
    { name: "My Orders" },
    { name: "Payment Method" },
  ];
  const {signOut} = useAuthContext()

  return (
    <div>
      <SidebarProvider className="mt-8">
        <Sidebar>
          <SidebarContent className="pt-24">
            <SidebarGroup>
              <SidebarGroupContent>
                {menuList.map((project, index) => (
                  <SidebarMenuItem key={project.name} className="list-none">
                    <SidebarMenuButton
                      className={`hover:bg-black flex items-center rounded-none hover:text-white h-16 border text-lg mb-2 ${toRender == index && "bg-black text-white transition-all"}`}
                      onClick={() => {
                        shufflePage(index);
                      }}
                    >
                      <BookText />
                      <span>{project.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                <SidebarMenuItem className="list-none">
                  <SidebarMenuButton onClick={signOut} className="hover:bg-black flex items-center rounded-none hover:text-white h-16 border text-lg mb-2">
                    <Upload className="rotate-[-90deg]" />
                    <span>Sign out</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    </div>
  );
};

export default ProfileSidebar;
