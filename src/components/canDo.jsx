import { Link } from "react-router-dom"
import img from "../assets/images/we-can-do.png"

const CanDo = ()=>{

    return(<div className="flex flex-col-reverse md:gap-5 lg:gap-20 md:grid grid-cols-2 gap-5 px-4 md:px-10 about bg-white py-10 about">
        <div className="flex flex-col justify-between gap-5 ">
            <h2 className="bodoniTX">What We Can Do</h2>
            <p>At Figure N Belle Beauty Clinic, we specialize in enhancing your natural beauty through advanced treatments and personalized care. Our expert team offers a wide range of services, including slimming and body contouring, laser hair removal, skin care solutions, hair treatments, and cosmetic enhancements — all delivered in a luxurious, welcoming environment.</p>
            <p>We are committed to delivering visible results using the latest technologies and high-quality products. Whether you're looking to rejuvenate your skin, sculpt your body, or simply relax and pamper yourself, Figure N Belle is your trusted destination for complete beauty and grooming solutions.</p>
            <Link  to="/book-an-appointment"><button>Book an Appointment</button></Link>
            
        </div>
        <div className="flex justify-center ">
            <img className="h-full w-full " src={img} alt="Model" />
        </div>
    
        
    </div>)
}
export default CanDo