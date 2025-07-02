import Heading from "./heading"
// Images 
import img_1 from "../assets/images/skin_1.png"
import img_2 from "../assets/images/skin_2.png"
import img_3 from "../assets/images/skin_3.png"
import img_4 from "../assets/images/skin_4.png"

const Gallery = ()=>{
    return(<div className="px-4 md:px-10  flex flex-col gap-10">
        <Heading title={"OUR GALLERY"} description={"Explore our captivating BEFORE & AFTER GALLERY, showcasing the remarkable transformations achieved at Figure N Belle Beauty & Wellness Clinic "} />
        <div className="grid-container gap-2 md:gap-5">
            <img src={img_1} alt="Facial" className="item item-large" />
            <img src={img_2} alt="Room" className="item" />
            <img src={img_3} alt="Cleaning" className="item item-large" />
            <img src={img_4} alt="Injection" className="item  " />
        </div>

    </div>)
}
export default Gallery