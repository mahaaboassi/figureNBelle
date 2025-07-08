import Heading from "./heading"
import img from "../assets/images/service_1.png"
import { useState } from "react";
// Images
import { services } from "../data/data";
import { Link } from "react-router-dom";
import shap from "../assets/images/shape.png"

const Services = ()=>{

    const [ currentCategory, setCurrentCategory ] = useState(1)
    const [ currentSubCategory, setCurrentSubCategory ] = useState(1)
    const [ data, setData ] = useState(services[0].children)
    const [servicesData, setServicesData] = useState(services[0].children[0].services)
    const [ img, setImg] = useState(services[0].bg)
    return(<div className="px-4 md:px-10 services flex flex-col gap-10">
        <Heading title={"Our Services"} description={"Guided by a passion for empowering individuals, my work spans skincare, rejuvenation therapies, mindful wellness practices, and personalized consultations"} />
        <div className="flex flex-wrap justify-center gap-2 sm:gap-5">
            {/* <div className="service-card p-3">All Services</div> */}
            {services.map((e,idx)=>(<div onClick={()=>{
                setCurrentCategory(e.id)
                setData(e.children)
                setImg(e.bg)
                setCurrentSubCategory(e.children[0].id)
                setServicesData(e.children[0].services)
            }} className={`service-card p-1.5 xs:p-2 sm:p-3 ${currentCategory == e.id ? "active": ""}`} key={`Category_Of_Services_${e.category}_${idx}`}>
                {e.name}
            </div>))}
        </div>
        <div className="grid grid-cols-4 gap-4">
            {data.length>0 && data[0].subCategory !="" && <div className="flex col-span-1 flex-col gap-4">
                {/* <div className="service-card p-3">All Services</div> */}
                {data.map((e,idx)=>(<div onClick={()=>{
                    setServicesData(e.services)
                    setCurrentSubCategory(e.id)
                }} className={`category-card p-1.5 xs:p-2 sm:p-3  ${currentSubCategory == e.id ? "active": ""}`} key={`Category_Of_Services_${e.category}_${idx}`}>
                    <div >{e.subCategory}</div>
                    <div className="category-icon">
                          <svg  width="14" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 66.91"><g><path d="M11.68,1.95C8.95-0.7,4.6-0.64,1.95,2.08c-2.65,2.72-2.59,7.08,0.13,9.73l54.79,53.13l4.8-4.93l-4.8,4.95 c2.74,2.65,7.1,2.58,9.75-0.15c0.08-0.08,0.15-0.16,0.22-0.24l53.95-52.76c2.73-2.65,2.79-7.01,0.14-9.73 c-2.65-2.72-7.01-2.79-9.73-0.13L61.65,50.41L11.68,1.95L11.68,1.95z"/></g></svg>                        
                    </div>
                </div>))}
            </div>}
            <div className={` ${data.length>0 &&  data[0].subCategory != "" ? "col-span-3" :"col-span-4"}`}>
                <div className="relative ">
                     <div className="absolute right-0"style={{zIndex:1}} >
                        <img style={{objectFit:"contain"}}  src={img} alt={"BG_Image"} />
                    </div>
                </div>
                <div style={{zIndex:1200}} className={`grid relative grid-cols-1 xs:grid-cols-2  ${data.length>0 &&  data[0].subCategory != ""?"sm:grid-cols-3":"sm:grid-cols-4"} gap-2 sm:gap-5`}>
                    {servicesData.map((e,idx)=>{
                        return(<Link key={`Service_${e.name}_${idx}`}  to={e.link}>
                            <div className="container-services card-hero p-4">
                                <h3>{e.name}</h3>
                                <div className="flex gap-1 read items-center">
                                    Read More<svg  width="10" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 66.91"><g><path d="M11.68,1.95C8.95-0.7,4.6-0.64,1.95,2.08c-2.65,2.72-2.59,7.08,0.13,9.73l54.79,53.13l4.8-4.93l-4.8,4.95 c2.74,2.65,7.1,2.58,9.75-0.15c0.08-0.08,0.15-0.16,0.22-0.24l53.95-52.76c2.73-2.65,2.79-7.01,0.14-9.73 c-2.65-2.72-7.01-2.79-9.73-0.13L61.65,50.41L11.68,1.95L11.68,1.95z"/></g></svg>                        
                                </div>
                            </div>
                        
                        </Link>)
                    })}
                </div>
            </div>
            
        </div>

    </div>)
}
export default Services