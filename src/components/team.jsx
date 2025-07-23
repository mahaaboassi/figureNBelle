import Heading from "./heading"
// Images
import img_1 from "../assets/images/team_1.png"
import img_2 from "../assets/images/team_2.png"
import img_3 from "../assets/images/team_3.png"
import img_4 from "../assets/images/team_4.png"
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation'; // optional modules
import { Pagination, EffectFade, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Link } from "react-router-dom"


const Team = ()=>{
    const data = [
  {
    name: "Dr. Maya Thompson",
    description: "An experienced dermatologist with a passion for personalized skincare and cosmetic excellence. Dr. Thompson blends medical knowledge with an artistic eye to deliver natural-looking results.",
    certification: [
      "Board Certified in Dermatology",
      "Certified Laser Skin Specialist",
      "Member of the American Academy of Dermatology"
    ],
    img: img_1
  },
  {
    name: "Dr. Daniel Nguyen",
    description: "Specialist in non-invasive slimming and advanced laser therapies. Dr. Nguyen is dedicated to providing safe and effective beauty solutions tailored to each client’s needs.",
    certification: [
      "Certified Aesthetic Physician",
      "Diploma in Laser & Light-Based Therapies",
      "Certified Body Contouring Practitioner"
    ],
    img: img_2
  },
  {
    name: "Dr. Elias Carter",
    description: "A skilled dermatologist focused on skin rejuvenation and hair care. Dr. Carter uses cutting-edge treatments and clinical insight to restore skin and scalp health.",
    certification: [
      "Board Certified Dermatologist",
      "Certified Trichologist (Hair & Scalp Expert)",
      "Advanced Skin Restoration Techniques Certified"
    ],
    img: img_3
  },
  {
    name: "Dr. Leo Martins",
    description: "Expert in cosmetic dermatology, pigmentation correction, and holistic skin wellness. Dr. Martins is known for delivering results that reflect both beauty and balance.",
    certification: [
      "Certified Cosmetic Dermatology Specialist",
      "Accredited in Aesthetic Medicine (AAAM)",
      "Laser & Pigmentation Treatment Certification"
    ],
    img: img_4
  }
]
    const lastSlider = ()=>{document.querySelector(".team .swiper-button-prev").click()}
    const nextSlider = ()=>{document.querySelector(".team .swiper-button-next").click()}
    

    return(<div className="px-4 md:px-10 flex flex-col gap-10 team">
        <Heading title={"MEET OUR DERMATOLOGISTS"} description={"Our expert dermatologists deliver personalized care, advanced treatments, and dedicated support for your skin’s health and beauty."} />
        <div className="flex gap-4 justify-center">
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
        <div>
            <Swiper
                modules={[Navigation]}
                navigation
                className="h-full w-full"
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                        200: {
                        slidesPerView: 1,
                        },
                        500: {
                        slidesPerView: 2,
                        },
                    }}
                >     
                {
                    data.map((e,idx)=>(<SwiperSlide key={`Meet_Our_Team_${e.name}_${idx}`}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 container-team p-4">
                            <div className="team-container-img">
                                <img src={e.img} alt={`Team_${idx}`} />
                                
                            </div>
                            <div className="container-name flex flex-col gap-5 justify-between ">
                                    <div className="flex flex-col gap-3">
                                        <h3 >{e.name}</h3>
                                        
                                        <p>{e.description}</p>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <p><strong>Certification:</strong></p>
                                        <ul className="flex flex-col gap-1" >
                                            {e.certification.map((ele,i)=>(<li key={`Certification_${e}_${i}`}>
                                                {ele}
                                            </li>))}
                                        </ul>
                                        
                                    </div>
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
    </div>)
}
export default Team