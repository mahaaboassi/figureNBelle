import { Link } from "react-router-dom"
import logo from "../assets/images/logo_figure.png"
const Navbar = ()=>{

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
    const menu = [{
        name : "Home",
        link : "/"
    },{
        name : "Services",
        link : "/"
    },{
        name : "About",
        link : "/"
    },{
        name : "Blogs",
        link : "/"
    },{
        name : "Contact",
        link : "/"
    }]
    return(<nav className="flex justify-between items-center px-4 md:px-10  py-5">
        <div className="flex gap-2 items-center">
            <div className="menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M29 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8H29C29.2652 8 29.5196 7.89464 29.7071 7.70711C29.8946 7.51957 30 7.26522 30 7C30 6.73478 29.8946 6.48043 29.7071 6.29289C29.5196 6.10536 29.2652 6 29 6Z" fill="black"/>
                    <path d="M3 17H16C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16C17 15.7348 16.8946 15.4804 16.7071 15.2929C16.5196 15.1054 16.2652 15 16 15H3C2.73478 15 2.48043 15.1054 2.29289 15.2929C2.10536 15.4804 2 15.7348 2 16C2 16.2652 2.10536 16.5196 2.29289 16.7071C2.48043 16.8946 2.73478 17 3 17Z" fill="black"/>
                    <path d="M25 24H3C2.73478 24 2.48043 24.1054 2.29289 24.2929C2.10536 24.4804 2 24.7348 2 25C2 25.2652 2.10536 25.5196 2.29289 25.7071C2.48043 25.8946 2.73478 26 3 26H25C25.2652 26 25.5196 25.8946 25.7071 25.7071C25.8946 25.5196 26 25.2652 26 25C26 24.7348 25.8946 24.4804 25.7071 24.2929C25.5196 24.1054 25.2652 24 25 24Z" fill="black"/>
                </svg>
            </div>
           <img src={logo}  alt={"Logo"} />
        </div>
        <div className="flex gap-2">
            <div className="flex flex-col gap-5 nav-content">
                <div className="flex items-center gap-2 first-nav">
                    <div className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                            <g clipPath="url(#clip0_762_928)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.65446 14.7032C8.86671 15.5513 7.94931 16.3108 6.91917 16.9251C6.79234 17.0164 6.62042 17.0275 6.4795 16.9389C4.95755 15.9885 3.67939 14.8471 2.67462 13.6062C1.28795 11.899 0.415651 10.0064 0.116898 8.18299C-0.187492 6.33468 0.0971688 4.55554 1.0343 3.10982C1.40351 2.53845 1.8756 2.01827 2.45056 1.56865C3.7724 0.535199 5.28167 -0.0112691 6.78671 -0.000201362C8.23538 0.0108663 9.66573 0.540733 10.9016 1.64889C11.3357 2.03626 11.7006 2.48035 11.9994 2.96179C13.007 4.59151 13.224 6.66948 12.7815 8.77511C12.3446 10.8558 11.2596 12.9698 9.65446 14.6991V14.7032ZM6.49923 3.28691C8.28611 3.28691 9.73337 4.70911 9.73337 6.46196C9.73337 8.21619 8.2847 9.63701 6.49923 9.63701C4.71234 9.63701 3.26508 8.21619 3.26508 6.46196C3.26367 4.70773 4.71234 3.28691 6.49923 3.28691Z" fill="black"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_762_928">
                            <rect width="13" height="17" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <Link target="_blank" to={data.location.link_1}>{data.location.value_1}</Link> 
                            / 
                        <Link target="_blank" to={data.location.link_2}>{data.location.value_2}</Link>
                    </div>
                    <div className="line"></div>
                    <div className="flex gap-2 items-center">
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
                        <Link to={data.email.link}>{data.email.value}</Link>
                    </div>
                    <div className="line"></div>
                    <div className="flex gap-2 items-center">
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
                        <Link target="_blank" to={data.phone.link_1}>{data.phone.value_1}</Link> 
                            / 
                        <Link target="_blank" to={data.phone.link_2}>{data.phone.value_2}</Link>
                    </div>

                </div>
                <div>
                    <ul className="flex w-full justify-end gap-5 uppercase ">
                        {menu.map((e,idx)=><li><Link href={e.link}>
                        {e.name}
                        </Link></li>)}
                    </ul>
                    
                </div>
            </div>
            <div className="nav-icons">
                    <div >
                        <Link to={data.email.link}>
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
                        </Link>
                    </div>
                    <div>
                        <Link to={data.phone.link_1}>
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
                        </Link>
                    </div>
            </div>
            <div>
                <Link to={data.phone.link_1}>
                    <button className="uppercase main-btn !h-full">
                        <div>Call Us </div>
                        <div>{data.phone.value_1}</div>
                    </button>
                </Link>
            </div>
        </div>

    </nav>)
}

export default Navbar