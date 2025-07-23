import Heading from "./heading"
import img from "../assets/images/service_1.png"
import { useEffect, useState } from "react";
// Images
import { services } from "../data/data";
import { Link } from "react-router-dom";
import shap from "../assets/images/shape.png"

const Services = ()=>{

    const [ currentCategory, setCurrentCategory ] = useState(1)
    const [servicesData, setServicesData] = useState(services[0].children[0].services)
    useEffect(()=>{
        let temp = []
         services[0].children.forEach((ele)=>{
            temp.push(...ele.services)
        })
        takeFourServices(temp)
    },[])
    const takeFourServices = (data)=>{ 
        
        const getThreeUniqueItems = (array) => {
            if (!Array.isArray(array)) return [];

            const shuffled = [...array].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 8);
        };
        setServicesData(getThreeUniqueItems(data));
    }
    return(<div className="px-4 md:px-10 services flex flex-col gap-10">
        <Heading title={"Our Services"} description={"Guided by a passion for empowering individuals, Our work covers skincare, rejuvenation therapies, mindful wellness practices, and personalized consultations"} />
        <div className="flex flex-wrap justify-center gap-2 sm:gap-5">
            {services.map((e,idx)=>(<div onClick={()=>{
                setCurrentCategory(e.id)
                let temp = []
                e.children.forEach((ele)=>{
                    temp.push(...ele.services)
                })
                
                takeFourServices(temp)

            }} className={`service-card p-1.5 xs:p-2 sm:p-3 ${currentCategory == e.id ? "active": ""}`} key={`Category_Of_Services_${e.category}_${idx}`}>
                {e.name}
            </div>))}
        </div>
        <div style={{zIndex:1200}} className={`grid relative grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-5`}>
            {servicesData.map((e,idx)=>{
                return(<Link key={`Service_${e.name}_${idx}`}  to={e.link}>
                    <div key={`Service_${e.name}_${idx}`} className="card-service flex flex-col gap-3 items-center text-center">
                        <div className="w-full h-full container-img"> 
                            <img style={{objectFit:"cover"}} src={e.bg} alt={e.name} />
                            {/* Animation Draw Lines */}
                            <div className="line-1" ></div>
                            <div className="line-2" ></div>
                        </div>
                        <div>
                            <h3>{e.name}</h3>
                            <p>{e.description}</p>
                        </div>
                    </div>
                </Link>)
            })}
        </div>

    </div>)
}
export default Services