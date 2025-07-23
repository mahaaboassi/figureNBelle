import About from "../../components/aboutUs"
import AfterBefore from "../../components/afterBefore"
import BookNow from "../../components/bookNow"
import CanDo from "../../components/canDo"
import ChooseUs from "../../components/chooseUs"
import Gallery from "../../components/gallery"
import Hero from "../../components/hero"
import Instagram from "../../components/instgram"
import Services from "../../components/services"
import Team from "../../components/team"

const Home = ()=>{
    return<div className="flex flex-col gap-10 sm:gap-16 md:gap-20">
        <Hero/>
        <Team/>
        <About/>
        
        <ChooseUs/>
        <CanDo/>
        <Services/>
        
        <AfterBefore/>
        <Instagram/>
        <div>
            <Gallery/>
            <BookNow/>
        </div>
    </div>
}
export default Home 