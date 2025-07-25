import { useEffect, useState } from "react"
import Gallery from "../../components/gallery"
import BookNow from "../../components/bookNow"
// Images
import img_small from "../../assets/images/terms_small.png"
import img from "../../assets/images/terms_big.png"
import { Host } from "../../data/data"

const Terms = ()=>{
    const data = {
        last_update : "July 24, 2025",
        description : `Welcome to FigureNBelle. By booking a service with us, visiting our clinic, or browsing our website, you agree to the following terms and conditions. Please read them carefully so you know what to expect from us, and what we expect from you.`,
        children : [{
            title : "Appointments & Bookings",
            description : "",
            options : [
                "Appointments can be made online, by phone, or in person at our clinic.",
                "Please arrive at least 10 minutes before your scheduled time.",
                "If you’re running late, we’ll do our best to accommodate you, but your service time may be reduced to avoid delays for other clients."
            ]
        },{
            title : "Cancellations & Rescheduling",
            description : "",
            options : [
                "If you need to cancel or reschedule, please notify us at least 24 hours in advance.",
                "Cancellations made with less than 24 hours' notice may be subject to a cancellation fee.",
                "No-shows may result in a full service charge or future booking restrictions.",
            ]
        },{
            title : "Payments",
            description : "",
            options : [
                "We accept cash, UPI, and major debit/credit cards at the clinic.",
                "Online bookings may require advance payment or a deposit.",
                "All prices are inclusive of applicable taxes, unless stated otherwise."
            ]
        },{
            title : "Health & Safety",
            description : "",
            options : [
                "Please inform us of any allergies, skin conditions, or medical concerns before your treatment.",
                "We reserve the right to decline services if we feel the treatment may not be suitable for your health or safety.",
                "Our team follows strict hygiene and sanitization practices to ensure your comfort and well-being."
            ]
        },{
            title : "Personal Conduct",
            description : "",
            options : [
                "We maintain a respectful and relaxing environment for all our clients and staff.",
                "Disruptive, disrespectful, or inappropriate behaviour will not be tolerated and may result in termination of service and refusal of future appointments.",
            ],
            description_2 : "Just contact us, and we’ll take care of it promptly and respectfully."
        },{
            title : "Use of Our Website",
            description : "",
            options : [
                "The content on our website is for general information and booking purposes only.",
                "You may not copy, distribute, or misuse any content, images, or branding without written permission from FigureNBelle.",
                "We do our best to keep our website accurate and up to date."
            ]
        },{
            title : "Privacy",
            description : "",
            options : [
                "We take your privacy seriously. Any personal information you share with us is handled with care and stored securely.",
                "For full details, please read our Privacy Policy."
            ]
        },{
            title : "Liability",
            description : "",
            options : [
                "While we take every measure to provide a safe and satisfying experience, FigureNBelle is not liable for any allergic reactions, unforeseen side effects, or dissatisfaction resulting from treatments, especially when proper information hasn’t been disclosed by the client.",
                "Always follow our pre- and post-treatment advice for best results."
            ],
        },{
            title : "Changes to Terms",
            description : "",
            options : [
                "We may update these terms from time to time. Any changes will be posted on our website and will apply going forward.",
                "Continued use of our services or website means you accept the revised terms."
            ],
        },{
            title : "Contact Us",
            description : "If you have any questions or concerns about these terms, feel free to reach out to us directly:",
            options : [],
            description_2 : "Email: info@figurenbellewellness.com"
        }]
    }
    const [ isSmallSize, setIsSmallSize ] = useState(false)
    useEffect(()=>{
        if(window.innerWidth < 500){
                setIsSmallSize(true)
        }
        window.scrollTo({top:0})
        
    },[])
    return(<artical className="service px-4 md:px-10 flex flex-col gap-10 support">
        <title>Terms and Conditions | Figure N Belle</title>
        <meta name="description" content="By booking a service, visiting Figure N Belle Clinic, or browsing our website, you agree to our terms and conditions. Please read them carefully to understand your rights and responsibilities." />
        <link rel="canonical" href={`${Host}/terms-and-conditions`}></link>

        <div className="hero-service relative">
            <img className="w-full" alt="banner" src={isSmallSize ? img_small :img} />
            <div className="absolute inset-0 flex px-2 md:px-10 items-center">
                <h1 className="bodoniTX">Terms and Conditions</h1>
            </div>

        </div>
        <div className="flex flex-col gap-5 w-full service ">
             <div className="flex flex-col gap-3">
                <p><strong>Last Updated: {data.last_update}</strong></p>
                <p>{data.description}</p>
            </div>
            {data.children.map((e,idx)=>(<div className="flex flex-col gap-1"  key={`Privacy_${e.title}_${idx}`}>
                <h2 className="bodoniTX">{e.title}</h2>
                <p>{e.description}</p>
                {e.options.length>0 && <ul>
                    {e.options.map((ele,i)=>(<li key={`Privacy_${e.title}_${ele}_${i}`}>
                        {ele}
                    </li>))}
                </ul>}
                <p>{e.description_2 || ""}</p>
            </div>))}
        </div>
        <div>
            <Gallery/> 
            <BookNow/> 
        </div>    
    </artical>)
}
export default Terms