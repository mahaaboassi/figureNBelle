import video from "../assets/videos/Figure & Belle Store Video.mp4"

const Hero = ()=>{

    return(<section className="hero ">
        <video
            className="w-full h-auto object-cover"
            src={video} 
            autoPlay      
            loop          
            muted  
            playsInline    
            />
    </section>)
}
export default Hero