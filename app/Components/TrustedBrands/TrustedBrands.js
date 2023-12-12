import Image from "next/image";
const TrustedBrands = () => {
   return (
      <div className="mx-24">
         <p className=" text-center text-[#3aba93] font-semibold text-xl my-8">Trusted by Greatest Companies</p>
         <div className="grid grid-cols-4 bg-[#dcfff5]  rounded-md mb-10 justify-items-center">
            <img src="/images/google.png" alt="google-logo" className="w-1/2 self-center"/>
            <img src="/images/amazon.png" alt="amazon-logo" className="w-1/2 self-center"/>
            <img src="/images/flipkart.png" alt="flipkart-logo" className="w-1/2 self-center"/>
            <img src="/images/google.png" alt="airbnb-logo" className="w-1/2 self-center"/>
         </div>
      </div>
   );
}

export default TrustedBrands;