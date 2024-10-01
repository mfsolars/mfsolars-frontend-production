import SolarLightings from "../SolarLighting/SolarLighting";
import "./BatteriesPortion.css";
function BatteriesPortion() {
    return ( <>
    <div className="batteriespart flex lg:flex-row flex-col">
        <img className="inverterimage" src="https://invertsolar.co.za/wp-content/uploads/elementor/thumbs/Untitled-design-3-q8gzzojsogk7c7q2xbzos140vvlwkjd7ykxrf3jleo.png" alt="" />
        <SolarLightings department={"solar-batteries"} moreproducts={"/products/solar-batteries/"} />
    </div>
    </> );
}

export default BatteriesPortion;