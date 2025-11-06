import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "./heading"
// Images
import img_1 from "../assets/images/doc_1.webp"
import img_2 from "../assets/images/doctor_2.webp"
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation'; // optional modules
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Link } from "react-router-dom"



const Team = ()=>{
    const data = [
        {
            name: "Shweta",
            hint: "Director, Figure N Belle",
            description: "Starting her career as a professional dietician, Shweta evolved into a multi-faceted wellness expert, curating personalized treatment plans that integrate skincare, body contouring, and non-invasive aesthetics. Her leadership ensures that every service, from facials and PRP therapy to Botox and Cryo Fat Freeze, is delivered with precision, care, and visible results.",
            desc_2: "Shweta’s vision is simple: empower women and men to feel their best, inside and out. Under her guidance, Figure N Belle has become one of Delhi’s most trusted destinations for doctor-led aesthetic treatments and advanced wellness solutions.",
            desc_3: "",
            desc_4: "“Every face, every body, every client is unique. Our job is to listen, treat, and transform, with heart and science.” Shweta",
            certification: [],
            img: img_2
        },{
            name: "Shifali ",
            hint: "Director, Figure N Belle",
            description: "A Trusted Wellness & Beauty Mentor for Women Across Delhi With over 20+ years of hands-on experience in client wellness, skincare, and lifestyle transformation, Shifali has become a pillar of trust and care for hundreds of women seeking real, visible results. Her early career in nutrition laid the foundation for her deep understanding of the connection between inner health and outer beauty.",
            desc_2: "Today, she leads operations and client consultation at Figure N Belle, ensuring every person who walks into the clinic feels seen, heard, and beautifully transformed. From skin rejuvenation and anti-aging to hair fall treatments, fat freezing, and laser solutions, Shifali blends science with sincerity in every service she supervises.", 
            desc_3: "Her approach is holistic, warm, and results-driven, which is why many of Figure N Belle’s clients have stayed loyal for years.",
            desc_4: "“Beauty should never feel intimidating. It should feel empowering, achievable, and most importantly real.”  Shifali",
            certification: [],
            img: img_1
        },
    ]
    const [ currentData, setCurrentData ] = useState({})
    const lastSlider = ()=>{document.querySelector(".team .swiper-button-prev").click()}
    const nextSlider = ()=>{document.querySelector(".team .swiper-button-next").click()}
    

    return(<div className="px-4 md:px-10 flex flex-col gap-5 md:gap-10 team">
        <Heading title={"MEET OUR DERMATOLOGISTS"} description={"Our expert dermatologists deliver personalized care, advanced treatments, and dedicated support for your skin’s health and beauty."} />
        <div className="flex gap-4 justify-center flex lg:hidden">
            <div onClick={lastSlider} className="last-slide cursor-pointer" >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="23" viewBox="0 0 14 23" fill="none">
                    <path d="M0.390625 19.7237L8.59646 11.5L0.390625 3.27625L2.91688 0.75L13.6669 11.5L2.91688 22.25L0.390625 19.7237Z" fill="white"/>
                </svg>
            </div>
            <div onClick={nextSlider} className="next-slide cursor-pointer" >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="23" viewBox="0 0 14 23" fill="none">
                    <path d="M0.390625 19.7237L8.59646 11.5L0.390625 3.27625L2.91688 0.75L13.6669 11.5L2.91688 22.25L0.390625 19.7237Z" fill="white"/>
                </svg>
            </div>
        </div>
        <div >
            <Swiper
                modules={[Navigation]}
                navigation
                className="w-full"
                slidesPerView={1}
                spaceBetween={20}
                // autoplay={{
                //     delay: 2000,       // Slide every 3 seconds
                //     disableOnInteraction: false, // Keep autoplay after user interaction
                //   }}
                breakpoints={{
                        200: {
                        slidesPerView: 1,
                        },
                        768: {
                        slidesPerView: 2,
                        },
                    }}
                >     
                {
                    data.map((e,idx)=>(<SwiperSlide className="" key={`Meet_Our_Team_${e.name}_${idx}`}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-5 container-team p-4  xl:min-h-[450px]">
                            <div className="team-container-img h-[300px] md:h-[250px] lg:h-[100%]  ">
                                <img style={{objectFit:"cover"}} src={e.img} alt={`Team_${idx}`} />
                                
                            </div>
                            <div className="container-name flex flex-col gap-3 md:gap-5 justify-between ">
                                    <div className="flex flex-col gap-2 md:gap-3">
                                        <div>
                                            <h3 className="!text-xl md:!text-3xl" >{e.name}</h3>
                                            <p className="text-[var(--grey-1)]">{e.hint}</p>
                                        </div>
                                        <p>{e.description}</p>
                                        {/* <p>{e?.desc_2}</p>
                                        <p>{e.desc_3}</p> */}
                                        <p className="italic !text-2xs text-[var(--grey-1)]">{e.desc_4} </p>
                                        <span onClick={()=>setCurrentData(e)} className="cursor-pointer text-sm text-[var(--main)]">
                                            See More
                                        </span>
                                    </div>
                                    {/* <div className="flex flex-col gap-2 md:gap-3">
                                        <p><strong>Certification:</strong></p>
                                        <ul className="flex flex-col gap-0.5 md:gap-1" >
                                            {e.certification.map((ele,i)=>(<li key={`Certification_${e}_${i}`}>
                                                {ele}
                                            </li>))}
                                        </ul>
                                        
                                    </div> */}
                                    <div className="w-full">
                                        <Link to="/book-an-appointment">
                                            <button className="w-full" >Book an Appointment </button>
                                        </Link>
                                            
                                    </div>
                                </div>
                                
                        </div>
                            
                    </SwiperSlide>))
                } 


            </Swiper>
        </div>
        <AnimatePresence>
                {Object.keys(currentData).length > 0  && (
                    <motion.div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    >
                    <motion.div
                        className="bg-white rounded-2xl max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    >
                        <div className="flex justify-end">
                            <button
                                onClick={() => setCurrentData({})}
                                className="absolute top-3 right-3 text-gray-50 !p-3 !h-[30px] flex items-center 0 hover:text-black"
                                >
                                ✕
                                </button>
                        </div>

                        <h3 className="text-2xl font-semibold mb-2 text-[var(--main)]">{currentData.name}</h3>
                        <p className="text-sm text-xs text-gray-600 mb-4">{currentData.hint}</p>
                        <p className="mb-2 text-xs xs:text-sm">{currentData.description}</p>
                        <p className="mb-2 text-xs xs:text-sm">{currentData.desc_2}</p>
                        <p className="mb-2 text-xs xs:text-sm">{currentData.desc_3}</p>
                        <p className="italic text-xs xs:text-sm text-gray-500">{currentData.desc_4}</p>
                    </motion.div>
                    </motion.div>
                )}
                </AnimatePresence>

    </div>)
}
export default Team