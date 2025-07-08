import InstagramCard from "./instagramCard"
import logo from "../assets/images/logo_figure_shape.png"
import Heading from "./heading"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation'; // optional modules

import { Navigation } from 'swiper/modules';
// Videos
import reel_1 from "../assets/videos/reel_1.mp4"
import reel_3 from "../assets/videos/reel_3.mp4"
import reel_4 from "../assets/videos/reel_4.mp4"
import reel_5 from "../assets/videos/reel_5.mp4"
import reel_6 from "../assets/videos/reel_6.mp4"
import reel_7 from "../assets/videos/reel_7.mp4"
import reel_8 from "../assets/videos/reel_8.mp4"
import reel_1_img from "../assets/images/reel_1.jpg"
import reel_3_img from "../assets/images/reel_3.jpg"
import reel_4_img from "../assets/images/reel_4.jpg"
import reel_5_img from "../assets/images/reel_5.jpg"
import reel_6_img from "../assets/images/reel_6.jpg"
import reel_7_img from "../assets/images/reel_7.jpg"
import reel_8_img from "../assets/images/reel_8.jpg"

const Instagram = ()=>{
    const reels = [{
            reelImg : reel_1_img,
            likes: 37,
            comments: 2,
            reelLink : reel_1,
            linkAction : "https://www.instagram.com/reel/CtOutaZACPD/?utm_source=ig_embed&ig_rid=62246153-db3d-40a0-bfc4-55c642e37df9"
    },{
            reelImg : reel_7_img,
            likes: 61,
            comments: 1,
            reelLink : reel_7,
            linkAction : "https://www.instagram.com/reel/CtEvPP_Lvng/?utm_source=ig_embed&ig_rid=89946ded-a1f3-4659-8357-480209225bb9"
    },{
            reelImg : reel_3_img,
            likes: 63,
            comments: 2,
            reelLink : reel_3,
            linkAction : "https://www.instagram.com/reel/Cstb1Qdu2nb/?utm_source=ig_embed&ig_rid=f396c987-f39a-4ee0-bc78-b443e5c0f0af"
    },{
            reelImg : reel_4_img,
            likes: 37,
            comments: 2,
            reelLink : reel_4,
            linkAction : "https://www.instagram.com/reel/CtOutaZACPD/?utm_source=ig_embed&ig_rid=62246153-db3d-40a0-bfc4-55c642e37df9"
    },{
            reelImg : reel_5_img,
            likes: 61,
            comments: 1,
            reelLink : reel_5,
            linkAction : "https://www.instagram.com/reel/CtEvPP_Lvng/?utm_source=ig_embed&ig_rid=89946ded-a1f3-4659-8357-480209225bb9"
    },{
            reelImg : reel_6_img,
            likes: 63,
            comments: 2,
            reelLink : reel_6,
            linkAction : "https://www.instagram.com/reel/Cstb1Qdu2nb/?utm_source=ig_embed&ig_rid=f396c987-f39a-4ee0-bc78-b443e5c0f0af"
    },{
            reelImg : reel_8_img,
            likes: 63,
            comments: 2,
            reelLink : reel_8,
            linkAction : "https://www.instagram.com/reel/Cstb1Qdu2nb/?utm_source=ig_embed&ig_rid=f396c987-f39a-4ee0-bc78-b443e5c0f0af"
    }]
    const lastSlider = ()=>{document.querySelector(".reels .swiper-button-prev").click()}
    const nextSlider = ()=>{document.querySelector(".reels .swiper-button-next").click()}
    
    return(<div className="px-4 md:px-10  py-20 flex flex-col gap-10 reels">
            <div className="flex flex-col gap-4">
                <Heading isCenter={false} title={"POSTS & REELS"} description={"Discover the latest beauty tips, real client transformations, and behind-the-scenes moments from our clinic. Stay inspired and updated with our Instagram posts & reels"} /> 
                <div className="flex gap-4 ">
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
            </div>
            <div>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        200: {
                        slidesPerView: 2,
                        },
                        435: {
                        slidesPerView: 3,
                        },
                        640: {
                        slidesPerView: 4,
                        },
                        1024: {
                        slidesPerView: 6,
                        
                        },
                    }}>     
                    {
                        reels.map((e,idx)=>(<SwiperSlide key={`Reels_${idx}`}>
                            <div className={``} >
                            <InstagramCard
                                    profileImg={logo}
                                    username="figurenbelle"
                                    followers="1.2K"
                                    reelImg={e.reelImg}
                                    likes={e.likes}
                                    comments={e.comments}
                                    reelLink={e.reelLink}
                                    linkAction={e.linkAction}
                                    />
                            </div>
                        </SwiperSlide>))
                    }

                     
                </Swiper>
            </div>
            
                
    </div>)
}
export default Instagram