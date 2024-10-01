import SolarLighting from "../../Components/SolarLighting/SolarLighting";
import BatteriesPortion from "../../Components/BatteriesPortion/BatteriesPortion";
import ProductDetailing from "../../Components/ProductDetailing/ProductDetailing";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import ProductLookup from "../../Components/ProductLookup/ProductLookup";


function HomePage() {
    return (<>
        <SolarLighting department={"solar-kit"} moreproducts={"/products/solar-lights/"} />
        <BatteriesPortion />
        <ProductLookup />
        <SolarLighting department={"solar-security-camera"} moreproducts={"/products/solar-security-camera/"} />
        <ProductDetailing />
        <HowItWorks heading={"How does an inverter work?"} description={"An inverter is an electronic device that converts direct current (DC) electricity from sources such as batteries and solar panels into alternating current (AC) electricity, which is then used to power household appliances and electronics. It accomplishes this by generating a high-frequency AC signal via switching circuits, which rapidly turn the DC input on and off in accordance with the pattern of an oscillator. Filtering components such as capacitors and inductors smooth down the raw alternating current output, removing harmonic aberrations and generating a steady waveform."}
            description2={"The inverter’s output might be a square wave, a modified sine wave, or a pure sine wave, with pure sine wave inverters producing the highest-quality output that is compatible with all sorts of electronic equipment. Furthermore, voltage regulation circuits maintain a constant output voltage despite fluctuations in input voltage or load, ensuring a stable power supply to linked devices. Inverters serve an important part in modern life, allowing for the optimal use of renewable energy sources while also maintaining a steady power supply for our everyday demands."} />
    </>);
}

export default HomePage;