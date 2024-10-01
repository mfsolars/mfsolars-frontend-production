import "./HowWorks.css";
function HowItWorks({heading,description,description2}) {
    return ( <>
    <section
  className="wd-negative-gap elementor-works-section elementor-works-top-section elementor-works-element elementor-works-element-f46c70a elementor-works-section-boxed elementor-works-section-height-default wd-section-disabled mfsolars-A8o5z"
  data-id="f46c70a"
  data-element_type="section"
  
>
  <div className="elementor-works-container elementor-works-column-gap-default" >
    <div
      className="elementor-works-column elementor-works-col-100 elementor-works-top-column elementor-works-element elementor-works-element-9b78ef5"
      data-id="9b78ef5"
      data-element_type="column"
      
    >
      <div className="elementor-works-widget-wrap elementor-works-element-populated">
        <div
          className="elementor-works-element elementor-works-element-6ba8aca elementor-works-widget elementor-works-widget-heading"
          data-id="6ba8aca"
          data-element_type="widget"
          data-widget_type="heading.default"
        >
          <div className="elementor-works-widget-container">
            <h1 className="elementor-works-heading-title elementor-works-size-default" style={{fontSize:"2rem"}}>
              {heading}
            </h1>
          </div>
        </div>
        <div
          className="elementor-works-element elementor-works-element-c958a46 color-scheme-inherit text-left elementor-works-widget elementor-works-widget-text-editor"
          data-id="c958a46"
          data-element_type="widget"
          data-widget_type="text-editor.default"
        >
          <div className="elementor-works-widget-container" style={{minWidth:"85vw", color:"black"}}>
            <p >
              {description}
            </p>
            <p>
              {description2}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </> );
}

export default HowItWorks;