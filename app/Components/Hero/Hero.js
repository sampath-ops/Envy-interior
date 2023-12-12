import Navbar from "../Navbar/Navbar";
const Hero = () => {
    return ( 
        <div className="bg-[url('/images/hero_bg.jpg')] h-screen bg-cover">
            <Navbar/>
            <div className=" mx-24 mt-20">
                <p className="text-[#43c19b] font-bold text-6xl mt-6">Envy</p>
                <h1 className=" text-7xl py-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#14d299] to-[#fff] my-4">Interior Design</h1>
                <p className="text-white w-[35%] my-4">Interior design is an art and science of enhancing the interior of a space to achieve a asthetically pleasing and functional environment</p>
                <p className="text-white w-[35%]">Transforming spaces into beautiful and funcitonal works of art</p>
                <button className="bg-[#42e0b1] p-2 px-8 text-white rounded-lg font-medium my-16" >explore</button>
            </div>
        </div>
     );
}
 
export default Hero;