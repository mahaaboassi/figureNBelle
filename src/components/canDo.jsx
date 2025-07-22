import img from "../assets/images/we-can-do.png"

const CanDo = ()=>{

    return(<div className="flex flex-col-reverse gap-20 md:grid grid-cols-2 gap-5 px-4 md:px-10 about bg-white py-10">
        <div className="flex flex-col justify-between ">
            <h2 className="bodoniTX">What We Can Do</h2>
            <p>
                Choose Figure N Belle Beauty & Wellness Clinic for a transformative experience that goes beyond conventional beauty treatments Choose Figure N Belle Beauty & Wellness Clinic for a transformative experience that goes beyond conventional beauty treatments Choose Figure N Belle Beauty & Wellness Clinic for a transformative experience that goes beyond conventional beauty treatments
            </p>
            <p>Choose Figure N Belle Beauty & Wellness Clinic for a transformative experience that goes beyond conventional beauty treatments Choose Figure N Belle Beauty & Wellness Clinic for a transformative experience.</p>
            <button>Book Now</button>
            
        </div>
        <div className="flex justify-center ">
            <img className="h-full w-full " src={img} alt="Model" />
        </div>
    
        
    </div>)
}
export default CanDo