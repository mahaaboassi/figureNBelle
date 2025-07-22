import { useEffect, useState } from "react"
import img from "../../assets/images/about.png"
import img_small from "../../assets/images/about_small.png"
import sec from "../../assets/images/sec.png"
import Gallery from "../../components/gallery"
import BookNow from "../../components/bookNow"
import Heading from "../../components/heading"
import { chooseUsData } from "../../data/data"

const About = ()=>{
    const [ isSmallSize, setIsSmallSize ] = useState(false)
    useEffect(()=>{
        if(window.innerWidth < 500){
                setIsSmallSize(true)
        }
    },[])

    return(<div className=" px-4 md:px-10 flex flex-col gap-10 sm:gap-16 md:gap-20">
        <div className="hero-service relative">
            <img className="w-full" alt="banner" src={isSmallSize ? img_small : img} />
            <div className="absolute inset-0 flex px-2 md:px-10 items-center">
                <h1 className="bodoniTX">About Us</h1>
            </div>
            

        </div>
        {/* <div className="flex metrics gap-2 md:gap-20 justify-center items-center p-2 md:p-5  ">
            {data.map((e,idx)=>(<div className="flex metrics-content flex-col gap-2 items-center " key={`Metrics_${e.name}_${idx}`}>
                <div className="flex items-center  gap-1 xs:gap-3">
                    {e.icon}
                    <div className="flex flex-col items-start ">
                         <span className="value">{e.value}</span> 
                        <span className="name-metrics">{e.name} </span>
                    </div>
                </div>
            </div>))}
        </div> */}
        <div className="flex flex-col gap-10 about-choose">
            <Heading title={"WHY CHOOSE US?"} description={"Choose Figure N Belle Beauty & Wellness Clinic for a transformative experience that goes beyond conventional beauty treatments"} />
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-5">
                {chooseUsData.map((e,idx)=>(<div className={`${idx==0?"card-pink":"card-white"} flex flex-col gap-3 p-5`} key={`About_Why_Choose_Us_${idx}`}>
                    <div>{e.icon}</div>
                    <h3>{e.title}</h3>
                    <p>{e.description}</p>
                </div>))}
            </div>
        </div>
        <div className="relative section-1-about p-5 md:p-10 ">
            <div className="absolute section-1-img right-0 top-0 bottom-0">
                <img style={{objectFit:'cover'}} className="w-full h-full" src={sec} alt="section" />
            </div>
            <div  className="section-1-content flex flex-col gap-4">
                <h3>Over 15 Years of Trusted Beauty & Wellness Expertise</h3>
                <p>With more than 15 years in the beauty and wellness industry, our clinic brings a deep-rooted passion and refined expertise to every treatment we offer. Our philosophy centers on the belief that true beauty radiates from within—achieved by nurturing both the body and the spirit.</p>
                <p>Blending cutting-edge technologies with time-honored techniques, we provide personalized care across skincare, rejuvenation therapies, holistic wellness, and mindful consultations. Every service is thoughtfully curated to enhance natural beauty, restore balance, and create a sense of indulgent self-care.</p>
                <p>Our journey is defined by one mission: to empower you to look and feel your absolute best—confident, radiant, and completely yourself.</p>
            </div>
            
        </div>

       <div>
            <Gallery/>
            <BookNow/>
       </div>
    </div>)
}
export default About