
// Images 
import img_1 from "../assets/images/girl__.png"
import img_2 from "../assets/images/skin_2.png"
import img_3 from "../assets/images/girl_.png"
import img_4 from "../assets/images/skin_4.png"

const BookNow = ()=>{
    return(<div className="px-4 md:px-10  py-20 py-20 flex flex-col gap-10 book">
        <div className="grid grid-cols-3 gap-2 md:gap-5">
            <img className="h-full w-full border-img" src={img_1} alt="Facial"  />
            <div className="flex flex-col justify-between conatiner-middle">
                <div className="flex flex-col gap-4">
                    <p className="text-center"> Call now and let your beauty shine through</p>
                    <button>BOOk NOW</button>
                </div>
                <div className="div-images flex gap-2 md:gap-5 grid grid-cols-2 justify-between" >
                    <div><img className="h-full w-full" src={img_2} alt="Room" /></div>
                    <div><img className="h-full w-full" src={img_4} alt="Injection"  /></div>
                </div>
            </div>
            <img className="h-full w-full border-img" src={img_3} alt="Cleaning"  />
            
            
        </div>

    </div>)
}
export default BookNow