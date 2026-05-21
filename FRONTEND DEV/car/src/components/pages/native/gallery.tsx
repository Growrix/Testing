import type { NativePageDefinition } from "@/lib/native-page-types";

function GalleryPageComponent() {
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
              <img src="/images/background/8.webp" className="jarallax-img" alt="" />
              <div className="container relative z-2">
                <div className="row gy-4 gx-5 justify-content-center">
                  <div className="col-lg-12 text-center">
                    <div className="spacer-double sm-hide" />
                    <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Gallery</h1>
                    <div className="border-bottom mb-3" />
                    <ul className="crumb wow fadeInUp">
                      <li><a href="/index.html">Home</a></li>
                      <li className="active">Gallery</li>
                    </ul>   
                  </div>
                </div>
              </div>
              <div className="sw-overlay" />
            </section>
            <section id="section-gallery">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <ul id="filters" className="wow fadeInUp" data-wow-delay="0s">
                      <li><a href="#" data-filter="*" className="selected">View All</a></li>
                      <li><a href="#" data-filter=".exterior">Exterior</a></li>
                      <li><a href="#" data-filter=".interior">Interior</a></li>
                      <li><a href="#" data-filter=".facilities">Facilities</a></li><li>
                      </li></ul>
                  </div>
                </div>
                <div id="gallery" className="row g-4 wow fadeIn" data-wow-delay=".3s">
                  <div className="col-md-4 col-sm-6 col-12 item interior">
                    <a href="/images/gallery/l1.webp" className="image-popup d-block hover">
                      <div className="relative overflow-hidden rounded-1">
                        <div className="absolute w-100 hover-op-1 p-5 abs-middle text-center text-white" style={{insetInlineStart: 0, zIndex: 3}}>
                          <span className="bg-color fw-bold px-3 rounded-1">View</span>
                        </div>
                        <div className="absolute w-100 h-100 overlay-black-5 hover-op-1" style={{insetInlineStart: 0, zIndex: 2}} />
                        <img src="/images/gallery/l1.webp" className="w-100 hover-scale-1-2" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 item exterior">
                    <a href="/images/gallery/l6.webp" className="image-popup d-block hover">
                      <div className="relative overflow-hidden rounded-1">
                        <div className="absolute w-100 hover-op-1 p-5 abs-middle text-center text-white" style={{insetInlineStart: 0, zIndex: 3}}>
                          <span className="bg-color fw-bold px-3 rounded-1">View</span>
                        </div>
                        <div className="absolute w-100 h-100 overlay-black-5 hover-op-1" style={{insetInlineStart: 0, zIndex: 2}} />
                        <img src="/images/gallery/l6.webp" className="w-100 hover-scale-1-2" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 item interior">
                    <a href="/images/gallery/l2.webp" className="image-popup d-block hover">
                      <div className="relative overflow-hidden rounded-1">
                        <div className="absolute w-100 hover-op-1 p-5 abs-middle text-center text-white" style={{insetInlineStart: 0, zIndex: 3}}>
                          <span className="bg-color fw-bold px-3 rounded-1">View</span>
                        </div>
                        <div className="absolute w-100 h-100 overlay-black-5 hover-op-1" style={{insetInlineStart: 0, zIndex: 2}} />
                        <img src="/images/gallery/l2.webp" className="w-100 hover-scale-1-2" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 item exterior">
                    <a href="/images/gallery/l7.webp" className="image-popup d-block hover">
                      <div className="relative overflow-hidden rounded-1">
                        <div className="absolute w-100 hover-op-1 p-5 abs-middle text-center text-white" style={{insetInlineStart: 0, zIndex: 3}}>
                          <span className="bg-color fw-bold px-3 rounded-1">View</span>
                        </div>
                        <div className="absolute w-100 h-100 overlay-black-5 hover-op-1" style={{insetInlineStart: 0, zIndex: 2}} />
                        <img src="/images/gallery/l7.webp" className="w-100 hover-scale-1-2" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 item interior">
                    <a href="/images/gallery/l3.webp" className="image-popup d-block hover">
                      <div className="relative overflow-hidden rounded-1">
                        <div className="absolute w-100 hover-op-1 p-5 abs-middle text-center text-white" style={{insetInlineStart: 0, zIndex: 3}}>
                          <span className="bg-color fw-bold px-3 rounded-1">View</span>
                        </div>
                        <div className="absolute w-100 h-100 overlay-black-5 hover-op-1" style={{insetInlineStart: 0, zIndex: 2}} />
                        <img src="/images/gallery/l3.webp" className="w-100 hover-scale-1-2" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 item exterior">
                    <a href="/images/gallery/l8.webp" className="image-popup d-block hover">
                      <div className="relative overflow-hidden rounded-1">
                        <div className="absolute w-100 hover-op-1 p-5 abs-middle text-center text-white" style={{insetInlineStart: 0, zIndex: 3}}>
                          <span className="bg-color fw-bold px-3 rounded-1">View</span>
                        </div>
                        <div className="absolute w-100 h-100 overlay-black-5 hover-op-1" style={{insetInlineStart: 0, zIndex: 2}} />
                        <img src="/images/gallery/l8.webp" className="w-100 hover-scale-1-2" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 item interior">
                    <a href="/images/gallery/l4.webp" className="image-popup d-block hover">
                      <div className="relative overflow-hidden rounded-1">
                        <div className="absolute w-100 hover-op-1 p-5 abs-middle text-center text-white" style={{insetInlineStart: 0, zIndex: 3}}>
                          <span className="bg-color fw-bold px-3 rounded-1">View</span>
                        </div>
                        <div className="absolute w-100 h-100 overlay-black-5 hover-op-1" style={{insetInlineStart: 0, zIndex: 2}} />
                        <img src="/images/gallery/l4.webp" className="w-100 hover-scale-1-2" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 item exterior">
                    <a href="/images/gallery/l8.webp" className="image-popup d-block hover">
                      <div className="relative overflow-hidden rounded-1">
                        <div className="absolute w-100 hover-op-1 p-5 abs-middle text-center text-white" style={{insetInlineStart: 0, zIndex: 3}}>
                          <span className="bg-color fw-bold px-3 rounded-1">View</span>
                        </div>
                        <div className="absolute w-100 h-100 overlay-black-5 hover-op-1" style={{insetInlineStart: 0, zIndex: 2}} />
                        <img src="/images/gallery/l9.webp" className="w-100 hover-scale-1-2" alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 item interior">
                    <a href="/images/gallery/l5.webp" className="image-popup d-block hover">
                      <div className="relative overflow-hidden rounded-1">
                        <div className="absolute w-100 hover-op-1 p-5 abs-middle text-center text-white" style={{insetInlineStart: 0, zIndex: 3}}>
                          <span className="bg-color fw-bold px-3 rounded-1">View</span>
                        </div>
                        <div className="absolute w-100 h-100 overlay-black-5 hover-op-1" style={{insetInlineStart: 0, zIndex: 2}} />
                        <img src="/images/gallery/l5.webp" className="w-100 hover-scale-1-2" alt="" />
                      </div>
                    </a>
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
  fileName: "gallery.html",
  title: "Velocare Auto Studio - Premium Detailing and Auto Care",
  description: "Velocare Auto Studio - Premium Detailing and Auto Care",
  Component: GalleryPageComponent,
};
