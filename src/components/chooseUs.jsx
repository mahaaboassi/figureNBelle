import { useEffect, useRef, useState } from "react"
import Heading from "./heading"
import img from "../assets/images/Choose_us_smal.png"

const ChooseUs = ()=>{
    const data = [
    {
        title: "Experienced Professionals",
        description: "We bring a wealth of knowledge and expertise to guide you toward true beauty and holistic well-being."
    },
    {
        title: "Cutting-Edge Treatments",
        description: "Stay ahead with exclusive access to modern innovations in beauty, skincare, and wellness technology."
    },
    {
        title: "Personalized Attention",
        description: "Your journey is our focus—we tailor every step with care, building trust through personalized support."
    },
    {
        title: "Warm & Inviting Environment",
        description: "Step into a serene oasis where you can unwind, rejuvenate, and feel at peace throughout the experience."
    }
    ];
    const targetRef = useRef(null)
    const [isTrigger, setIsTrigger] = useState(false)
    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsTrigger(true); // Set state to true when the div is in view
                }
            });
        };
        const observer = new IntersectionObserver(handleIntersection, {
            root: null, // Observe with respect to the viewport
            rootMargin: '0px',
            threshold: 0.5, // Trigger when 50% of the div is visible
        });
        // Start observing the target div
        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        // Cleanup observer on component unmount
        return () => {
            if (targetRef.current) observer.unobserve(targetRef.current);
        };
    }, []);
    return(<div className="py-20 px-4 md:px-10 flex flex-col gap-10" >
        <Heading title={"WHY YOU CHOOSE US"} description={"Choose Figure N Belle Beauty & Wellness Clinic for a transformative experience that goes beyond conventional beauty treatments"} />
            <div className="hidden div-img">
                <img alt="image" src={img} />
            </div>
        <div ref={targetRef} className="choose relative">
            
            <div style={{
                animation:  isTrigger ? "resize 0.5s linear forwards" : "none"
            }} className="card-hero p-10 absolute top-0 left-0 flex flex-col gap-3">
                <h2>{data[0].title}</h2>
                <p>{data[0].description}</p>
            </div>
            <div style={{
                animation:  isTrigger ? "resize 0.5s linear forwards" : "none"
            }} className="card-hero p-10  absolute top-0 right-0 flex flex-col gap-3">
                <h2>{data[1].title}</h2>
                <p>{data[1].description}</p>
            </div>
            <div style={{
                animation:  isTrigger ? "resize 0.5s linear forwards" : "none"
            }} className="card-hero p-10  absolute bottom-5 left-0 flex flex-col gap-3">
                <h2>{data[2].title}</h2>
                <p>{data[2].description}</p>
            </div>
            <div style={{
                animation:  isTrigger ? "resize 0.5s linear forwards" : "none"
            }} className="card-hero p-10  absolute bottom-5 right-0 flex flex-col gap-3">
                <h2>{data[3].title}</h2>
                <p>{data[3].description}</p>
            </div>
            
        </div>
    </div>)
}
export default ChooseUs