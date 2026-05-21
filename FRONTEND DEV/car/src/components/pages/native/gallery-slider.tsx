import type { NativePageDefinition } from "@/lib/native-page-types";

function GallerySliderPageComponent() {
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
            <section className="text-light p-0">
              <div className="v-center">
                <div className="gradient-edge-top z-2" />
                <div className="swiper">
                  {/* Additional required wrapper */}
                  <div className="swiper-wrapper">
                    {/* Slides */}
                    <div className="swiper-slide">
                      <div className="swiper-inner" data-bgimage="url(/images/gallery/l1.webp)" />
                    </div>
                    {/* Slides */}
                    <div className="swiper-slide">
                      <div className="swiper-inner" data-bgimage="url(/images/gallery/l2.webp)" />
                    </div>
                    {/* Slides */}
                    <div className="swiper-slide">
                      <div className="swiper-inner" data-bgimage="url(/images/gallery/l3.webp)" />
                    </div>
                    {/* Slides */}
                    <div className="swiper-slide">
                      <div className="swiper-inner" data-bgimage="url(/images/gallery/l4.webp)" />
                    </div>
                    {/* Slides */}
                    <div className="swiper-slide">
                      <div className="swiper-inner" data-bgimage="url(/images/gallery/l5.webp)" />
                    </div>
                    {/* Slides */}
                    <div className="swiper-slide">
                      <div className="swiper-inner" data-bgimage="url(/images/gallery/l6.webp)" />
                    </div>
                    {/* Slides */}
                    <div className="swiper-slide">
                      <div className="swiper-inner" data-bgimage="url(/images/gallery/l7.webp)" />
                    </div>
                    {/* Slides */}
                    <div className="swiper-slide">
                      <div className="swiper-inner" data-bgimage="url(/images/gallery/l8.webp)" />
                    </div>
                    {/* Slides */}
                    <div className="swiper-slide">
                      <div className="swiper-inner" data-bgimage="url(/images/gallery/l9.webp)" />
                    </div>
                  </div>
                  {/* If we need pagination */}
                  <div className="swiper-pagination" />
                  {/* If we need navigation buttons */}
                  <div className="swiper-button-prev" />
                  <div className="swiper-button-next" />
                </div>
              </div>
            </section>
          </div>
          {/* content end */}
          {/* footer begin */}
          <footer>
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
  fileName: "gallery-slider.html",
  title: "Velocare Auto Studio - Premium Detailing and Auto Care",
  description: "Velocare Auto Studio - Premium Detailing and Auto Care",
  Component: GallerySliderPageComponent,
};
