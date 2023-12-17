import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faCouch,faObjectGroup } from "@fortawesome/free-solid-svg-icons";
import { faCube } from "@fortawesome/free-solid-svg-icons";
const OurServices = () => {
    return ( 
        <div className="mx-24 bg-[#dcfff5] px-20 pb-8 rounded-lg">
            <p className="text-[#3aba93] font-semibold py-4 text-[24px] text-center">OurServices</p>
            <div className="grid grid-cols-3 gap-6">
                <div className="rounded-md shadow-md text-center bg-white">
                    <div className="rounded-[95%] bg-[#dcfff5] p-6 inline-block m-3">
                        <FontAwesomeIcon icon={faCouch} style={{color:"#3aba93", width:"55px"}}/>
                    </div>
                    <p className="font-semibold text-sm">Furniture Design</p>
                    <p className=" text-[14px] p-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam laborum nulla aperiam numquam quis earum esse pariatur laboriosam vitae. dolor sit amet consectetur adipisicing elit</p>
                </div>

                <div className="rounded-md shadow-md text-center bg-white">
                    <div className="rounded-[95%] bg-[#dcfff5] p-6 inline-block m-3">
                        <FontAwesomeIcon icon={faObjectGroup} style={{color:"#3aba93", width:"55px"}} />
                    </div>
                    <p className="font-semibold text-sm">Architecture Design</p>
                    <p className=" text-[14px] p-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam laborum nulla aperiam numquam quis earum esse pariatur laboriosam vitae. dolor sit amet consectetur adipisicing elit</p>
                </div>

                <div className="rounded-md shadow-md text-center bg-white">
                    <div className="rounded-[95%] bg-[#dcfff5] p-6 inline-block m-3">
                        <FontAwesomeIcon icon={faCube}  style={{color:"#3aba93", width:"55px"}} />
                    </div>
                    <p className="font-semibold text-sm">3D Rendering</p>
                    <p className=" text-[14px] p-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam laborum nulla aperiam numquam quis earum esse pariatur laboriosam vitae. dolor sit amet consectetur adipisicing elit</p>
                </div> 
            </div>
        </div>
     );
}
 
export default OurServices;