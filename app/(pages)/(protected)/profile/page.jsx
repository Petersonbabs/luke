"use client"
import { useState } from "react";
import ProfilePageIndex from ".";
import ProfileSidebar from "./ProfileSidebar";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function page() {
  const [toRender, setToRender] = useState(0)
  const {user, token} = useAuthContext()
  const navigate = useRouter()
  const shufflePage = (torender) => {
    setToRender(torender)
  };

  useEffect(() => {
    if (!user || !token) {
      navigate.push("/login");
    }
  }, [user, token, navigate]);

  return (
    <div className="pt-[70px]">
      <ProfilePageIndex toRender={toRender} shufflePage={shufflePage}/>
      <ProfileSidebar shufflePage={shufflePage} toRender={toRender}/>
    </div>
  );
}
