import { useEffect, useRef, useState } from "react"
import Heading from "./heading"
import img from "../assets/images/choose_us_smal.png"
import img_2 from "../assets/images/why.png"
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
    return(<div className="px-4 md:px-10 flex flex-col gap-10  about-choose" >
        <Heading title={"WHY CHOOSE US?"} description={"Choose Figure N Belle Beauty & Wellness Clinic for a transformative experience that goes beyond conventional beauty treatments"} />
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-5">
                {chooseUsData.map((e,idx)=>(<div className={`${idx==0?"card-pink":"card-white"} flex flex-col gap-3 p-5`} key={`About_Why_Choose_Us_${idx}`}>
                    <div>{e.icon}</div>
                    <h3>{e.title}</h3>
                    <p>{e.description}</p>
                </div>))}
            </div>

    </div>)
}
export default ChooseUs