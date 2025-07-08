import { Link } from "react-router-dom"
import logo from "../assets/images/logo_figure.png"
import Icons from "./icons"
import { useEffect, useState } from "react"
import { services } from "../data/data"
const Footer = ()=>{
    const pages = [{
        name : "Home",
        link : "/"
    },{
        name : "Services",
        link : "/"
    },{
        name : "About",
        link : "/about"
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
    const [ slimming , setSlimming ] = useState([])
    const [ skin , setSkin ] = useState([])
    const [ hair , setHair ] = useState([])
    const [ beauty , setBeauty ] = useState([])
    const [ cosmetics , setCosmetics ] = useState([])
    const [ laser , setLaser] = useState([])
    useEffect(()=>{
        const temp_slimming = [];
        services[0].children.forEach((e)=>{
            temp_slimming.push(...e.services);
        })
        const temp_laser = [];
        services[1].children.forEach((e)=>{
                temp_laser.push(...e.services);
        })   
        const temp_skin = [];
        services[2].children.forEach((e)=>{
                temp_skin.push(...e.services);
        }) 
        const temp_hair = [];
        services[3].children.forEach((e)=>{
                temp_hair.push(...e.services);
        })    
        const temp_cosmetics = [];
        services[4].children.forEach((e)=>{
                temp_cosmetics.push(...e.services);
        }) 
        const temp_beauty = [];
        services[5].children.forEach((e)=>{
                temp_beauty.push(...e.services);
        }) 
        
        const getThreeUniqueItems = (array) => {
            if (!Array.isArray(array)) return [];

            const shuffled = [...array].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 8);
        };
        setSlimming(getThreeUniqueItems(temp_slimming));
        setCosmetics(getThreeUniqueItems(temp_cosmetics));
        setBeauty(getThreeUniqueItems(temp_beauty));
        setLaser(getThreeUniqueItems(temp_laser));
        setHair(getThreeUniqueItems(temp_hair));
        setSkin(getThreeUniqueItems(temp_skin));
    },[])
    return(<footer className="px-4 md:px-10 py-10 flex flex-col gap-10">
        <div className="flex flex-col gap-2">
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <p>At Figure N Belle, we combine beauty, science, and care to offer advanced skin and laser treatments tailored to your needs. Your confidence is our mission .</p>
            <p>© 2025, All Rights Reserved , Powered by <Link target="_blank" to={"https:/arizglobal.com"}>Ariz Global</Link></p>
            <Icons/>
        </div>
        <div className="second-div grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-6  gap-5">
            <div>
                <h3>
                    Slimming
                </h3>
                <ul className="flex flex-col gap-3">
                    {slimming.length > 0 && slimming.map((e,idx)=><li className="uppercase" key={`Pages_${idx}`}>
                        <Link to={e.link}>{e.name}</Link>
                    </li>)}
                    
                </ul>
            </div>
            <div>
                <h3>
                    Laser
                </h3>
                <ul className="flex flex-col gap-3">
                    {laser.length > 0 && laser.map((e,idx)=><li className="uppercase" key={`Support_${idx}`}>
                        <Link to={e.link}>{e.name}</Link>
                    </li>)}
                    
                </ul>
            </div>
            <div>
                <h3>
                    Skin Care
                </h3>
                <ul className="flex flex-col gap-3">
                    {skin.length > 0 && skin.map((e,idx)=><li className="uppercase" key={`Pages_${idx}`}>
                        <Link to={e.link}>{e.name}</Link>
                    </li>)}
                    
                </ul>
            </div>
            <div>
                <h3>
                    Hair Care
                </h3>
                <ul className="flex flex-col gap-3">
                    { hair.length > 0 && hair.map((e,idx)=><li className="uppercase" key={`Pages_${idx}`}>
                        <Link to={e.link}>{e.name}</Link>
                    </li>)}
                    
                </ul>
            </div>
            <div>
                <h3>
                    Cosmetics
                </h3>
                <ul className="flex flex-col gap-3">
                    { cosmetics.length > 0 && cosmetics.map((e,idx)=><li className="uppercase" key={`Pages_${idx}`}>
                        <Link to={e.link}>{e.name}</Link>
                    </li>)}
                    
                </ul>
            </div>
            <div>
                <h3>
                    Beauty & Grooming
                </h3>
                <ul className="flex flex-col gap-3">
                    {beauty.length > 0 && beauty.map((e,idx)=><li className="uppercase" key={`Pages_${idx}`}>
                        <Link to={e.link}>{e.name}</Link>
                    </li>)}
                    
                </ul>
            </div>
        </div>

    </footer>)
}
export default Footer