import Heading from "./heading"
import img from "../assets/images/service_1.png"
import { useState } from "react";
// Images
import skin_1 from "../assets/images/skin_1.png"
import skin_2 from "../assets/images/skin_2.png"
import skin_3 from "../assets/images/skin_3.png"
import skin_4 from "../assets/images/skin_4.png"
import skin_5 from "../assets/images/skin_5.png"
import skin_6 from "../assets/images/skin_6.png"
import skin_7 from "../assets/images/skin_7.png"
import skin_8 from "../assets/images/skin_8.png"


const Services = ()=>{
    const servicesData = [
    {
        category: "Skin Care",
        id: 1,
        services: [
        { name: "HydraFacial", link: "/", description: "Deep cleansing, hydration, and glow in one powerful facial treatment", img: skin_1 },
        { name: "Microneedling", link: "/", description: "Stimulates collagen to reduce scars, pores, and fine lines", img: skin_2 },
        { name: "Brightening Treatment", link: "/", description: "Evens out skin tone and reduces pigmentation safely", img: skin_3 },
        { name: "Chemical Peels", link: "/", description: "Gently exfoliates to reveal smoother, younger-looking skin", img: skin_4 },
        { name: "Acne Therapy", link: "/", description: "Targets acne at the root for clearer, healthier skin", img: skin_5 },
        { name: "Anti-Aging Facial", link: "/", description: "Reduces wrinkles and firms skin for a youthful glow", img: skin_6 },
        { name: "Dermaplaning", link: "/", description: "Removes dead skin and peach fuzz for smooth radiance", img: skin_7 },
        { name: "Oxygen Facial", link: "/", description: "Boosts skin hydration and radiance with pure oxygen infusion", img: skin_8 }
        ]
    },
    {
        category: "Hair Care",
        id: 2,
        services: [
        { name: "Hair Botox", link: "/", description: "Restores hair health, shine, and softness instantly", img: img },
        { name: "Keratin Treatment", link: "/", description: "Smooths frizz and strengthens hair with lasting results", img: img },
        { name: "Scalp Detox", link: "/", description: "Cleanses and revives the scalp for healthy hair growth", img: img },
        { name: "Hair PRP Therapy", link: "/", description: "Stimulates natural hair regrowth using your own plasma", img: img },
        { name: "Deep Conditioning", link: "/", description: "Repairs dry, damaged hair with intense moisture", img: img },
        { name: "Dandruff Control", link: "/", description: "Targets flaking and itchiness with advanced scalp care", img: img },
        { name: "Hair Mesotherapy", link: "/", description: "Nourishes follicles with essential vitamins and minerals", img: img },
        { name: "Split Ends Repair", link: "/", description: "Seals and protects split ends without cutting", img: img }
        ]
    },
    {
        category: "Laser",
        id: 3,
        services: [
        { name: "Laser Hair Removal", link: "/", description: "Long-lasting hair reduction for all skin types", img: img },
        { name: "Skin Rejuvenation", link: "/", description: "Reduces fine lines and tightens skin using laser", img: img },
        { name: "Pigmentation Removal", link: "/", description: "Targets dark spots and sun damage effectively", img: img },
        { name: "Acne Scar Laser", link: "/", description: "Smooths out acne scars with precision treatment", img: img },
        { name: "Tattoo Removal", link: "/", description: "Safely fades and removes unwanted tattoos", img: img },
        { name: "Vascular Laser", link: "/", description: "Treats broken capillaries and spider veins", img: img },
        { name: "Laser Resurfacing", link: "/", description: "Improves skin tone and texture by removing damaged layers", img: img },
        { name: "Stretch Mark Removal", link: "/", description: "Fades stretch marks for smoother skin", img: img }
        ]
    },
    {
        category: "Healthy",
        id: 4,
        services: [
        { name: "IV Therapy", link: "/", description: "Boosts energy and immunity through vitamin-rich IV drips", img: img },
        { name: "Nutrition Counseling", link: "/", description: "Personalized plans for a healthier lifestyle", img: img },
        { name: "Body Detox", link: "/", description: "Flushes out toxins for better digestion and clarity", img: img },
        { name: "Hormonal Balance", link: "/", description: "Supports wellness by regulating hormones naturally", img: img },
        { name: "Sleep Support Program", link: "/", description: "Improves sleep quality through holistic care", img: img },
        { name: "Mental Wellness Coaching", link: "/", description: "Guides stress management and emotional well-being", img: img },
        { name: "Supplements Consultation", link: "/", description: "Recommends tailored vitamins for your health needs", img: img },
        { name: "Allergy Testing", link: "/", description: "Identifies food and environmental triggers accurately", img: img }
        ]
    },
    {
        category: "Weight Loss",
        id: 5,
        services: [
        { name: "Body Sculpting", link: "/", description: "Non-invasive contouring for stubborn fat areas", img: img },
        { name: "Cryolipolysis", link: "/", description: "Fat freezing treatment to target and eliminate fat", img: img },
        { name: "Slimming Massage", link: "/", description: "Stimulates circulation and reduces cellulite", img: img },
        { name: "Metabolic Booster", link: "/", description: "Enhances metabolism for faster weight loss", img: img },
        { name: "EMSculpt", link: "/", description: "Builds muscle and burns fat simultaneously", img: img },
        { name: "Fat Dissolving Injections", link: "/", description: "Targets and reduces localized fat deposits", img: img },
        { name: "Weight Management Plan", link: "/", description: "Custom plans to achieve and maintain ideal weight", img: img },
        { name: "Detox Slim Shots", link: "/", description: "Vitamin-packed injections to support fat loss", img: img }
        ]
    },
    {
        category: "Beauty",
        id: 6,
        services: [
        { name: "Makeup Services", link: "/", description: "Professional makeup for any occasion", img: img },
        { name: "Eyebrow Shaping", link: "/", description: "Perfectly sculpted brows tailored to your face", img: img },
        { name: "Lash Lift & Tint", link: "/", description: "Enhances natural lashes for a fuller look", img: img },
        { name: "Nail Care", link: "/", description: "Manicure and pedicure with precision and style", img: img },
        { name: "Permanent Makeup", link: "/", description: "Long-lasting enhancements for lips, eyes, and brows", img: img },
        { name: "Teeth Whitening", link: "/", description: "Brightens your smile safely and effectively", img: img },
        { name: "Spray Tanning", link: "/", description: "Natural-looking bronze glow without UV exposure", img: img },
        { name: "Facial Threading", link: "/", description: "Gentle hair removal for smooth skin finish", img: img }
        ]
    }
    ];
    const [ currentCategory, setCurrentCategory ] = useState(1)
    const [ data, setData ] = useState(servicesData[0].services)
    return(<div className="px-4 md:px-10 services flex flex-col gap-10">
        <Heading title={"Our Services"} description={"Guided by a passion for empowering individuals, my work spans skincare, rejuvenation therapies, mindful wellness practices, and personalized consultations"} />
        <div className="flex flex-wrap gap-2 sm:gap-5">
            {/* <div className="service-card p-3">All Services</div> */}
            {servicesData.map((e,idx)=>(<div onClick={()=>{
                setCurrentCategory(e.id)
                setData(e.services)
            }} className={`service-card p-1.5 xs:p-2 sm:p-3 ${currentCategory == e.id ? "active": ""}`} key={`Category_Of_Services_${e.category}_${idx}`}>
                {e.category}
            </div>))}
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5">
            {data.map((e,idx)=>{
                return(<div key={`Service_${e.name}_${idx}`} className="card-service flex flex-col gap-3 items-center text-center">
                    <div className="w-full h-full container-img"> 
                        <img src={e.img} alt={e.name} />
                        {/* Animation Draw Lines */}
                        <div className="line-1" ></div>
                        <div className="line-2" ></div>
                     </div>
                    <div>
                        <h3>{e.name}</h3>
                        <p>{e.description}</p>
                    </div>
                    
                </div>)
            })}
        </div>
    </div>)
}
export default Services