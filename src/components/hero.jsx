import img_1 from "../assets/images/banner_figure_1.png"
import img_2 from "../assets/images/banner_figure_2.png"
import img_3 from "../assets/images/banner_figure_3.png"
// Small Size
import img_small_1 from "../assets/images/banner_small_1.png"
import img_small_2 from "../assets/images/banner_small_2.png"
import img_small_3 from "../assets/images/banner_small_3.png"
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation'; // optional modules
import { Autoplay, Pagination, EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useEffect, useState } from "react"

const Hero = ()=>{
    const small_images = [img_small_1,img_small_2,img_small_3]
    const large_images = [img_1,img_2,img_3]
    const [ images, setImages ] = useState(large_images)
    useEffect(()=>{
        if(window.innerWidth < 500){
            setImages(small_images)
        }
    },[])
    return(<section className="hero px-4 md:px-10  ">
        <div className=" ">
            <Swiper
                modules={[Autoplay,Pagination,EffectFade]}
                pagination={true}
                className="h-full w-full"
                effect={'fade'}
                autoplay={{
                    delay: 5000,       // Slide every 3 seconds
                    disableOnInteraction: false, // Keep autoplay after user interaction
                  }}
                slidesPerView={1}
                >     
                {
                    images.map((e,idx)=>(<SwiperSlide key={`Hero_${idx}`}>
                            <img className="w-full" src={e} alt={"image"} />
                    </SwiperSlide>))
                } 
                {/* {
                    .map((e,idx)=>(<SwiperSlide key={`Hero_${idx}`}>
                            <img className="w-full" src={e} alt={"image"} />
                    </SwiperSlide>))
                } */}
            </Swiper>
        </div>
    </section>)
}
export default Hero