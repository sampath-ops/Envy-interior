import Hero from "./Components/Hero/Hero"
import TrustedBrands from "./Components/TrustedBrands/TrustedBrands"
import Aboutus from "./Components/AboutUs/AboutUs";
import OurServices from "./Components/OurServices/OurServices";

export default function Home() {
  return (
    <div>
      <Hero/>
      <TrustedBrands/>
      <Aboutus/>
      <OurServices/>
    </div>
  )
}
