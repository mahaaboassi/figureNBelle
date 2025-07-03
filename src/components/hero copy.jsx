import Icons from "./icons"

const Hero = ()=>{
    const services = [{
        name : "skin Care",
        link : "/"
    },{
        name : "Hair Care",
        link : "/"
    },{
        name : "Beauty",
        link : "/"
    },{
        name : "skin Care",
        link : "/"
    },{
        name : "Laser",
        link : "/"
    }]

    return(<section className="hero px-4 md:px-10  ">
        <div className="hero-container gap-2 sm:gap-5 px-5 sm:px-10">
            <h1 className="first-letters uppercase bodoniTX">
                <span>F</span>
                <span>I</span>
                <span>G</span>
                <span>U</span>
                <span>R</span>
                <span>E</span>
                &nbsp;
                <span>N</span>
                &nbsp;
                <span>B</span>
                <span>E</span>
                <span>L</span>
                <span>L</span>
                <span>E</span>
            </h1>
            <p className="hero-para">Experience advanced laser treatments, skin care, and holistic wellness — all tailored to your natural beauty.</p>
            <button className="uppercase">Book Now</button>
            {/* Cards PopUp */}
            <div className="fixed-content right-10 bottom-5 flex flex-col gap-5">
                <div className="flex gap-2">
                    {services.map((e,idx)=><div className="card-hero small-card">{e.name}</div>)}
                </div>
                <div className="card-hero p-5 flex flex-col items-center text-center gap-4 ">
                    <p> Call Now and Let Your Beauty Shine Through</p>
                    <Icons/>                   
                </div>
            </div>
        </div>
    </section>)
}
export default Hero