import HeroData from "@/data/sections/Hero"
import "./HeroStyle.css"
import { AutoplayCarousel } from "@/components/layouts/Slider/Slider"

const HeroContent = ()=>{
  return(
    <h1>Hero Content</h1>
  )
} 

const Hero = () => {
  return (
    <section className="hero h-screen border">
      <AutoplayCarousel data={HeroData} content={<HeroContent />}/>
    </section>
  )
}

export default Hero
