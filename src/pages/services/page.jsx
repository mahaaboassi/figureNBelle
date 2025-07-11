import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { menu } from "../../data/data"
import Gallery from "../../components/gallery"
import BookNow from "../../components/bookNow"
// Images
import shape from "../../assets/images/shape.png"
import Contact from "../../components/formContact"

const Service = ()=>{
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
    return(<div className="service px-4 md:px-10 ">
        <div className="hero-service relative">
            <img className="w-full" alt="banner" src={isSmallSize ? data?.img_small : data?.img} />
            <div className="absolute inset-0 flex px-2 md:px-10 items-center">
                <h1 className="bodoniTX">{data?.name}</h1>
            </div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-20">
            {
                data?.section_1 && data?.section_2 && data?.section_3 && data?.section_4 && <div className="col-span-2 mt-10 flex flex-col gap-5">
                <div className="">
                    <h2 className="bodoniTX">{data.section_1.title}</h2>
                    <p>{data.section_1.desc_1}</p>
                    <ul className="flex flex-col gap-1.5">
                        {data.section_1.options.map((e,idx)=>(<li key={`Section_1_${e}_${idx}`}>
                            {e}
                        </li>))}
                    </ul>
                    <p>{data.section_1.desc_2}</p>
                </div>
                <div>
                    <h2 className="bodoniTX">{data.section_2.title}</h2>
                    <p>{data.section_2.desc_1}</p>
                </div> 
                <div>
                    <h2 className="bodoniTX">{data.section_3.title}</h2>
                    <p>{data.section_3.desc_1}</p>
                    <ul className="flex flex-col gap-1.5">
                        {data.section_3.options.map((e,idx)=>(<li key={`Section_3_${e}_${idx}`}>
                            <span>{idx+1}. </span>{e}
                        </li>))}
                    </ul>
                </div>  
                <div>
                    <h2 className="bodoniTX">{data.section_4.title}</h2>
                    <p>{data.section_4.desc_1}</p>
                    <ul className="flex flex-col gap-1.5">
                        {data.section_4.section.map((e,idx)=>(<li key={`Section_4_${e}_${idx}`}>
                            <span className="ques">Q :</span> {e.question}
                            <div> <span className="ques">A : </span>{e.answer}</div>
                        </li>))}
                    </ul>
                </div>             
            </div>
            } 
            <div className="col-span-1 relative">
                <div className="sticky top-5 ">
                    <div className="relative">
                        {/* <div style={{zIndex:"-1"}} className="absolute top-0 right-0"><img src={shape} alt="shape" /></div> */}
                    </div>
                    <div className="pt-10 ">
                        <Contact/>
                    </div>
                    
                </div>
                
            </div>
        </div>
            

        <div>
            <Gallery/> 
            <BookNow/> 
        </div>    
    </div>)
}
export default Service