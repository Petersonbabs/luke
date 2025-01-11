"use client"
import { useState } from "react"

const useProfile = () => {
    const [toRender, setToRender] = useState("/")
    const shufflePage = (torender) => {
        setToRender(torender)
        console.log(toRender);
      };
  return {
    toRender,
    setToRender,
    shufflePage
  }
}

export default useProfile
