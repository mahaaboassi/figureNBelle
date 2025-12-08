import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Host, menu, services } from "../../data/data"
import Gallery from "../../components/gallery"
import BookNow from "../../components/bookNow"
// Images
import Contact from "../../components/formContact"

const Service = ()=>{

    const { link } = useParams()
    const [ data, setData ] = useState({})
    const [ isSmallSize, setIsSmallSize ] = useState(false)
    const [ similarServices, setSimilarServices ] = useState([])
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
        const similar = services.find(e=>e.id == localStorage.getItem("similar_services"))
        let temp = []
        
        similar.children.forEach((ele)=>{
            temp = ele.services.filter(e=> e.link != `/${link}`)  
        })
        takeFourServices(temp)
    },[link])

    const takeFourServices = (data)=>{ 
        
        const getThreeUniqueItems = (array) => {
            if (!Array.isArray(array)) return [];

            const shuffled = [...array].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 4);
        };
        setSimilarServices(getThreeUniqueItems(data))
    }
    return(<article>
            <title>{data.name ? `${data.name} | Figure N Belle` : "Figure N Belle Clinic"}</title>
            <meta name="description" content={data.section_2?.desc_1 || "Premium beauty & wellness clinic in Delhi"} />
            <link rel="canonical" href={Host + (data.link || "/")} />
            <h1 className="pt-50" >test</h1>
    </article>)
}
export default Service