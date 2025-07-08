import { Link } from "react-router-dom"
import logo from "../assets/images/logo_figure.png"
import Icons from "./icons"
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
    const data = {
        location :  {
            value_1 : "Ashok Vihar",
            link_1 : "https://maps.app.goo.gl/PVCnjgSxfkLbPYBi6",
            value_2 : "Janak Puri",
            link_2 : "https://maps.app.goo.gl/6VHEXhPT3agoWcsC6"
        },
        phone : {
            value_1: "09315516365",
            link_1: "tel:09315516365",
            value_2: "09650007459",
            link_2: "tel:09650007459"       
        },
        email : {
            value : "info@figurenbellewellness.com",
            link : "mailto:info@figurenbellewellness.com"
        }
    }

    return(<footer className="px-4 md:px-10 py-10">
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
                    {pages.map((e,idx)=><li className="uppercase" key={`Pages_${idx}`}>
                        <Link to={e.link}>{e.name}</Link>
                    </li>)}
                    
                </ul>
            </div>
            <div>
                <h3>
                    Support
                </h3>
                <ul className="flex flex-col gap-3">
                    {support.map((e,idx)=><li className="uppercase" key={`Support_${idx}`}>
                        <Link to={e.link}>{e.name}</Link>
                    </li>)}
                    
                </ul>
            </div>
            <div className="flex flex-col gap-5 justify-between">
                <div>
                    <h3>
                        Contact Us
                    </h3>
                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link to="mailto:info@figurenbellewellness.com" className="flex gap-2 items-center">
                                <div style={{width:"30px"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 19 12" fill="none">
                                        <g clipPath="url(#clip0_762_923)">
                                        <path d="M0.587565 0L9.66081 6.7103L18.3459 0H0.587565ZM0 11.2918L6.46322 5.41451L0 0.635269V11.2932V11.2918ZM7.17603 5.9418L0.5118 12H18.4325L12.0605 5.9418L9.96387 7.56433C9.88212 7.62613 9.77942 7.66056 9.673 7.66184C9.56658 7.66311 9.46292 7.63116 9.3794 7.57135L7.17603 5.9418ZM12.761 5.4033L19 11.3395V0.583382L12.761 5.4033Z" fill="black"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_762_923">
                                        <rect width="19" height="12" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                
                                info@figurenbellewellness.com
                            </Link>
                        </li>
                        <li>
                            <div className="flex gap-2 items-center">
                                <div style={{width:"30px"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                        <g clipPath="url(#clip0_762_918)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.192684 2.86579C1.46151 3.76174 2.72025 4.66281 3.78274 5.82301C3.1737 8.58821 5.60449 10.7975 7.8214 12.0991C8.68927 12.6087 9.07287 12.9659 10.039 12.7942L13.8437 16.6259C6.68354 19.0977 -1.35206 8.72767 0.192684 2.86579ZM11.0198 11.809L11.8544 10.9377C12.0951 10.686 12.4924 10.6828 12.7372 10.9303L15.8143 14.0444C16.059 14.292 16.0621 14.7004 15.8215 14.9519L14.9866 15.8233C14.7458 16.0749 14.3485 16.0781 14.1036 15.8305L11.0265 12.7164C10.7817 12.4691 10.7787 12.0607 11.0198 11.809ZM0.942648 1.03307L1.54833 0.277127C1.80796 -0.0468883 2.27851 -0.0936505 2.59373 0.173226L5.74393 2.84075C6.05915 3.1079 6.10424 3.5913 5.84487 3.91572L5.23893 4.67125C4.97916 4.99568 4.50875 5.04203 4.19339 4.77515L1.04373 2.10763C0.728507 1.84076 0.682745 1.35708 0.942648 1.03307Z" fill="black"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_762_918">
                                        <rect width="16" height="17" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <Link target="_blank" to={data.phone.link_1}>{data.phone.value_1}</Link> 
                                    / 
                                <Link target="_blank" to={data.phone.link_2}>{data.phone.value_2}</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <Icons/>
            </div>
        </div>

    </footer>)
}
export default Footer