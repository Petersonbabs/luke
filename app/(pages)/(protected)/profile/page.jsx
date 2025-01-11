"use client"
import { useState } from "react";
import ProfilePageIndex from ".";
import ProfileSidebar from "./ProfileSidebar";

export default function page() {
  const [toRender, setToRender] = useState(0)
  const shufflePage = (torender) => {
    setToRender(torender)
  };
  return (
    <div className="pt-[70px]">
      <ProfilePageIndex toRender={toRender} shufflePage={shufflePage}/>
      <ProfileSidebar shufflePage={shufflePage} toRender={toRender}/>
    </div>
  );
}
