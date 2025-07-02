import model from "../assets/images/model_4.png"
const About = ()=>{
    return(<div className="flex flex-col md:grid grid-cols-2 gap-5 px-4 md:px-10  py-20 about">
        <div className="flex justify-center">
            <img src={model} alt="Model" />
        </div>
    
        <div className="flex flex-col justify-between">
            <h2 className="bodoniTX">Over 15 Years of Experience</h2>
            <p>With 15+ years in the beauty and wellness industry,
                we specialize in combining modern techniques with holistic care to enhance natural beauty.
                Our approach focuses on personalized treatments that nurture both body and spirit, blending science,
                self-care, and luxury to create truly transformative experiences.
            </p>
            <p>Experience beauty redefined—where innovation meets inner harmony.</p>
            <div><span className="more">Read More</span></div>
        </div>
    </div>)
}
export default About