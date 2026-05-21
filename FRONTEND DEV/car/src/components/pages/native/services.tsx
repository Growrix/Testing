import type { NativePageDefinition } from "@/lib/native-page-types";

function ServicesPageComponent() {
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
            <section className="bg-dark text-light relative jarallax">
              <div className="de-gradient-edge-top" />
              <img src="/images/background/9.webp" className="jarallax-img" alt="" />
              <div className="container relative z-2">
                <div className="row gy-4 gx-5 justify-content-center">
                  <div className="col-lg-12 text-center">
                    <div className="spacer-double sm-hide" />
                    <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Our Service</h1>
                    <div className="border-bottom mb-3" />
                    <ul className="crumb wow fadeInUp">
                      <li><a href="/index.html">Home</a></li>
                      <li className="active">Our Services</li>
                    </ul>   
                  </div>
                </div>
              </div>
              <div className="sw-overlay" />
            </section>
            <section>
              <div className="container">
                <div className="row g-4">
                  {/* service item begin */}
                  <div className="col-lg-4 col-sm-6">
                    <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".0s">
                      <img src="/images/services/1.webp" className="hover-scale-1-1 w-100" alt="" />
                      <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                        <div className="mb-3">Gentle yet thorough hand wash using pH-balanced soaps, followed by premium wax to protect your paint and enhance shine. Keeps your car sparkling and protected from the elements.</div>
                        <a className="btn-main fx-slide" href="/service-single.html"><span>View Details</span></a>
                      </div>
                      <h3 className="abs fs-32 lh-1 p-4 top-0 inset-s-0">01</h3>
                      <div className="abs bg-blur z-2 top-0 w-100 h-100 hover-op-1" />
                      <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                        <h4 className="mb-3">Exterior Hand Wash &amp; Wax</h4>
                      </div>
                      <div className="gradient-edge-bottom color abs w-100 h-40 bottom-0" />
                    </div>
                  </div>
                  {/* service item end */}
                  {/* service item begin */}
                  <div className="col-lg-4 col-sm-6">
                    <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".2s">
                      <img src="/images/services/2.webp" className="hover-scale-1-1 w-100" alt="" />
                      <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                        <div className="mb-3">From carpets to headliners, we extract every trace of dirt and odor. Our steam and shampoo treatment leaves your cabin fresh, sanitized, and looking like new inside.</div>
                        <a className="btn-main fx-slide" href="/service-single.html"><span>View Details</span></a>
                      </div>
                      <h3 className="abs fs-32 lh-1 p-4 top-0 inset-s-0">02</h3>
                      <div className="abs bg-blur z-2 top-0 w-100 h-100 hover-op-1" />
                      <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                        <h4 className="mb-3">Interior Deep Cleaning</h4>
                      </div>
                      <div className="gradient-edge-bottom color abs w-100 h-40 bottom-0" />
                    </div>
                  </div>
                  {/* service item end */}
                  {/* service item begin */}
                  <div className="col-lg-4 col-sm-6">
                    <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".4s">
                      <img src="/images/services/3.webp" className="hover-scale-1-1 w-100" alt="" />
                      <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                        <div className="mb-3">Buff away swirl marks, scratches, and dullness. We restore clarity and depth with multi-stage machine polishing that revives your paint's original brilliance.</div>
                        <a className="btn-main fx-slide" href="/service-single.html"><span>View Details</span></a>
                      </div>
                      <h3 className="abs fs-32 lh-1 p-4 top-0 inset-s-0">03</h3>
                      <div className="abs bg-blur z-2 top-0 w-100 h-100 hover-op-1" />
                      <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                        <h4 className="mb-3">Paint Correction</h4>
                      </div>
                      <div className="gradient-edge-bottom color abs w-100 h-40 bottom-0" />
                    </div>
                  </div>
                  {/* service item end */}
                  {/* service item begin */}
                  <div className="col-lg-4 col-sm-6">
                    <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".6s">
                      <img src="/images/services/4.webp" className="hover-scale-1-1 w-100" alt="" />
                      <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                        <div className="mb-3">Add years of protection with hydrophobic ceramic coating. Shields against UV rays, dirt, and scratches - making your car easier to clean and stay glossy longer.</div>
                        <a className="btn-main fx-slide" href="/service-single.html"><span>View Details</span></a>
                      </div>
                      <h3 className="abs fs-32 lh-1 p-4 top-0 inset-s-0">04</h3>
                      <div className="abs bg-blur z-2 top-0 w-100 h-100 hover-op-1" />
                      <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                        <h4 className="mb-3">Ceramic Coating Protection</h4>
                      </div>
                      <div className="gradient-edge-bottom color abs w-100 h-40 bottom-0" />
                    </div>
                  </div>
                  {/* service item end */}
                  {/* service item begin */}
                  <div className="col-lg-4 col-sm-6">
                    <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".8s">
                      <img src="/images/services/5.webp" className="hover-scale-1-1 w-100" alt="" />
                      <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                        <div className="mb-3">We degrease and shine your engine bay for a professional finish. It's not just for aesthetics - engine cleaning helps with resale and easier maintenance checks.</div>
                        <a className="btn-main fx-slide" href="/service-single.html"><span>View Details</span></a>
                      </div>
                      <h3 className="abs fs-32 lh-1 p-4 top-0 inset-s-0">05</h3>
                      <div className="abs bg-blur z-2 top-0 w-100 h-100 hover-op-1" />
                      <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                        <h4 className="mb-3">Engine Bay Detailing</h4>
                      </div>
                      <div className="gradient-edge-bottom color abs w-100 h-40 bottom-0" />
                    </div>
                  </div>
                  {/* service item end */}
                  {/* service item begin */}
                  <div className="col-lg-4 col-sm-6">
                    <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay="1.0s">
                      <img src="/images/services/6.webp" className="hover-scale-1-1 w-100" alt="" />
                      <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                        <div className="mb-3">Cloudy headlights are unsafe and ugly. We sand, polish, and seal them so they shine bright and clear again, improving visibility and your car's overall look.</div>
                        <a className="btn-main fx-slide" href="/service-single.html"><span>View Details</span></a>
                      </div>
                      <h3 className="abs fs-32 lh-1 p-4 top-0 inset-s-0">06</h3>
                      <div className="abs bg-blur z-2 top-0 w-100 h-100 hover-op-1" />
                      <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                        <h4 className="mb-3">Headlight Restoration</h4>
                      </div>
                      <div className="gradient-edge-bottom color abs w-100 h-40 bottom-0" />
                    </div>
                  </div>
                  {/* service item end */}
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
  fileName: "services.html",
  title: "Velocare Auto Studio - Premium Detailing and Auto Care",
  description: "Velocare Auto Studio - Premium Detailing and Auto Care",
  Component: ServicesPageComponent,
};
