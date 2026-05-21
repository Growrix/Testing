import type { NativePageDefinition } from "@/lib/native-page-types";

function Homepage4PageComponent() {
  return (
    <div>
      <div id="legacy-page-root" className="dark-scheme">
        <div id="wrapper">
          <a href="#" id="back-to-top" />
          {/* preloader begin */}
          <div id="de-loader" />
          {/* preloader end */}
          {/* header begin */}
          <header>
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
            <section className="pt-120 sm-pt-0 pb-0">
              <div className="container-fluid">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <a href="/service-single.html" className="bg-dark-2 d-block hover overflow-hidden">
                      <div className="row g-0 align-items-center">
                        <div className="col-sm-6">
                          <div className="p-40">
                            <h3>Exterior Hand Wash &amp; Wax</h3>
                            <p className="mb-0">Gentle hand washing and premium wax application for a glossy, protective finish that brings your car's exterior to life.</p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="relative overflow-hidden">
                            <h3 className="abs text-white fs-32 lh-1 p-4 top-0 inset-s-0 z-3">01</h3>
                            <div className="sw-overlay z-2 op-5" />
                            <img src="/images/services/1.webp" className="w-100 hover-scale-1-2" alt="" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="/service-single.html" className="bg-dark-2 d-block hover overflow-hidden">
                      <div className="row g-0 align-items-center">
                        <div className="col-sm-6">
                          <div className="p-40">
                            <h3>Interior Deep Cleaning</h3>
                            <p className="mb-0">Thorough vacuuming, shampooing, and sanitizing to remove dirt, stains, and odors from seats, carpets, and upholstery.</p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="relative overflow-hidden">
                            <h3 className="abs text-white fs-32 lh-1 p-4 top-0 inset-s-0 z-3">02</h3>
                            <div className="sw-overlay z-2 op-5" />
                            <img src="/images/services/2.webp" className="w-100 hover-scale-1-2" alt="" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="/service-single.html" className="bg-color d-block hover overflow-hidden">
                      <div className="row g-0 align-items-center">
                        <div className="col-sm-6">
                          <div className="relative overflow-hidden">
                            <h3 className="abs text-white fs-32 lh-1 p-4 top-0 inset-s-0 z-3">03</h3>
                            <div className="sw-overlay z-2 op-5" />
                            <img src="/images/services/3.webp" className="w-100 hover-scale-1-2" alt="" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="p-40">
                            <h3>Paint Correction</h3>
                            <p className="mb-0">Eliminates swirls, oxidation, and light scratches for a flawless finish and like-new paint clarity.</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="/service-single.html" className="bg-dark-2 d-block hover overflow-hidden">
                      <div className="row g-0 align-items-center">
                        <div className="col-sm-6">
                          <div className="relative overflow-hidden">
                            <h3 className="abs text-white fs-32 lh-1 p-4 top-0 inset-s-0 z-3">04</h3>
                            <div className="sw-overlay z-2 op-5" />
                            <img src="/images/services/4.webp" className="w-100 hover-scale-1-2" alt="" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="p-40">
                            <h3>Ceramic Coating Protection</h3>
                            <p className="mb-0">Advanced ceramic protection to shield your paint from the elements while enhancing shine and hydrophobic properties.</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="/service-single.html" className="bg-dark-2 d-block hover overflow-hidden">
                      <div className="row g-0 align-items-center">
                        <div className="col-sm-6">
                          <div className="p-40">
                            <h3>Engine Bay Detailing</h3>
                            <p className="mb-0">Careful degreasing and cleaning of your engine bay to restore appearance and prevent dirt buildup or corrosion.</p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="relative overflow-hidden">
                            <h3 className="abs text-white fs-32 lh-1 p-4 top-0 inset-s-0 z-3">05</h3>
                            <div className="sw-overlay z-2 op-5" />
                            <img src="/images/services/5.webp" className="w-100 hover-scale-1-2" alt="" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="/service-single.html" className="bg-dark-2 d-block hover overflow-hidden">
                      <div className="row g-0 align-items-center">
                        <div className="col-sm-6">
                          <div className="p-40">
                            <h3>Headlight Restoration</h3>
                            <p className="mb-0">Restores clarity and improves visibility by removing haze, oxidation, and yellowing from headlight lenses.</p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="relative overflow-hidden">
                            <h3 className="abs text-white fs-32 lh-1 p-4 top-0 inset-s-0 z-3">06</h3>
                            <div className="sw-overlay z-2 op-5" />
                            <img src="/images/services/6.webp" className="w-100 hover-scale-1-2" alt="" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="pb-0" aria-label="section">
              <div className="container">
                <div className="row g-4">
                  <div className="col-md-12 wow fadeInUp">
                    <div className="owl-6 no-alpha owl-carousel owl-theme">
                      <img src="/images/logo-brands/1.webp" className="w-100 px-lg-5 p-4" alt="" />
                      <img src="/images/logo-brands/2.webp" className="w-100 px-lg-5 p-4" alt="" />
                      <img src="/images/logo-brands/3.webp" className="w-100 px-lg-5 p-4" alt="" />
                      <img src="/images/logo-brands/4.webp" className="w-100 px-lg-5 p-4" alt="" />
                      <img src="/images/logo-brands/5.webp" className="w-100 px-lg-5 p-4" alt="" />
                      <img src="/images/logo-brands/6.webp" className="w-100 px-lg-5 p-4" alt="" />
                      <img src="/images/logo-brands/7.webp" className="w-100 px-lg-5 p-4" alt="" />
                      <img src="/images/logo-brands/8.webp" className="w-100 px-lg-5 p-4" alt="" />
                      <img src="/images/logo-brands/9.webp" className="w-100 px-lg-5 p-4" alt="" />
                      <img src="/images/logo-brands/10.webp" className="w-100 px-lg-5 p-4" alt="" />
                      <img src="/images/logo-brands/11.webp" className="w-100 px-lg-5 p-4" alt="" />
                      <img src="/images/logo-brands/12.webp" className="w-100 px-lg-5 p-4" alt="" />
                      <img src="/images/logo-brands/13.webp" className="w-100 px-lg-5 p-4" alt="" />
                      <img src="/images/logo-brands/14.webp" className="w-100 px-lg-5 p-4" alt="" />
                      <img src="/images/logo-brands/15.webp" className="w-100 px-lg-5 p-4" alt="" />
                      <img src="/images/logo-brands/16.webp" className="w-100 px-lg-5 p-4" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-dark text-light">
              <div className="container relative z-1">
                <div className="row g-4 justify-content-center">
                  <div className="col-lg-6 text-center">
                    <div className="subtitle id-color">Trusted &amp; Affordable</div>
                    <h2>Why Choose Our Car Detailing?</h2>
                    <p>From deep interior cleaning to long-lasting ceramic coating, we restore and protect your vehicle with precision, care, and a commitment to perfection.</p>
                  </div>
                </div>
                <div className="row g-4">
                  <div className="col-lg-3 col-md-6">
                    <div className="bg-dark-2 p-40 h-100 rounded-1">
                      <div className="relative wow fadeInUp">
                        <h4>Expert Technicians</h4>
                        <p className="mb-0">Our detailers are skilled professionals with years of experience in car care.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="bg-dark-2 p-40 h-100 rounded-1">
                      <div className="relative wow fadeInUp">
                        <h4>Tailored Packages</h4>
                        <p className="mb-0">Detailing options customized to your car's condition and your preferences.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="bg-dark-2 p-40 h-100 rounded-1">
                      <div className="relative wow fadeInUp">
                        <h4>Affordable Pricing</h4>
                        <p className="mb-0">Competitive rates with no hidden fees  -  quality service that fits your budget.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="bg-dark-2 p-40 h-100 rounded-1">
                      <div className="relative wow fadeInUp">
                        <h4>Aftercare Support</h4>
                        <p className="mb-0">We provide post-service tips and care advice to keep your car looking sharp.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="relative jarallax mh-500" aria-label="section">
              <div className="gradient-edge-top" />
              <div className="gradient-edge-bottom" />
              <img src="/images/background/3.webp" className="jarallax-img" alt="" />
            </section>
            <section>
              <div className="container">
                <div className="row g-4">
                  <div className="col-lg-5">
                    <div className="subtitle id-color wow fadeInUp" data-wow-delay=".0s">Everything You Need to Know</div>
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">Frequently Asked Questions</h2>
                  </div>
                  <div className="col-lg-7">
                    <div className="accordion s2 wow fadeInUp">
                      <div className="accordion-section">
                        <div className="accordion-section-title" data-tab="#accordion-a1">
                          What is car detailing?
                        </div>
                        <div className="accordion-section-content" id="accordion-a1">
                          Car detailing is a thorough cleaning, restoration, and finishing of a vehicle to produce a show-quality cleanliness and polish, both inside and out.
                        </div>
                        <div className="accordion-section-title" data-tab="#accordion-a2">
                          How often should I get my car detailed?
                        </div>
                        <div className="accordion-section-content" id="accordion-a2">
                          It depends on your usage, but most experts recommend detailing every 3-6 months to maintain your car's appearance and protect its value.
                        </div>  
                        <div className="accordion-section-title" data-tab="#accordion-a3">
                          What's included in a full detailing service?
                        </div>
                        <div className="accordion-section-content" id="accordion-a3">
                          A full detail typically includes exterior wash and polish, interior vacuuming and shampooing, leather conditioning, window cleaning, and engine bay cleaning.
                        </div>
                        <div className="accordion-section-title" data-tab="#accordion-a4">
                          Will detailing remove scratches and stains?
                        </div>
                        <div className="accordion-section-content" id="accordion-a4">
                          Light scratches and stains can often be removed through polishing and deep cleaning. Heavier damage may require paint correction or special treatment.
                        </div>
                        <div className="accordion-section-title" data-tab="#accordion-a5">
                          How long does a detailing session take?
                        </div>
                        <div className="accordion-section-content" id="accordion-a5">
                          Depending on the vehicle size and service level, a full detailing can take between 2 to 6 hours. We'll let you know the estimated time during booking.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-dark-2 pt-50 relative no-bottom">
              <div className="container relative z-2">
                <div className="row g-4">
                  <div className="col-lg-8 offset-lg-2 mb-4 text-center">
                    <div className="subtitle id-color wow fadeInUp mb-3">Our Instagram</div>
                    <h2 className="wow fadeInUp">@velocare_auto</h2>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row g-0">
                  <div className="col-md-6">
                    <div className="row g-0">
                      <div className="col-3">
                        <a href="#" className="d-block hover relative overflow-hidden text-light">
                          <img src="/images/gallery-square/1.webp" className="w-100 hover-scale-1-1" alt="" />
                          <div className="abs abs-centered fs-24 text-white hover-op-0">
                            <i className="fa-brands fa-instagram" />
                          </div>
                        </a>
                      </div>
                      <div className="col-3">
                        <a href="#" className="d-block hover relative overflow-hidden text-light">
                          <img src="/images/gallery-square/2.webp" className="w-100 hover-scale-1-1" alt="" />
                          <div className="abs abs-centered fs-24 text-white hover-op-0">
                            <i className="fa-brands fa-instagram" />
                          </div>
                        </a>
                      </div>
                      <div className="col-3">
                        <a href="#" className="d-block hover relative overflow-hidden text-light">
                          <img src="/images/gallery-square/3.webp" className="w-100 hover-scale-1-1" alt="" />
                          <div className="abs abs-centered fs-24 text-white hover-op-0">
                            <i className="fa-brands fa-instagram" />
                          </div>
                        </a>
                      </div>
                      <div className="col-3">
                        <a href="#" className="d-block hover relative overflow-hidden text-light">
                          <img src="/images/gallery-square/4.webp" className="w-100 hover-scale-1-1" alt="" />
                          <div className="abs abs-centered fs-24 text-white hover-op-0">
                            <i className="fa-brands fa-instagram" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row g-0">
                      <div className="col-3">
                        <a href="#" className="d-block hover relative overflow-hidden text-light">
                          <img src="/images/gallery-square/5.webp" className="w-100 hover-scale-1-1" alt="" />
                          <div className="abs abs-centered fs-24 text-white hover-op-0">
                            <i className="fa-brands fa-instagram" />
                          </div>
                        </a>
                      </div>
                      <div className="col-3">
                        <a href="#" className="d-block hover relative overflow-hidden text-light">
                          <img src="/images/gallery-square/6.webp" className="w-100 hover-scale-1-1" alt="" />
                          <div className="abs abs-centered fs-24 text-white hover-op-0">
                            <i className="fa-brands fa-instagram" />
                          </div>
                        </a>
                      </div>
                      <div className="col-3">
                        <a href="#" className="d-block hover relative overflow-hidden text-light">
                          <img src="/images/gallery-square/7.webp" className="w-100 hover-scale-1-1" alt="" />
                          <div className="abs abs-centered fs-24 text-white hover-op-0">
                            <i className="fa-brands fa-instagram" />
                          </div>
                        </a>
                      </div>
                      <div className="col-3">
                        <a href="#" className="d-block hover relative overflow-hidden text-light">
                          <img src="/images/gallery-square/8.webp" className="w-100 hover-scale-1-1" alt="" />
                          <div className="abs abs-centered fs-24 text-white hover-op-0">
                            <i className="fa-brands fa-instagram" />
                          </div>
                        </a>
                      </div>
                    </div>
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
  fileName: "homepage-4.html",
  title: "Velocare Auto Studio - Premium Detailing and Auto Care",
  description: "Velocare Auto Studio - Premium Detailing and Auto Care",
  Component: Homepage4PageComponent,
};
