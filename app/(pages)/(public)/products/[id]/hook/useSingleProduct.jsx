import { useProductsContext } from "@/context/ProductContext"
import { useParams } from "next/navigation"
import { useEffect } from "react"


const useSingleProduct = () => {
    const {getSingleProduct, singleProduct} = useProductsContext()
    const {id} = useParams()
    useEffect(()=>{
        getSingleProduct(id)
    }, [id])
    
  return {
    singleProduct
  }
}

export default useSingleProduct
