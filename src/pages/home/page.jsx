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
        <meta
            name="description"
            content="Figure N Belle is a premium beauty and wellness clinic offering advanced skincare, laser hair reduction, slimming treatments, and personalized aesthetic solutions in Delhi. Restore your glow with safe, effective, and professional services."
            />
        <meta
            name="keywords"
            content="beauty clinic Delhi, skincare clinic Delhi, laser hair reduction Delhi, slimming treatments Delhi, aesthetic clinic India, wellness center Delhi, skin care, laser treatment, weight loss treatment, beauty and wellness clinic"
            />
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

