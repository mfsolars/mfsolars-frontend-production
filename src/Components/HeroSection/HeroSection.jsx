import { Link } from "react-router-dom";
import "./Hero.css";
import { CiCircleChevRight } from "react-icons/ci";
function HeroSection() {


    return (
            <section className="herosec m-auto overflow-hidden grid place-items-center" >
                <div className="flex items-center flex-col">
                <h1 className="text-slate-100 text-8xl">MF Solars</h1>
                <span className="text-slate-400 text-base text-center" style={{fontFamily:"revert"}}>The best Solar Enery Company in South Africa</span>
                <Link to="/products/shop"  className="action_btn flex items-center">Explore Products <CiCircleChevRight className="text-slate-100 text-2xl ml-3" /></Link>
                </div>
            </section>
        
    );
}

export default HeroSection;