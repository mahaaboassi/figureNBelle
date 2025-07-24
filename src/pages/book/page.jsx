import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { menu } from "../../data/data"
import Gallery from "../../components/gallery"
import BookNow from "../../components/bookNow"
// Images
import Contact from "../../components/formContact"
import img_small from "../../assets/images/book_small.png"
import img from "../../assets/images/book_large.png"
import Heading from "../../components/heading"

const BookAnAppointment = ()=>{
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
    return(<div className="service px-4 md:px-10 flex flex-col gap-10">
        <div className="hero-service relative">
            <img className="w-full" alt="banner" src={isSmallSize ? img_small :img} />
            <div className="absolute inset-0 flex px-2 md:px-10 items-center">
                <h1 className="bodoniTX">Enhanced Your Beauty</h1>
            </div>

        </div>
        <div className="flex flex-col gap-5 w-full  md:w-3/4 lg:w-1/2 m-auto ">
            

            <Heading title={"Book an Appointment"} description={"Submit your details and our team will contact you to arrange your appointment"} />
            <Contact fromPage={true} />
        </div>
        <div>
            <Gallery/> 
            <BookNow/> 
        </div>    
    </div>)
}
export default BookAnAppointment