import "./Departments.css"
import SolarLighting from "../../Components/SolarLighting/SolarLighting"
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import dep_img from "../../assets/coupen.png";
function Departments() {
  return (<>
    <div
      style={{ marginTop: "2rem", padding: "1rem" }}
    >
      <section
        className="wd-negative-gap elementor-section elementor-top-section elementor-element elementor-element-ce8d38e elementor-section-content-middle elementor-section-boxed elementor-section-height-default wd-section-disabled mfsolars-TNYmT"
        data-id="ce8d38e"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'


      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c34239f"
            data-id="c34239f"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-51daeeb elementor-widget elementor-widget-wd_title"
                data-id="51daeeb"
                data-element_type="widget"
                data-widget_type="wd_title.default"
              >
                <div className="elementor-widget-container">
                  <div className="title-wrapper set-mb-s reset-last-child wd-title-color-white wd-title-style-default wd-title-size-medium text-left">
                    <div className="liner-continer">
                      <h4 className="woodmart-title-container title wd-fontsize-xl">
                        Our Departments
                      </h4>
                    </div>
                    <div className="title-after_title set-cont-mb-s reset-last-child wd-fontsize-s">
                      <p>
                        At Invert Solar, we take great pride in supplying a wide
                        selection of top-of-the-line power solutions to fulfil your
                        every need. We've got you covered whether you're looking for
                        reliable inverters, energy-efficient solar lighting,
                        high-performance batteries, and advanced security cameras.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3c04edf"
            data-id="3c04edf"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-165fa97 elementor-widget elementor-widget-wd_image_or_svg"
                data-id="165fa97"
                data-element_type="widget"
                data-widget_type="wd_image_or_svg.default"
              >
                <div className="elementor-widget-container">
                  <div className="wd-image text-center">
                    <img
                      fetchpriority="high"
                      loading="lazy"
                      decoding="async"
                      width={538}
                      height={303}
                      src={dep_img}
                      className="attachment-full size-full wp-image-9183"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SolarLighting department={"inverter"} moreproducts={"/products/inverter/"} />
      <SolarLighting department={"solar-accessories"} moreproducts={"/products/solar-accessories/"} />
      <SolarLighting department={"solar-batteries"} moreproducts={"/products/solar-batteries/"} />
      <SolarLighting department={"solar-kit"} moreproducts={"/products/solar-kit/"} />
      <SolarLighting department={"solar-lights"} moreproducts={"/products/solar-lights/"} />
      <SolarLighting department={"solar-security-camera"} moreproducts={"/products/solar-security-camera/"} />

      <HowItWorks heading={"More About Solar Batteries"} description={"Solar batteries are transforming renewable energy systems. These revolutionary energy storage systems enable you to store surplus energy generated by your solar panels on bright days, making it ready for use during low-light times or at night. Solar batteries increase the efficiency and self-sufficiency of your solar power setup by catching and storing excess energy. They not only minimize reliance on the grid, but they also assist to lower electricity bills and contribute to a more sustainable and environmentally friendly future. Accept the power of solar batteries today and realize the full potential of your solar energy system."} />


    </div>





  </>);
}

export default Departments;