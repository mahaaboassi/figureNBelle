import { useEffect, useRef, useState } from "react"
import Heading from "./heading"
import img from "../assets/images/choose_us_smal.png"
import { chooseUsData } from "../data/data"

const ChooseUs = ()=>{
    
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
    return(<div className="px-4 md:px-10 flex flex-col gap-10" >
        <Heading title={"WHY CHOOSE US?"} description={"Choose Figure N Belle Beauty & Wellness Clinic for a transformative experience that goes beyond conventional beauty treatments"} />
            <div className="hidden div-img">
                <img alt="image" src={img} />
            </div>
        <div ref={targetRef} className="choose relative">
            
            <div style={{
                animation:  isTrigger ? "resize 0.5s linear forwards" : "none"
            }} className="card-hero p-10 absolute top-0 left-0 flex flex-col gap-3">
                <h2>{chooseUsData[0].title}</h2>
                <p>{chooseUsData[0].description}</p>
            </div>
            <div style={{
                animation:  isTrigger ? "resize 0.5s linear forwards" : "none"
            }} className="card-hero p-10  absolute top-0 right-0 flex flex-col gap-3">
                <h2>{chooseUsData[1].title}</h2>
                <p>{chooseUsData[1].description}</p>
            </div>
            <div style={{
                animation:  isTrigger ? "resize 0.5s linear forwards" : "none"
            }} className="card-hero p-10  absolute bottom-5 left-0 flex flex-col gap-3">
                <h2>{chooseUsData[2].title}</h2>
                <p>{chooseUsData[2].description}</p>
            </div>
            <div style={{
                animation:  isTrigger ? "resize 0.5s linear forwards" : "none"
            }} className="card-hero p-10  absolute bottom-5 right-0 flex flex-col gap-3">
                <h2>{chooseUsData[3].title}</h2>
                <p>{chooseUsData[3].description}</p>
            </div>
            
        </div>
    </div>)
}
export default ChooseUs