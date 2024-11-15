import { Link } from "react-router-dom";
import "./Hero.css";
import { CiCircleChevRight } from "react-icons/ci";
function HeroSection() {


    return (
            <section className="herosec m-auto overflow-hidden grid place-items-center" >
                <div className="flex items-center flex-col">
                <h1 className="text-slate-100 md:text-8xl text-6xl text-center">MF Solars</h1>
                <span className="text-slate-400 text-sm md:text-base text-center" style={{fontFamily:"revert"}}>The best Solar Enery Company in South Africa</span>
                <Link to="/products/shop"  className="action_btn flex items-center text-sm md:mt-4 mt-20  md:text-lg">Explore Products <CiCircleChevRight className="text-slate-100 text-lg md:text-2xl ml-3" /></Link>
                </div>
            </section>
        
    );
}

export default HeroSection;