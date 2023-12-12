
const AboutUs = () => {
    return ( 
        <div className="mx-36 my-20 grid grid-cols-2">
            <div>
                <p className="text-[#3aba93] font-semibold pb-4 text-[24px]">AboutUs</p>
                <p className="font-medium text-2xl pb-4">Simple Minimalist For Your Home Interior</p>
                <div className="pb-6">
                    {/* <img src="" alt="" /> */}
                    <p className="text-[14px] text-gray-700">We're in this business <span className="text-[#3aba93]">since 2015</span> and We provide the best services</p>
                </div>
                <p className="text-gray-700 w-[90%] text-justify leading-5 pb-4">Welcome to our Interior Design Studio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a id iste, dolore dolor sunt aliquam maxime accusantium totam similique odit ipsa, mollitia ad recusandae reprehenderit. Iusto perspiciatis ipsa doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="bg-[#3aba93] p-2 px-6 text-white rounded-lg font-medium my-2">Read More</button>
            </div>
            <div className="grid grid-cols-2 items-end">
                <img src="./images/sofa-about2.jpg" alt="sofa" className="rounded-xl relative right-[-90px]"/>
                <img src="./images/sofa-about1.jpg" alt="sofa" className= "rounded-xl h-[400px]  w-[95%]"/> 
            </div>
        </div>
     );
}
 
export default AboutUs;