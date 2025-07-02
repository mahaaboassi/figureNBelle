import { Link } from "react-router-dom"
import logo from "../assets/images/logo_figure.png"
const Footer = ()=>{
    const pages = [{
        name : "Home",
        link : "/"
    },{
        name : "Services",
        link : "/"
    },{
        name : "About",
        link : "/"
    },{
        name : "Contact",
        link : "/"
    }]
    const support =[{
        name :  "Privacy Policy",
        link : "/"
    },{
        name :  "COOKIES",
        link : "/"
    },{
        name :  "TERMS & CONDITIONS",
        link : "/"
    }]
    return(<footer className="px-4 md:px-10">
        <div className="first-div flex flex-col gap-2">
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <p>At Figure N Belle, we combine beauty, science, and care to offer advanced skin and laser treatments tailored to your needs. Your confidence is our mission .</p>
            <p>© 2025, All Rights Reserved , Powered by <Link target="_blank" to={"https:/arizglobal.com"}>Ariz Global</Link></p>
        </div>
        <div className="second-div grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
                <h3>
                    pages
                </h3>
                <ul className="flex flex-col gap-3">
                    {pages.map((e,idx)=><li key={`Pages_${idx}`}>
                        <Link to={e.link}>{e.name}</Link>
                    </li>)}
                    
                </ul>
            </div>
            <div>
                <h3>
                    Support
                </h3>
                <ul className="flex flex-col gap-3">
                    {support.map((e,idx)=><li key={`Pages_${idx}`}>
                        <Link to={e.link}>{e.name}</Link>
                    </li>)}
                    
                </ul>
            </div>
            <div className="contact">
                <h3>
                    Contact Us
                </h3>
                <ul>
                    <li>
                        <Link to="mailto:info@figurenbellewellness.com" className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 12" fill="none">
                                <g clipPath="url(#clip0_762_923)">
                                <path d="M0.587565 0L9.66081 6.7103L18.3459 0H0.587565ZM0 11.2918L6.46322 5.41451L0 0.635269V11.2932V11.2918ZM7.17603 5.9418L0.5118 12H18.4325L12.0605 5.9418L9.96387 7.56433C9.88212 7.62613 9.77942 7.66056 9.673 7.66184C9.56658 7.66311 9.46292 7.63116 9.3794 7.57135L7.17603 5.9418ZM12.761 5.4033L19 11.3395V0.583382L12.761 5.4033Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_762_923">
                                <rect width="19" height="12" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            info@figurenbellewellness.com
                        </Link>
                    </li>
                </ul>
                
            </div>
        </div>

    </footer>)
}
export default Footer