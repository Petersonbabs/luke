
import BestOfSalesList from "@/components/sections/Best_of_sales/BestList"
import Hero from "@/components/sections/Hero/Hero"
import Collections from "@/components/sections/collection/Collections"
import NewIn from "@/components/sections/new_in/NewIn"
import OurStory from "@/components/sections/our_story/OurStory"

const Home = ()=>{
    return(
        <>
            <Hero />
            <Collections />
            <NewIn />
            <BestOfSalesList title={'Best of Sales'}/>
            <BestOfSalesList title={'Most Popular'}/>
            <OurStory />
        </>
    )

}

export default Home