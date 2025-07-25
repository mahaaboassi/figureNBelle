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
import { Host } from "../../data/data"

const Home = ()=>{
    return<article className="flex flex-col gap-10 sm:gap-16 md:gap-20">
        <title>Figure N Belle</title>
        <meta name="description" content="Figure N Belle Beauty Clinic offers luxurious beauty treatments tailored to enhance your natural radiance. Experience expert care in slimming, laser hair removal, skincare, hair restoration, and cosmetic enhancements — all in an elegant, state-of-the-art clinic." />
        <link rel="canonical" href={Host}></link>
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
    </article>
}
export default Home 