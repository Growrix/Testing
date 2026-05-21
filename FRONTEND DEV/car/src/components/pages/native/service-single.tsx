import type { NativePageDefinition } from "@/lib/native-page-types";

function ServiceSinglePageComponent() {
  return (
    <div>
      <div id="legacy-page-root" className="dark-scheme">
        <div id="wrapper">
          <a href="#" id="back-to-top" />
          {/* preloader begin */}
          <div id="de-loader" />
          {/* preloader end */}
          {/* header begin */}
          <header className="transparent">
            <div id="topbar">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="d-flex justify-content-between xs-hide">
                      <div className="d-flex">
                        <div className="topbar-widget"><a href="/appointment.html"><img src="/images/svg-white/bell.svg" className="" alt="" />Book this week and get 15% off your first detailing package.</a></div>
                      </div>
                      <div className="d-flex">
                        <div className="topbar-widget me-5"><a href="tel:+12135550198"><img src="/images/svg-white/phone.svg" className="" alt="" />Call us: +1 (213) 555-0198</a></div>
                        <div className="topbar-widget"><a href="mailto:hello@velocareauto.com"><img src="/images/svg-white/envelope.svg" className="" alt="" />Message us: hello@velocareauto.com</a></div>
                      </div>                 
                    </div>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="de-flex sm-pt10">
                    <div className="de-flex-col">
                      {/* logo begin */}
                      <div id="logo">
                        <a href="/index.html">
                          <img className="logo-main" src="/images/logo-velocare.svg" alt="" />
                          <img className="logo-mobile" src="/images/logo-velocare-mobile.svg" alt="" />
                        </a>
                      </div>
                      {/* logo end */}
                    </div>
                    <div className="de-flex-col header-col-mid">
                      {/* mainemenu begin */}
                      <ul id="mainmenu">
                        <li><a className="menu-item" href="/index.html">Home</a>
                          <ul>
                            <li><a href="/index.html">Homepage 1</a></li>
                            <li><a href="/homepage-2.html">Homepage 2</a></li>
                            <li><a href="/homepage-3.html">Homepage 3</a></li>
                            <li><a href="/homepage-4.html">Homepage 4</a></li>
                            <li><a href="/homepage-5.html">Homepage 5</a></li>
                            <li><a href="/homepage-6.html">Homepage 6</a></li>
                            <li><a href="/homepage-7.html">Homepage 7</a></li>
                            <li><a href="/homepage-8.html">New: Homepage 8</a></li>
                          </ul>
                        </li>
                        <li><a className="menu-item" href="/services.html">Services</a>
                          <ul>
                            <li><a href="/services.html">All Services Style 1</a></li>
                            <li><a href="/services-2.html">All Services Style 2</a></li>
                            <li><a href="/services-3.html">All Services Style 3</a></li>
                            <li><a href="/service-single.html">Service Single</a></li>
                            <li><a href="/faq.html">FAQ</a></li>
                          </ul>
                        </li>
                        <li><a className="menu-item" href="#">Pages</a>
                          <ul>
                            <li><a href="/about.html">About Us</a></li>
                            <li><a href="/gallery.html">Gallery</a></li>
                            <li><a href="/blog.html">Blog</a></li>
                            <li><a href="/team.html">Our Team</a></li>
                            <li><a href="/careers.html">Careers</a></li>
                            <li><a href="/testimonials.html">Testimonials</a></li>
                          </ul>
                        </li>
                        <li><a className="menu-item" href="/shop.html">Shop</a></li>                                    
                        <li><a className="menu-item" href="#">Listing</a>
                          <ul>
                            <li><a href="/car-listing.html">Car Listing</a></li>
                            <li><a href="/car-single.html">Car Single</a></li>
                          </ul>
                        </li>
                        <li><a className="menu-item" href="#">Gallery</a>
                          <ul>
                            <li><a href="/gallery.html">Gallery Filter</a></li>
                            <li><a href="/gallery-carousel.html">Gallery Carousel</a></li>
                            <li><a href="/gallery-slider.html">Gallery Filter</a></li>
                          </ul>
                        </li>
                        <li><a className="menu-item" href="#">Workshop</a>
                          <ul>
                            <li><a href="/locations.html">Locations</a></li>
                            <li><a href="/contact.html">Contact</a></li>
                          </ul>
                        </li>
                      </ul>
                      {/* mainmenu end */}
                    </div>
                    <div className="de-flex-col">
                      <div className="menu_side_area">
                        <a href="/appointment.html" className="btn-main fx-slide hover-white"><span>Make Appointment</span></a>
                        <span id="menu-btn" />
                      </div>
                      <div id="btn-extra">
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* header end */}
          {/* content begin */}
          <div className="no-bottom no-top" id="content">
            <div id="top" />
            <section className="no-top no-bottom overflow-hidden">
              <div className="container-fluid position-relative half-fluid">
                <div className="container">
                  <div className="row">
                    {/* Image */}
                    <div className="col-lg-6 position-lg-absolute right-half h-100">
                      <div className="image" data-bgimage="url(/images/misc/s1.webp) center" />
                    </div>
                    {/* Text */}
                    <div className="col-lg-6">
                      <div className="pt-lg-5 mt-lg-5 me-lg-3">
                        <div className="py-5 mt-5 mb-3 me-lg-3">
                          <div className="subtitle id-color wow fadeInUp" data-wow-delay=".0s">Ceramic Coating Protection</div>
                          <h1 className="wow fadeInUp" data-wow-delay=".2s">Long-lasting protection and gloss</h1>
                          <p className="col-lg-10 wow fadeInUp" data-wow-delay=".4s">Ceramic Coating Protection is the ultimate solution for preserving your vehicle's paintwork. This high-performance coating bonds with your car's surface, creating a hydrophobic layer that repels water, dirt, and environmental contaminants. It enhances gloss, resists oxidation, and provides long-term protection that far outperforms traditional wax.</p>
                          <a className="btn-main mb10 mb-3 wow fadeInUp" data-wow-delay=".6s" href="/contact.html"><span>Book Detailing</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="container">
                <div className="row g-4">
                  <div className="col-md-4">
                    <h3>What's Included</h3>
                    <ul className="ul-check">
                      <li>Full exterior wash and decontamination</li>
                      <li>Clay bar treatment and surface prep</li>
                      <li>Light paint correction (as needed)</li>
                      <li>Application of professional-grade ceramic coating</li>
                      <li>Final inspection and gloss enhancement</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h3>Benefits</h3>
                    <ul className="ul-check">
                      <li>Repels water, dirt, and grime</li>
                      <li>Protects against UV damage and oxidation</li>
                      <li>Makes washing easier and less frequent</li>
                      <li>Enhances and deepens your car's shine</li>
                      <li>Lasts up to 2-5 years with proper maintenance</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h3>Ideal For</h3>
                    <ul className="ul-check">
                      <li>Daily drivers exposed to the elements</li>
                      <li>Show cars or vehicles with custom paintwork</li>
                      <li>Clients seeking a "just waxed" look year-round</li>
                      <li>New car for long-term paint protection</li>
                      <li>Luxury vehicle owners looking for premium care</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-dark-2 jarallax">
              <img src="/images/background/1.webp" className="jarallax-img" alt="" />
              <div className="sw-overlay" />
              <div className="container relative z-2">
                <div className="row g-4 justify-content-center">
                  <div className="col-lg-12 text-center">
                    <div className="subtitle">Steps</div>
                    <h2>How It Works</h2>
                  </div>
                  <div className="col-6 col-md-3 de-step de-step-arrow">
                    <div className="de-step-icon bg-color">
                      <i className="fas fa-search fa-2x" />
                    </div>
                    <h4 className="fw-bold">Vehicle Inspection &amp; Prep</h4>
                    <p>We inspect the paint and prep your vehicle with a deep wash and decontamination for optimal coating adhesion.</p>
                  </div>
                  <div className="col-6 col-md-3 de-step de-step-arrow">
                    <div className="de-step-icon bg-color">
                      <i className="fas fa-paint-brush fa-2x" />
                    </div>
                    <h4 className="fw-bold">Paint Correction</h4>
                    <p>Swirls, scratches, and imperfections are polished out to restore a flawless base before coating begins.</p>
                  </div>
                  <div className="col-6 col-md-3 de-step de-step-arrow">
                    <div className="de-step-icon bg-color">
                      <i className="fas fa-spray-can fa-2x" />
                    </div>
                    <h4 className="fw-bold">Ceramic Application</h4>
                    <p>We apply premium ceramic coating to all exterior surfaces, bonding it to the paint for long-term protection.</p>
                  </div>
                  <div className="col-6 col-md-3 de-step">
                    <div className="de-step-icon bg-color">
                      <i className="fas fa-check-circle fa-2x" />
                    </div>
                    <h4 className="fw-bold">Curing &amp; Final Inspection</h4>
                    <p>After curing, we inspect the finish to ensure uniform gloss, durability, and maximum hydrophobic effect.</p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="container">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-6">
                    <div className="subtitle">Real Results</div>
                    <h2>Before &amp; After Transformation</h2>
                    <p>See the dramatic difference ceramic coating makes-restoring clarity, depth, and shine while adding a durable layer of protection. Every detail counts, and the results speak for themselves.</p>
                  </div>
                  <div className="col-lg-6">
                    <div className="twentytwenty-container rounded-1">
                      <img src="/images/before-after/1b.webp" alt="" className="img-responsive" />
                      <img src="/images/before-after/1a.webp" alt="" className="img-responsive" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-color text-light pt-60 pb-50">
              <div className="container">
                <div className="row g-4">
                  <div className="col-md-9">
                    <h3 className="mb-0 fs-32">Want your car to shine like new again?</h3>
                  </div>
                  <div className="col-lg-3 text-lg-end">
                    <a className="btn-main fx-slide btn-line" href="/appointment.html"><span>Make Appointment</span></a>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* content end */}
          {/* footer begin */}
          <footer>
            <div className="container">
              <div className="row gx-5">
                <div className="col-lg-4 col-sm-6">
                  <img src="/images/logo-velocare.svg" className="logo-footer" alt="" />
                  <div className="spacer-20" />
                  <p>At Velocare Auto Studio, we're dedicated to providing professional, high-quality car detailing services. From routine hand washes to advanced ceramic coatings, we help keep your vehicle looking its best while preserving its value and protecting it from the elements.</p>
                  <div className="social-icons mb-sm-30">
                    <a href="https://www.facebook.com/velocareauto" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f" /></a>
                    <a href="https://x.com/velocareauto" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter" /></a>
                    <a href="https://wa.me/12135550198" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp" /></a>
                    <a href="https://www.instagram.com/velocare_auto" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram" /></a>
                    <a href="https://www.youtube.com/@velocareauto" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube" /></a>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 order-lg-1 order-sm-2">
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="widget">
                        <h5>Company</h5>
                        <ul>
                          <li><a href="/index.html">Home</a></li>
                          <li><a href="/services.html">Our Services</a></li>
                          <li><a href="/gallery.html">Gallery</a></li>
                          <li><a href="/about.html">About Us</a></li>
                          <li><a href="/blog.html">Blog</a></li>
                          <li><a href="/contact.html">Contact</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="widget">
                        <h5>Our Services</h5>
                        <ul>
                          <li><a href="/service-single.html">Exterior Hand Wash &amp; Wax</a></li>
                          <li><a href="/service-single.html">Interior Deep Cleaning</a></li>
                          <li><a href="/service-single.html">Paint Correction</a></li>
                          <li><a href="/service-single.html">Ceramic Coating Protection</a></li>
                          <li><a href="/service-single.html">Engine Bay Detailing</a></li>
                          <li><a href="/service-single.html">Headlight Restoration</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 order-lg-2 order-sm-1">
                  <div className="widget">
                    <h5>Contact Us</h5>
                    <div className="fw-bold text-white">
                      <i className="icofont-location-pin me-2 id-color" />Head Office
                    </div>
                    123 Shine Street, Los Angeles, CA
                    <div className="spacer-20" />
                    <div className="fw-bold text-white">
                      <i className="icofont-phone me-2 id-color" />Call Us
                    </div>
                    +1 (213) 555-0198
                    <div className="spacer-20" />
                    <div className="fw-bold text-white">
                      <i className="icofont-envelope me-2 id-color" />Email Us
                    </div>
                    hello@velocareauto.com
                  </div>
                </div>
              </div>
            </div>
            <div className="subfooter">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="de-flex">
                      <div className="de-flex-col">
                        © 2026 - Velocare Auto Studio. All rights reserved. Built &amp; maintanace by <a href="https://www.growrixos.com" target="_blank" rel="noopener noreferrer" className="id-color" style={{marginLeft: 4, textDecoration: 'underline !important', fontWeight: 700}}>Growrix OS</a>.
                      </div>
                      <ul className="menu-simple">
                        <li><a href="/terms.html">Terms &amp; Conditions</a></li>
                        <li><a href="/privacy.html">Privacy Policy</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* footer end */}
        </div>
        {/* overlay content begin */}
        <div id="extra-wrap" className="text-light">
          <div id="btn-close">
            <span />
            <span />
          </div>
          <div id="extra-content">
            <img src="/images/logo-velocare.svg" className="w-150px" alt="" />
            <div className="spacer-30-line" />
            <h5>Our Services</h5>
            <ul className="ul-check">
              <li><a href="/service-single.html">Exterior Hand Wash &amp; Wax</a></li>
              <li><a href="/service-single.html">Interior Deep Cleaning</a></li>
              <li><a href="/service-single.html">Paint Correction</a></li>
              <li><a href="/service-single.html">Ceramic Coating Protection</a></li>
              <li><a href="/service-single.html">Engine Bay Detailing</a></li>
              <li><a href="/service-single.html">Headlight Restoration</a></li>
            </ul>
            <div className="spacer-30-line" />
            <h5>Contact Us</h5>
            <div><i className="icofont-clock-time me-2 op-5" />Monday - Friday 08.00 - 18.00</div>
            <div><i className="icofont-location-pin me-2 op-5" />123 Shine Street, Los Angeles, CA </div>
            <div><i className="icofont-envelope me-2 op-5" />hello@velocareauto.com</div>
            <div className="spacer-30-line" />
            <h5>About Us</h5>
            <p>At Velocare Auto Studio, we're dedicated to providing professional, high-quality car detailing services. From routine hand washes to advanced ceramic coatings, we help keep your vehicle looking its best while preserving its value and protecting it from the elements.</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/velocareauto" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f" /></a>
              <a href="https://x.com/velocareauto" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter" /></a>
              <a href="https://www.instagram.com/velocare_auto" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram" /></a>
              <a href="https://www.youtube.com/@velocareauto" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube" /></a>
              <a href="https://wa.me/12135550198" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp" /></a>
            </div>
          </div>
        </div>
        <span className="sc-val">Click to Enable</span>
      </div>
      <div className="sc-opt sc-mt">
        <div className="sc-icon"><i className="fa fa-eyedropper" /></div>
        <span className="opt tc1" data-color="scheme-1" />
        <span className="opt tc2" data-color="scheme-2" />
        <span className="opt tc3" data-color="scheme-3" />
      </div>
      {/* Javascript Files
        ================================================== */}
    </div>

  );
}

export const page: NativePageDefinition = {
  fileName: "service-single.html",
  title: "Velocare Auto Studio - Premium Detailing and Auto Care",
  description: "Velocare Auto Studio - Premium Detailing and Auto Care",
  Component: ServiceSinglePageComponent,
};
