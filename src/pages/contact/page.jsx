import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { dataContact, Host, menu } from "../../data/data"
import Gallery from "../../components/gallery"
import BookNow from "../../components/bookNow"
// Images
import Contact from "../../components/formContact"
import img_small from "../../assets/images/contact_small.webp"
import img from "../../assets/images/contact.webp"
import Heading from "../../components/heading"

const ContactPage = ()=>{
    const { link } = useParams()
    const [ data, setData ] = useState({})
    const [ isSmallSize, setIsSmallSize ] = useState(false)
    useEffect(()=>{
        menu.forEach((e)=>{
            e.children.forEach((child)=>{
                child.services.forEach((subChild)=>{

                    if(subChild.link == `/${link}`){
                        setData(subChild)
                        
                    }
                })
            })
        })
        if(window.innerWidth < 500){
                setIsSmallSize(true)
        }
        window.scrollTo({top:0})
        
    },[link])
    return(<article className="service flex flex-col gap-10">
        <title>Contact Us | Figure N Belle</title>
        <meta name="description" content="Ready for your beauty transformation? Book your appointment at Figure N Belle and let our expert team take care of the rest." />
        <link rel="canonical" href={`${Host}/book-an-appointment`}></link>

        
        <div className="hero-service relative">
            <img className="w-full" alt="banner" src={isSmallSize ? img_small :img} />
            <div className="absolute inset-0 flex px-2 md:px-10 items-center">
                <h1 className="bodoniTX">Contact Us</h1>
            </div>

        </div>
        <div className="grid sm:grid-cols-3 gap-5 md:gap-10  px-4 md:px-10">
            <div className="flex items-centet justify-center flex-col card-contact p-5">
                <h2 className="flex gap-1 items-center justify-center text-[var(--main)]">
                    <div className="w-[40px] h-[40px] border flex items-center justify-center rounded-full border-[var(--main)] text-[var(--main)]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 17" fill="none">
                            <g clipPath="url(#clip0_762_918)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.192684 2.86579C1.46151 3.76174 2.72025 4.66281 3.78274 5.82301C3.1737 8.58821 5.60449 10.7975 7.8214 12.0991C8.68927 12.6087 9.07287 12.9659 10.039 12.7942L13.8437 16.6259C6.68354 19.0977 -1.35206 8.72767 0.192684 2.86579ZM11.0198 11.809L11.8544 10.9377C12.0951 10.686 12.4924 10.6828 12.7372 10.9303L15.8143 14.0444C16.059 14.292 16.0621 14.7004 15.8215 14.9519L14.9866 15.8233C14.7458 16.0749 14.3485 16.0781 14.1036 15.8305L11.0265 12.7164C10.7817 12.4691 10.7787 12.0607 11.0198 11.809ZM0.942648 1.03307L1.54833 0.277127C1.80796 -0.0468883 2.27851 -0.0936505 2.59373 0.173226L5.74393 2.84075C6.05915 3.1079 6.10424 3.5913 5.84487 3.91572L5.23893 4.67125C4.97916 4.99568 4.50875 5.04203 4.19339 4.77515L1.04373 2.10763C0.728507 1.84076 0.682745 1.35708 0.942648 1.03307Z" fill="currentColor"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_762_918">
                            <rect width="16" height="17" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                    Call Us</h2>
                <div className="flex flex-col gap-1 justify-center text-center ">
                    <div><Link className="underline break-all" target="_blank" to={dataContact.phone.link_1}>{dataContact.phone.value_1}</Link> </div>
                    <div><Link className="underline break-all" target="_blank" to={dataContact.phone.link_1}>{dataContact.phone.value_1}</Link> </div>
                </div>
            </div>
            <div className="flex items-centet justify-center flex-col card-contact p-5">
                <h2 className="flex gap-1 items-center text-[var(--main)] justify-center">
                    <div className="w-[40px] h-[40px] border flex items-center justify-center rounded-full border-[var(--main)] text-[var(--main)]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" viewBox="0 0 19 12" fill="none">
                                <g clipPath="url(#clip0_762_923)">
                                <path d="M0.587565 0L9.66081 6.7103L18.3459 0H0.587565ZM0 11.2918L6.46322 5.41451L0 0.635269V11.2932V11.2918ZM7.17603 5.9418L0.5118 12H18.4325L12.0605 5.9418L9.96387 7.56433C9.88212 7.62613 9.77942 7.66056 9.673 7.66184C9.56658 7.66311 9.46292 7.63116 9.3794 7.57135L7.17603 5.9418ZM12.761 5.4033L19 11.3395V0.583382L12.761 5.4033Z" fill="currentColor"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_762_923">
                                <rect width="19" height="12" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                    </div>
                    Mail Us</h2>
                <div className="flex flex-col gap-1 justify-center text-center">
                    <div><Link className="underline break-all" target="_blank" to={dataContact.email.link}>{dataContact.email.value}</Link> </div>
                </div>
            </div>
            <div className="flex items-centet justify-center flex-col card-contact p-5">
                <h2 className="flex gap-1 items-center text-[var(--main)] justify-center">
                    <div className="w-[40px] h-[40px] border flex items-center justify-center rounded-full border-[var(--main)] text-[var(--main)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 23 26" fill="none">
                        <g clip-path="url(#clip0_1047_1287)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.390964 3.10824H5.12853L5.12226 3.02572V0.873861C5.12226 0.393555 5.61567 0 6.22198 0C6.8262 0 7.3217 0.395671 7.3217 0.873861V3.02572L7.31543 3.10824H15.3835L15.3772 3.02572V0.873861C15.3772 0.393555 15.8706 0 16.4749 0C17.0791 0 17.5746 0.395671 17.5746 0.873861V3.02572L17.5683 3.10824H22.609C22.8244 3.10824 23 3.28597 23 3.50391V7.62142C23 7.83936 22.8244 8.01709 22.609 8.01709H0.390964C0.17562 8.01497 0 7.83724 0 7.6193V3.50179C0 3.28385 0.17562 3.10824 0.390964 3.10824ZM6.5544 17.674C6.07981 17.2572 6.02754 16.5293 6.43941 16.0469C6.85129 15.5645 7.57049 15.5116 8.04718 15.9284L10.6501 18.2135L14.8964 13.9733C15.3417 13.5247 16.0651 13.5269 16.5083 13.9775C16.9515 14.4282 16.9495 15.1603 16.5041 15.6089L11.5031 20.6024C11.085 21.0234 10.4076 21.0552 9.95391 20.6574L6.5544 17.674ZM0.0982638 8.92692H22.9038C22.9582 8.92692 23 8.97135 23 9.02637V25.9027C23 25.9556 22.9561 26 22.9038 26H0.0982638C0.0459958 26 0.00209072 25.9556 0.00209072 25.9027V9.02637C0 8.97135 0.0439051 8.92692 0.0982638 8.92692ZM1.8482 10.7021H21.4675C21.5762 10.7021 21.664 10.7974 21.664 10.901V24.1994C21.664 24.3031 21.5699 24.3983 21.4675 24.3983H1.75411C1.65167 24.3983 1.55759 24.3094 1.55759 24.1994V10.9963C1.55759 10.7783 1.73321 10.6027 1.94646 10.6027L1.8482 10.7021ZM16.3787 6.32015C16.9829 6.32015 17.4784 5.92448 17.4784 5.44629V3.1971L17.4721 3.11035H15.2873L15.2811 3.1971V5.34684C15.2811 5.82715 15.7745 6.2207 16.3787 6.2207V6.32015ZM6.12372 6.32015C6.72793 6.32015 7.22343 5.92448 7.22343 5.44629V3.1971L7.21716 3.11035H5.03027L5.024 3.1971V5.34684C5.024 5.82715 5.51741 6.2207 6.12163 6.2207V6.32015H6.12372Z" fill="currentColor"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1047_1287">
                        <rect width="23" height="26" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </div>
                    Book Now</h2>
                <div className="flex flex-col gap-1 justify-center text-center">
                    <div><Link className="underline break-all" target="_blank" to="/book-an-appointment">Book Now</Link> </div>
                </div>
            </div>
    </div>
        <div className="flex flex-col gap-5  px-4 md:px-10   ">
            <Heading title={"Find us now!"} description={"Explore our locations on the map below and choose the one most convenient for you"} />
            <div className="grid md:grid-cols-2 gap-10">
                <div className="flex flex-col">
                    <div className="flex gap-2 items-center justify-center bg-[var(--main)] p-2 text-[var(--light)]">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                            <g clip-path="url(#clip0_922_838)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.65446 14.7032C8.86671 15.5513 7.94931 16.3108 6.91917 16.9251C6.79234 17.0164 6.62042 17.0275 6.4795 16.9389C4.95755 15.9885 3.67939 14.8471 2.67462 13.6062C1.28795 11.899 0.415651 10.0064 0.116898 8.18299C-0.187492 6.33468 0.0971688 4.55554 1.0343 3.10982C1.40351 2.53845 1.8756 2.01827 2.45056 1.56865C3.7724 0.535199 5.28167 -0.0112691 6.78671 -0.000201362C8.23538 0.0108663 9.66573 0.540733 10.9016 1.64889C11.3357 2.03626 11.7006 2.48035 11.9994 2.96179C13.007 4.59151 13.224 6.66948 12.7815 8.77511C12.3446 10.8558 11.2596 12.9698 9.65446 14.6991V14.7032ZM6.49923 3.28691C8.28611 3.28691 9.73337 4.70911 9.73337 6.46196C9.73337 8.21619 8.2847 9.63701 6.49923 9.63701C4.71234 9.63701 3.26508 8.21619 3.26508 6.46196C3.26367 4.70773 4.71234 3.28691 6.49923 3.28691Z" fill="currentColor"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_922_838">
                            <rect width="13" height="17" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                        {dataContact.location.value_1}
                    </div>
                    <iframe className="w-full h-[300px] lg:h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8894963511034!2d77.17078029999999!3d28.692951999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d033cd9a1bd23%3A0xd77064f73a65be9e!2sFigure%20N%20Belle%20-%20Beauty%20%26%20Wellness%20Clinic!5e0!3m2!1sen!2sae!4v1769534952442!5m2!1sen!2sae" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="flex flex-col ">
                    <div className="flex gap-2 items-center justify-center bg-[var(--main)] p-2 text-[var(--light)]">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                            <g clip-path="url(#clip0_922_838)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.65446 14.7032C8.86671 15.5513 7.94931 16.3108 6.91917 16.9251C6.79234 17.0164 6.62042 17.0275 6.4795 16.9389C4.95755 15.9885 3.67939 14.8471 2.67462 13.6062C1.28795 11.899 0.415651 10.0064 0.116898 8.18299C-0.187492 6.33468 0.0971688 4.55554 1.0343 3.10982C1.40351 2.53845 1.8756 2.01827 2.45056 1.56865C3.7724 0.535199 5.28167 -0.0112691 6.78671 -0.000201362C8.23538 0.0108663 9.66573 0.540733 10.9016 1.64889C11.3357 2.03626 11.7006 2.48035 11.9994 2.96179C13.007 4.59151 13.224 6.66948 12.7815 8.77511C12.3446 10.8558 11.2596 12.9698 9.65446 14.6991V14.7032ZM6.49923 3.28691C8.28611 3.28691 9.73337 4.70911 9.73337 6.46196C9.73337 8.21619 8.2847 9.63701 6.49923 9.63701C4.71234 9.63701 3.26508 8.21619 3.26508 6.46196C3.26367 4.70773 4.71234 3.28691 6.49923 3.28691Z" fill="currentColor"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_922_838">
                            <rect width="13" height="17" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                        {dataContact.location.value_2}
                    </div>
                    <iframe className="w-full h-[300px] lg:h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8923500569927!2d77.09024079999999!3d28.632988299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d050723ec9877%3A0xdf4e6218486896eb!2sFigure%20N%20Belle%20-%20Beauty%20%26%20Wellness%20Clinic%20Janakpuri!5e0!3m2!1sen!2sae!4v1769535004641!5m2!1sen!2sae" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>

        </div>

        <div>
            <Gallery/> 
            <BookNow/> 
        </div>    
    </article>)
}
export default ContactPage