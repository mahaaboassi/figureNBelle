import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Gallery from "../../components/gallery"
import BookNow from "../../components/bookNow"
// Images
import img_small from "../../assets/images/privacy_small.png"
import img from "../../assets/images/privacy_big.png"
import { Host } from "../../data/data"

const Privacy = ()=>{
    const data = {
        last_update : "July 24, 2025",
        description : `Welcome to FigureNBelle, your trusted beauty & wellness clinic. We understand that by giving us your personal information, you are entrusting us with your trust. We are dedicated to protecting your privacy, as we take it seriously.
                        Whether you're utilizing our services, making an appointment, or simply browsing our website, this policy outlines the information we gather, how we use it, and how we protect it.
                        `,
        children : [{
            title : "What We Collect",
            description : "When you connect with us, we may collect the following information:",
            options : [
                "Basic details like your name, phone number, and email address",
                "Appointment history",
                "Website usage data"
            ]
        },{
            title : "Why We Collect It",
            description : "We collect your information in order to:",
            options : [
                "Schedule and manage your appointments.",
                "Provide personalised skincare, wellness, and beauty services.",
                "Improve our services and understand your preferences better.",
                "Comply with legal and regulatory requirements."
            ]
        },{
            title : "How We Share Your Information",
            description : "We do not engage in selling or trading your data. Your information may be shared only with our trusted service providers, such as our booking system, to help us provide the best quality service. These third parties are bound by confidentiality and data protection agreements.",
            options : []
        },{
            title : "How We Protect Your Information",
            description : "We take the required technical and organisational steps to safeguard your information from loss, misuse, or unauthorised access. This includes secure systems, limited access, and proper staff training.",
            options : []
        },{
            title : "Your Rights",
            description : "You have full rights over your personal information. You can:",
            options : [
                "Ask us what data we hold about you.",
                "Request corrections or updates.",
                "Opt out of promotional messages at any time."
            ],
            description_2 : "Just contact us, and we’ll take care of it promptly and respectfully."
        },{
            title : "Cookies and Website Data",
            description : "We use cookies on our website to enhance your browsing experience and understand how visitors use our site. You can manage cookie settings in your browser at any time.",
            options : []
        },{
            title : "Changes to This Policy",
            description : "We may update this policy from time to time. If we make any significant changes, we will notify you via our website or through direct communication if necessary.",
            options : []
        },{
            title : "Contact Us",
            description : "If you have any questions about this Privacy Policy or how we use your data, feel free to reach out:",
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
    return(<article className="service flex flex-col gap-10 support">
        <title>Privacy Policy | Figure N Belle</title>
        <meta name="description" content="At Figure N Belle Beauty & Wellness Clinic, we respect your privacy and are committed to protecting your personal information. This policy explains what data we collect, how we use it, and how we safeguard it when you use our services, book appointments, or browse our website." />
        <link rel="canonical" href={`${Host}/privacy-policy`}></link>

        <div className="hero-service relative">
            <img className="w-full" alt="banner" src={isSmallSize ? img_small :img} />
            <div className="absolute inset-0 flex px-2 md:px-10 items-center">
                <h1 className="bodoniTX">Privacy Policy</h1>
            </div>

        </div>
        <div className="flex flex-col gap-5 w-full px-4 md:px-10 ">
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
    </article>)
}
export default Privacy