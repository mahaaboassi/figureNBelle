import Heading from "./heading"
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation'; // optional modules
// Images 
import img_1 from "../assets/images/beforeAfter_1.png"
import img_2 from "../assets/images/beforeAfter_2.png"
import img_3 from "../assets/images/beforeAfter_3.png"
import img_4 from "../assets/images/beforeAfter_4.png"
import img_5 from "../assets/images/beforeAfter_5.png"
import img_6 from "../assets/images/beforeAfter_6.png"
import img_7 from "../assets/images/beforeAfter_7.png"
import img_8 from "../assets/images/beforeAfter_8.png"
import img_9 from "../assets/images/beforeAfter_9.png"
import img_10 from "../assets/images/beforeAfter_10.png"

import { Autoplay, Pagination, EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const AfterBefore = ()=>{
    const images = [img_1,img_3,img_5,img_6,img_7,img_8,img_9,img_10 ]
    return(<div className="px-4 md:px-10 flex flex-col gap-10 after-before" >
        <Heading title={"BEFORE & AFTER GALLERY"} description={"Explore our captivating BEFORE & AFTER GALLERY, showcasing the remarkable transformations achieved at Figure N Belle Beauty & Wellness Clinic "} />
        <div>
            <Swiper
                modules={[Autoplay,Pagination,EffectFade]}
                pagination={true}
                effect={'fade'}
                autoplay={{
                    delay: 5000,       // Slide every 3 seconds
                    disableOnInteraction: false, // Keep autoplay after user interaction
                  }}
                slidesPerView={1}
                >     
                {
                    images.map((e,idx)=>(<SwiperSlide key={`Before_After_${idx}`}>
                        <div className={`content `} >
                            <img className="w-full" src={e} alt={"image"} />
                        </div>
                    </SwiperSlide>))
                }
            </Swiper>

        </div>
    </div>)
}
export default AfterBefore