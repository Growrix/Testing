import type { NativePageDefinition } from "@/lib/native-page-types";

function Homepage8PageComponent() {
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
            <section className="text-light no-top no-bottom relative overflow-hidden">
              <div className="mh-800">
                <div className="abs w-100 bottom-0 z-2 pb-5">
                  <div className="container">
                    <div className="row g-4 justify-content-between align-items-bottom">
                      <div className="col-lg-8"> 
                        <div className="sw-text-wrapper">
                          <div className="subtitle wow fadeInUp">Car Detailing Service</div>
                          <h1 className="fs-84 fs-xs-10vw text-uppercase wow fadeInUp">Find Your Dream Car Here</h1>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="spacer-double" />
                        <p className="text-white mb-0 wow fadeInUp" data-wow-delay=".2s">At Velocare Auto Studio, we provide trusted, seamless car sales for individuals and businesses, offering quality vehicles, flexible financing, and ensuring a smooth buying experience every time.</p>
                      </div>
                    </div>
                    <div className="spacer-single xs-hide" />
                  </div>
                </div>
                <div className="swiper">
                  {/* Additional required wrapper */}
                  <div className="swiper-wrapper">
                    {/* Slides */}
                    <div className="swiper-slide">
                      <div className="swiper-inner" data-bgimage="url(/images/slider-cars/1.webp)">
                        <div className="sw-overlay op-6" />
                      </div>                            
                    </div>
                    {/* Slides */}
                    <div className="swiper-slide">
                      <div className="swiper-inner" data-bgimage="url(/images/slider-cars/2.webp)">
                        <div className="sw-overlay op-6" />
                      </div>                            
                    </div>
                    {/* Slides */}
                    <div className="swiper-slide">
                      <div className="swiper-inner" data-bgimage="url(/images/slider-cars/3.webp)">
                        <div className="sw-overlay op-6" />
                      </div>                            
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="container">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <h3>Browse by Type</h3>
                  </div>                                       
                </div>
                <div className="owl-custom-nav menu-float" data-target="#carousel-1">
                  <a className="btn-next" />
                  <a className="btn-prev" />                                
                  <div id="carousel-1" className="owl-5-cols owl-carousel owl-theme">
                    {/* item begin */}
                    <div className="item">
                      <a href="#" className="d-block text-center p-5 px-0 rounded-1 hover bg-dark-2">
                        <img src="/images/car-type/suv.webp" className="w-90px mb-3 op-4 hover-op-1" alt="" />
                        <h5 className="mb-0">SUV</h5>
                      </a>
                    </div>
                    {/* item end */}
                    {/* item begin */}
                    <div className="item">
                      <a href="#" className="d-block text-center p-5 px-0 rounded-1 hover bg-dark-2">
                        <img src="/images/car-type/sedan.webp" className="w-90px mb-3 op-4 hover-op-1" alt="" />
                        <h5 className="mb-0">Sedan</h5>
                      </a>
                    </div>
                    {/* item end */}
                    {/* item begin */}
                    <div className="item">
                      <a href="#" className="d-block text-center p-5 px-0 rounded-1 hover bg-dark-2">
                        <img src="/images/car-type/van.webp" className="w-90px mb-3 op-4 hover-op-1" alt="" />
                        <h5 className="mb-0">Van</h5>
                      </a>
                    </div>
                    {/* item end */}
                    {/* item begin */}
                    <div className="item">
                      <a href="#" className="d-block text-center p-5 px-0 rounded-1 hover bg-dark-2">
                        <img src="/images/car-type/truck.webp" className="w-90px mb-3 op-4 hover-op-1" alt="" />
                        <h5 className="mb-0">Truck</h5>
                      </a>
                    </div>
                    {/* item end */}
                    {/* item begin */}
                    <div className="item">
                      <a href="#" className="d-block text-center p-5 px-0 rounded-1 hover bg-dark-2">
                        <img src="/images/car-type/ev.webp" className="w-90px mb-3 op-4 hover-op-1" alt="" />
                        <h5 className="mb-0">Electric</h5>
                      </a>
                    </div>
                    {/* item end */}
                  </div>
                </div>
              </div>
            </section>
            <section className="pt-0">
              <div className="container-fluid relative z-1">
                <div className="row g-0 align-items-center">
                  {/* Buy a Car */}
                  <div className="col-md-6">
                    <div className="p-40" data-bgimage="url(/images/background/12.webp)">
                      <div className="relative m-lg-4 z-2">
                        <div className="subtitle wow fadeInUp" data-wow-delay=".2s">Find Your Perfect Ride</div>
                        <h2 className="wow fadeInUp" data-wow-delay=".4s">Buy a Car</h2>
                        <p className="wow fadeInUp" data-wow-delay=".6s">
                          Discover a wide range of new and pre-owned vehicles at competitive prices. 
                          With flexible financing options and expert guidance, we make it easy for you 
                          to drive home your dream car with confidence.
                        </p>
                        <a className="btn-main btn-line fx-slide wow fadeInUp" href="#" data-wow-delay=".6s">
                          <span>Browse Cars</span>
                        </a>
                      </div>
                      <div className="sw-overlay op-5" />
                    </div>
                  </div>
                  {/* Sell Your Car */}
                  <div className="col-md-6">
                    <div className="p-40" data-bgimage="url(/images/background/13.webp)">
                      <div className="relative m-lg-4 z-2">
                        <div className="subtitle wow fadeInUp" data-wow-delay=".2s">Get the Best Value</div>
                        <h2 className="wow fadeInUp" data-wow-delay=".4s">Sell Your Car</h2>
                        <p className="wow fadeInUp" data-wow-delay=".6s">
                          Sell your vehicle quickly and easily with our trusted dealership. 
                          We offer fair market valuations, instant offers, and a hassle-free 
                          process to help you get the best price without the stress.
                        </p>
                        <a className="btn-main btn-line fx-slide wow fadeInUp" href="#" data-wow-delay=".6s">
                          <span>Sell Your Car</span>
                        </a>
                      </div>
                      <div className="sw-overlay op-5" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="pt-0">
              <div className="container">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <h3>Browse by Brand</h3>
                  </div>
                </div>
                <div className="owl-custom-nav menu-float" data-target="#carousel-2">
                  <a className="btn-next" />
                  <a className="btn-prev" />                                
                  <div id="carousel-2" className="owl-5-cols owl-carousel owl-theme">
                    {/* Bugatti */}
                    <div className="item">
                      <a href="#" className="d-block text-center p-30 px-0 rounded-1 hover bg-dark-2">
                        <img src="/images/logo-brands/1.webp" className="w-80px mb-3 op-4 hover-op-1" alt="" />
                        <h5 className="mb-0">Bugatti</h5>
                      </a>
                    </div>
                    {/* Ferrari */}
                    <div className="item">
                      <a href="#" className="d-block text-center p-30 px-0 rounded-1 hover bg-dark-2">
                        <img src="/images/logo-brands/2.webp" className="w-80px mb-3 op-4 hover-op-1" alt="" />
                        <h5 className="mb-0">Ferrari</h5>
                      </a>
                    </div>
                    {/* Honda */}
                    <div className="item">
                      <a href="#" className="d-block text-center p-30 px-0 rounded-1 hover bg-dark-2">
                        <img src="/images/logo-brands/3.webp" className="w-80px mb-3 op-4 hover-op-1" alt="" />
                        <h5 className="mb-0">Honda</h5>
                      </a>
                    </div>
                    {/* Lamborghini */}
                    <div className="item">
                      <a href="#" className="d-block text-center p-30 px-0 rounded-1 hover bg-dark-2">
                        <img src="/images/logo-brands/4.webp" className="w-80px mb-3 op-4 hover-op-1" alt="" />
                        <h5 className="mb-0">Lamborghini</h5>
                      </a>
                    </div>
                    {/* Lexus */}
                    <div className="item">
                      <a href="#" className="d-block text-center p-30 px-0 rounded-1 hover bg-dark-2">
                        <img src="/images/logo-brands/5.webp" className="w-80px mb-3 op-4 hover-op-1" alt="" />
                        <h5 className="mb-0">Lexus</h5>
                      </a>
                    </div>
                    {/* Maserati */}
                    <div className="item">
                      <a href="#" className="d-block text-center p-30 px-0 rounded-1 hover bg-dark-2">
                        <img src="/images/logo-brands/6.webp" className="w-80px mb-3 op-4 hover-op-1" alt="" />
                        <h5 className="mb-0">Maserati</h5>
                      </a>
                    </div>
                    {/* Mazda */}
                    <div className="item">
                      <a href="#" className="d-block text-center p-30 px-0 rounded-1 hover bg-dark-2">
                        <img src="/images/logo-brands/7.webp" className="w-80px mb-3 op-4 hover-op-1" alt="" />
                        <h5 className="mb-0">Mazda</h5>
                      </a>
                    </div>
                    {/* Mitsubishi */}
                    <div className="item">
                      <a href="#" className="d-block text-center p-30 px-0 rounded-1 hover bg-dark-2">
                        <img src="/images/logo-brands/8.webp" className="w-80px mb-3 op-4 hover-op-1" alt="" />
                        <h5 className="mb-0">Mitsubishi</h5>
                      </a>
                    </div>
                    {/* Peugeot */}
                    <div className="item">
                      <a href="#" className="d-block text-center p-30 px-0 rounded-1 hover bg-dark-2">
                        <img src="/images/logo-brands/9.webp" className="w-80px mb-3 op-4 hover-op-1" alt="" />
                        <h5 className="mb-0">Peugeot</h5>
                      </a>
                    </div>
                    {/* Mercedes-Benz */}
                    <div className="item">
                      <a href="#" className="d-block text-center p-30 px-0 rounded-1 hover bg-dark-2">
                        <img src="/images/logo-brands/10.webp" className="w-80px mb-3 op-4 hover-op-1" alt="" />
                        <h5 className="mb-0">Mercedes</h5>
                      </a>
                    </div>
                    {/* Renault */}
                    <div className="item">
                      <a href="#" className="d-block text-center p-30 px-0 rounded-1 hover bg-dark-2">
                        <img src="/images/logo-brands/11.webp" className="w-80px mb-3 op-4 hover-op-1" alt="" />
                        <h5 className="mb-0">Renault</h5>
                      </a>
                    </div>
                    {/* Rolls Royce */}
                    <div className="item">
                      <a href="#" className="d-block text-center p-30 px-0 rounded-1 hover bg-dark-2">
                        <img src="/images/logo-brands/12.webp" className="w-80px mb-3 op-4 hover-op-1" alt="" />
                        <h5 className="mb-0">Rolls Royce</h5>
                      </a>
                    </div>
                    {/* Suzuki */}
                    <div className="item">
                      <a href="#" className="d-block text-center p-30 px-0 rounded-1 hover bg-dark-2">
                        <img src="/images/logo-brands/13.webp" className="w-80px mb-3 op-4 hover-op-1" alt="" />
                        <h5 className="mb-0">Suzuki</h5>
                      </a>
                    </div>
                    {/* Tesla */}
                    <div className="item">
                      <a href="#" className="d-block text-center p-30 px-0 rounded-1 hover bg-dark-2">
                        <img src="/images/logo-brands/14.webp" className="w-80px mb-3 op-4 hover-op-1" alt="" />
                        <h5 className="mb-0">Tesla</h5>
                      </a>
                    </div>
                    {/* Volkswagen */}
                    <div className="item">
                      <a href="#" className="d-block text-center p-30 px-0 rounded-1 hover bg-dark-2">
                        <img src="/images/logo-brands/15.webp" className="w-80px mb-3 op-4 hover-op-1" alt="" />
                        <h5 className="mb-0">Volkswagen</h5>
                      </a>
                    </div>
                    {/* Volvo */}
                    <div className="item">
                      <a href="#" className="d-block text-center p-30 px-0 rounded-1 hover bg-dark-2">
                        <img src="/images/logo-brands/16.webp" className="w-80px mb-3 op-4 hover-op-1" alt="" />
                        <h5 className="mb-0">Volvo</h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-dark-2">
              <div className="container">
                <div className="row g-4 justify-content-center mb-2">
                  <div className="col-lg-6">
                    <div className="text-center">
                      <div className="subtitle">Latest Cars</div>
                      <h2>Explore Premium Vehicles</h2>
                    </div>
                  </div>                                       
                </div>
                <div className="row g-4">
                  <div className="col-lg-4 col-md-6">
                    <a href="/car-single.html" className="d-block h-100 hover relative">
                      <div className="relative rounded-1 overflow-hidden">
                        <h3 className="abs rounded-3 text-white lh-1 p-2 m-4 bottom-0 inset-s-0 z-3">$42,000</h3>
                        <img src="/images/cars/1.webp" className="w-100 hover-scale-1-2" alt="" />
                        <div className="gradient-edge-bottom op-5" />
                      </div>
                      <h3 className="m-0 mt-3">BMW X5</h3>
                      <small>SUV</small>
                      <div className="row g-1 g-4 py-4 text-center fs-14 text-white">
                        <div className="col-3"><img src="/images/icons-car/1.png" className="w-100 px-3 op-5 mb-1" alt="" /> 18000 Mi</div>
                        <div className="col-3"><img src="/images/icons-car/2.png" className="w-100 px-3 op-5 mb-1" alt="" /> 3.0L</div>
                        <div className="col-3"><img src="/images/icons-car/3.png" className="w-100 px-3 op-5 mb-1" alt="" /> Gasoline</div>
                        <div className="col-3"><img src="/images/icons-car/4.png" className="w-100 px-3 op-5 mb-1" alt="" /> Automatic</div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a href="/car-single.html" className="d-block h-100 hover relative">
                      <div className="relative rounded-1 overflow-hidden">
                        <h3 className="abs bg-color rounded-3 text-white fs-14 lh-1 p-2 px-3 m-4 top-0 inset-e-0 z-3">Special Price</h3>
                        <h3 className="abs rounded-3 text-white lh-1 p-2 m-4 bottom-0 inset-s-0 z-3">$38,500</h3>
                        <img src="/images/cars/2.webp" className="w-100 hover-scale-1-2" alt="" />
                        <div className="gradient-edge-bottom op-5" />
                      </div>
                      <h3 className="m-0 mt-3">Audi A4</h3>
                      <small>Sedan</small>
                      <div className="row g-1 g-4 py-4 text-center fs-14 text-white">
                        <div className="col-3"><img src="/images/icons-car/1.png" className="w-100 px-3 op-5 mb-1" alt="" /> 12000 Mi</div>
                        <div className="col-3"><img src="/images/icons-car/2.png" className="w-100 px-3 op-5 mb-1" alt="" /> 2.0L Turbo</div>
                        <div className="col-3"><img src="/images/icons-car/3.png" className="w-100 px-3 op-5 mb-1" alt="" /> Gasoline</div>
                        <div className="col-3"><img src="/images/icons-car/4.png" className="w-100 px-3 op-5 mb-1" alt="" /> Automatic</div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a href="/car-single.html" className="d-block h-100 hover relative">
                      <div className="relative rounded-1 overflow-hidden">
                        <h3 className="abs rounded-3 text-white lh-1 p-2 m-4 bottom-0 inset-s-0 z-3">$55,000</h3>
                        <img src="/images/cars/3.webp" className="w-100 hover-scale-1-2" alt="" />
                        <div className="gradient-edge-bottom op-5" />
                      </div>
                      <h3 className="m-0 mt-3">Mercedes C300</h3>
                      <small>Sedan</small>
                      <div className="row g-1 g-4 py-4 text-center fs-14 text-white">
                        <div className="col-3"><img src="/images/icons-car/1.png" className="w-100 px-3 op-5 mb-1" alt="" /> 9000 Mi</div>
                        <div className="col-3"><img src="/images/icons-car/2.png" className="w-100 px-3 op-5 mb-1" alt="" /> 2.0L</div>
                        <div className="col-3"><img src="/images/icons-car/3.png" className="w-100 px-3 op-5 mb-1" alt="" /> Gasoline</div>
                        <div className="col-3"><img src="/images/icons-car/4.png" className="w-100 px-3 op-5 mb-1" alt="" /> Automatic</div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a href="/car-single.html" className="d-block h-100 hover relative">
                      <div className="relative rounded-1 overflow-hidden">
                        <h3 className="abs rounded-3 text-white lh-1 p-2 m-4 bottom-0 inset-s-0 z-3">$60,000</h3>
                        <img src="/images/cars/4.webp" className="w-100 hover-scale-1-2" alt="" />
                        <div className="gradient-edge-bottom op-5" />
                      </div>
                      <h3 className="m-0 mt-3">Tesla Model 3</h3>
                      <small>Electric</small>
                      <div className="row g-1 g-4 py-4 text-center fs-14 text-white">
                        <div className="col-3"><img src="/images/icons-car/1.png" className="w-100 px-3 op-5 mb-1" alt="" /> 5000 Mi</div>
                        <div className="col-3"><img src="/images/icons-car/2.png" className="w-100 px-3 op-5 mb-1" alt="" /> Dual Motor</div>
                        <div className="col-3"><img src="/images/icons-car/3.png" className="w-100 px-3 op-5 mb-1" alt="" /> Electric</div>
                        <div className="col-3"><img src="/images/icons-car/4.png" className="w-100 px-3 op-5 mb-1" alt="" /> Automatic</div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a href="/car-single.html" className="d-block h-100 hover relative">
                      <div className="relative rounded-1 overflow-hidden">
                        <h3 className="abs rounded-3 text-white lh-1 p-2 m-4 bottom-0 inset-s-0 z-3">$47,000</h3>
                        <img src="/images/cars/5.webp" className="w-100 hover-scale-1-2" alt="" />
                        <div className="gradient-edge-bottom op-5" />
                      </div>
                      <h3 className="m-0 mt-3">Toyota Fortuner</h3>
                      <small>SUV</small>
                      <div className="row g-1 g-4 py-4 text-center fs-14 text-white">
                        <div className="col-3"><img src="/images/icons-car/1.png" className="w-100 px-3 op-5 mb-1" alt="" /> 22000 Mi</div>
                        <div className="col-3"><img src="/images/icons-car/2.png" className="w-100 px-3 op-5 mb-1" alt="" /> 2.8L</div>
                        <div className="col-3"><img src="/images/icons-car/3.png" className="w-100 px-3 op-5 mb-1" alt="" /> Diesel</div>
                        <div className="col-3"><img src="/images/icons-car/4.png" className="w-100 px-3 op-5 mb-1" alt="" /> Automatic</div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a href="/car-single.html" className="d-block h-100 hover relative">
                      <div className="relative rounded-1 overflow-hidden">
                        <h3 className="abs bg-color rounded-3 text-white fs-14 lh-1 p-2 px-3 m-4 top-0 inset-e-0 z-3">Special Price</h3>
                        <h3 className="abs rounded-3 text-white lh-1 p-2 m-4 bottom-0 inset-s-0 z-3">$35,000</h3>
                        <img src="/images/cars/6.webp" className="w-100 hover-scale-1-2" alt="" />
                        <div className="gradient-edge-bottom op-5" />
                      </div>
                      <h3 className="m-0 mt-3">Honda Civic</h3>
                      <small>Sedan</small>
                      <div className="row g-1 g-4 py-4 text-center fs-14 text-white">
                        <div className="col-3"><img src="/images/icons-car/1.png" className="w-100 px-3 op-5 mb-1" alt="" /> 15000 Mi</div>
                        <div className="col-3"><img src="/images/icons-car/2.png" className="w-100 px-3 op-5 mb-1" alt="" /> 1.8L</div>
                        <div className="col-3"><img src="/images/icons-car/3.png" className="w-100 px-3 op-5 mb-1" alt="" /> Gasoline</div>
                        <div className="col-3"><img src="/images/icons-car/4.png" className="w-100 px-3 op-5 mb-1" alt="" /> Manual</div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a href="/car-single.html" className="d-block h-100 hover relative">
                      <div className="relative rounded-1 overflow-hidden">
                        <h3 className="abs bg-color rounded-3 text-white fs-14 lh-1 p-2 px-3 m-4 top-0 inset-e-0 z-3">Special Price</h3>
                        <h3 className="abs rounded-3 text-white lh-1 p-2 m-4 bottom-0 inset-s-0 z-3">$72,000</h3>
                        <img src="/images/cars/7.webp" className="w-100 hover-scale-1-2" alt="" />
                        <div className="gradient-edge-bottom op-5" />
                      </div>
                      <h3 className="m-0 mt-3">Ford Mustang</h3>
                      <small>Coupe</small>
                      <div className="row g-1 g-4 py-4 text-center fs-14 text-white">
                        <div className="col-3"><img src="/images/icons-car/1.png" className="w-100 px-3 op-5 mb-1" alt="" /> 8000 Mi</div>
                        <div className="col-3"><img src="/images/icons-car/2.png" className="w-100 px-3 op-5 mb-1" alt="" /> 5.0L V8</div>
                        <div className="col-3"><img src="/images/icons-car/3.png" className="w-100 px-3 op-5 mb-1" alt="" /> Gasoline</div>
                        <div className="col-3"><img src="/images/icons-car/4.png" className="w-100 px-3 op-5 mb-1" alt="" /> Automatic</div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a href="/car-single.html" className="d-block h-100 hover relative">
                      <div className="relative rounded-1 overflow-hidden">
                        <h3 className="abs rounded-3 text-white lh-1 p-2 m-4 bottom-0 inset-s-0 z-3">$58,000</h3>
                        <img src="/images/cars/8.webp" className="w-100 hover-scale-1-2" alt="" />
                        <div className="gradient-edge-bottom op-5" />
                      </div>
                      <h3 className="m-0 mt-3">Jeep Wrangler</h3>
                      <small>SUV</small>
                      <div className="row g-1 g-4 py-4 text-center fs-14 text-white">
                        <div className="col-3">
                          <img src="/images/icons-car/1.png" className="w-100 px-3 op-5 mb-1" alt="" />
                          9500 Mi
                        </div>
                        <div className="col-3">
                          <img src="/images/icons-car/2.png" className="w-100 px-3 op-5 mb-1" alt="" />
                          3.6L V6
                        </div>
                        <div className="col-3">
                          <img src="/images/icons-car/3.png" className="w-100 px-3 op-5 mb-1" alt="" />
                          Gasoline
                        </div>
                        <div className="col-3">
                          <img src="/images/icons-car/4.png" className="w-100 px-3 op-5 mb-1" alt="" />
                          Automatic
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <a href="/car-single.html" className="d-block h-100 hover relative">
                      <div className="relative rounded-1 overflow-hidden">
                        <h3 className="abs rounded-3 text-white lh-1 p-2 m-4 bottom-0 inset-s-0 z-3">$420,000</h3>
                        <img src="/images/cars/9.webp" className="w-100 hover-scale-1-2" alt="" />
                        <div className="gradient-edge-bottom op-5" />
                      </div>
                      <h3 className="m-0 mt-3">Rolls-Royce Phantom</h3>
                      <small>Luxury Sedan</small>
                      <div className="row g-1 g-4 py-4 text-center fs-14 text-white">
                        <div className="col-3">
                          <img src="/images/icons-car/1.png" className="w-100 px-3 op-5 mb-1" alt="" />
                          3200 Mi
                        </div>
                        <div className="col-3">
                          <img src="/images/icons-car/2.png" className="w-100 px-3 op-5 mb-1" alt="" />
                          6.75L V12
                        </div>
                        <div className="col-3">
                          <img src="/images/icons-car/3.png" className="w-100 px-3 op-5 mb-1" alt="" />
                          Gasoline
                        </div>
                        <div className="col-3">
                          <img src="/images/icons-car/4.png" className="w-100 px-3 op-5 mb-1" alt="" />
                          Automatic
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="text-center mt-5">
                  <a className="btn-main fx-slide wow fadeInUp" href="#" data-wow-delay=".6s">
                    <span>View More Cars</span>
                  </a>
                </div>
              </div>
            </section>
            <section className="bg-dark relative" data-bgimage="url(/images/background/14.webp) center">
              <div className="sw-overlay sw-8" />
              <div className="container relative z-2">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="owl-carousel owl-theme owl-3-dots wow fadeInUp">
                        {/* Testimonial 1 */}
                        <div className="item">
                          <div className="bg-dark-2 rounded-1 p-30">
                            <div className="d-flex justify-content-between mb-3">
                              <div className="d-flex align-items-center">
                                <img className="w-40px circle me-3" alt="" src="/images/testimonial/1.webp" />
                                <div className="mt-2">
                                  <div className="text-white fw-bold lh-1">John Smith</div>
                                  <small>7 December 2024</small>
                                </div>
                              </div>
                              <img src="/images/misc/google-icon.svg" className="w-30px" alt="" />
                            </div>
                            <div className="de-rating-ext mb-2">
                              <span className="d-stars">
                                <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                                <i className="fa fa-star" /><i className="fa fa-star" />
                              </span>
                              <span className="ms-2 text-white">5.0</span>
                            </div>
                            <p>"Fantastic experience! The team helped me find the perfect car within my budget. Smooth and stress-free process."</p>
                          </div>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="item">
                          <div className="bg-dark-2 rounded-1 p-30">
                            <div className="d-flex justify-content-between mb-3">
                              <div className="d-flex align-items-center">
                                <img className="w-40px circle me-3" alt="" src="/images/testimonial/2.webp" />
                                <div className="mt-2">
                                  <div className="text-white fw-bold lh-1">Jessica Lee</div>
                                  <small>12 January 2025</small>
                                </div>
                              </div>
                              <img src="/images/misc/google-icon.svg" className="w-30px" alt="" />
                            </div>
                            <div className="de-rating-ext mb-2">
                              <span className="d-stars">
                                <i className="fa fa-star" /><i className="fa fa-star" />
                                <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                              </span>
                              <span className="ms-2 text-white">5.0</span>
                            </div>
                            <p>"Great selection and transparent pricing. I felt confident throughout the entire buying process."</p>
                          </div>
                        </div>
                        {/* Testimonial 3 */}
                        <div className="item">
                          <div className="bg-dark-2 rounded-1 p-30">
                            <div className="d-flex justify-content-between mb-3">
                              <div className="d-flex align-items-center">
                                <img className="w-40px circle me-3" alt="" src="/images/testimonial/3.webp" />
                                <div className="mt-2">
                                  <div className="text-white fw-bold lh-1">Michael Brown</div>
                                  <small>2 February 2025</small>
                                </div>
                              </div>
                              <img src="/images/misc/google-icon.svg" className="w-30px" alt="" />
                            </div>
                            <div className="de-rating-ext mb-2">
                              <span className="d-stars">
                                <i className="fa fa-star" /><i className="fa fa-star" />
                                <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                              </span>
                              <span className="ms-2 text-white">5.0</span>
                            </div>
                            <p>"Financing was quick and easy. I drove home my new car the same day without any hassle."</p>
                          </div>
                        </div>
                        {/* Testimonial 4 */}
                        <div className="item">
                          <div className="bg-dark-2 rounded-1 p-30">
                            <div className="d-flex justify-content-between mb-3">
                              <div className="d-flex align-items-center">
                                <img className="w-40px circle me-3" alt="" src="/images/testimonial/4.webp" />
                                <div className="mt-2">
                                  <div className="text-white fw-bold lh-1">Rachel Adams</div>
                                  <small>15 March 2025</small>
                                </div>
                              </div>
                              <img src="/images/misc/google-icon.svg" className="w-30px" alt="" />
                            </div>
                            <div className="de-rating-ext mb-2">
                              <span className="d-stars">
                                <i className="fa fa-star" /><i className="fa fa-star" />
                                <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                              </span>
                              <span className="ms-2 text-white">5.0</span>
                            </div>
                            <p>"Booking a test drive was super easy. The staff were friendly and very helpful."</p>
                          </div>
                        </div>
                        {/* Testimonial 5 */}
                        <div className="item">
                          <div className="bg-dark-2 rounded-1 p-30">
                            <div className="d-flex justify-content-between mb-3">
                              <div className="d-flex align-items-center">
                                <img className="w-40px circle me-3" alt="" src="/images/testimonial/5.webp" />
                                <div className="mt-2">
                                  <div className="text-white fw-bold lh-1">Liam Carter</div>
                                  <small>8 April 2025</small>
                                </div>
                              </div>
                              <img src="/images/misc/google-icon.svg" className="w-30px" alt="" />
                            </div>
                            <div className="de-rating-ext mb-2">
                              <span className="d-stars">
                                <i className="fa fa-star" /><i className="fa fa-star" />
                                <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                              </span>
                              <span className="ms-2 text-white">5.0</span>
                            </div>
                            <p>"The car quality exceeded expectations. It felt almost brand new and runs perfectly."</p>
                          </div>
                        </div>
                        {/* Testimonial 6 */}
                        <div className="item">
                          <div className="bg-dark-2 rounded-1 p-30">
                            <div className="d-flex justify-content-between mb-3">
                              <div className="d-flex align-items-center">
                                <img className="w-40px circle me-3" alt="" src="/images/testimonial/6.webp" />
                                <div className="mt-2">
                                  <div className="text-white fw-bold lh-1">Emily Nguyen</div>
                                  <small>20 May 2025</small>
                                </div>
                              </div>
                              <img src="/images/misc/google-icon.svg" className="w-30px" alt="" />
                            </div>
                            <div className="de-rating-ext mb-2">
                              <span className="d-stars">
                                <i className="fa fa-star" /><i className="fa fa-star" />
                                <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                              </span>
                              <span className="ms-2 text-white">5.0</span>
                            </div>
                            <p>"Excellent after-sales support. They really care about their customers even after purchase."</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-dark-2 text-light">
              <div className="container relative z-1">
                <div className="row g-4 justify-content-center">
                  <div className="col-lg-6 text-center">
                    <div className="subtitle id-color">Trusted &amp; Reliable</div>
                    <h2>Why Choose Our Dealership?</h2>
                  </div>
                </div>
                <div className="row g-4">
                  <div className="col-lg-3 col-md-6">
                    <div className="bg-dark p-40 h-100 rounded-1">
                      <div className="relative wow fadeInUp">
                        <h4>Wide Vehicle Selection</h4>
                        <p className="mb-0">Explore a diverse inventory of new and pre-owned vehicles from top brands.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="bg-dark p-40 h-100 rounded-1">
                      <div className="relative wow fadeInUp">
                        <h4>Flexible Financing</h4>
                        <p className="mb-0">Easy financing options tailored to your budget with fast approval process.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="bg-dark p-40 h-100 rounded-1">
                      <div className="relative wow fadeInUp">
                        <h4>Certified Quality Cars</h4>
                        <p className="mb-0">All vehicles undergo thorough inspection to ensure safety and performance.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="bg-dark p-40 h-100 rounded-1">
                      <div className="relative wow fadeInUp">
                        <h4>Trade-In Services</h4>
                        <p className="mb-0">Get the best value for your current vehicle with our easy trade-in program.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="bg-dark p-40 h-100 rounded-1">
                      <div className="relative wow fadeInUp">
                        <h4>Transparent Pricing</h4>
                        <p className="mb-0">No hidden costs  -  clear, competitive pricing you can trust.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="bg-dark p-40 h-100 rounded-1">
                      <div className="relative wow fadeInUp">
                        <h4>Test Drive Anytime</h4>
                        <p className="mb-0">Schedule a test drive and experience your dream car firsthand.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="bg-dark p-40 h-100 rounded-1">
                      <div className="relative wow fadeInUp">
                        <h4>Warranty Options</h4>
                        <p className="mb-0">Drive with confidence with extended warranty and protection plans.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="bg-dark p-40 h-100 rounded-1">
                      <div className="relative wow fadeInUp">
                        <h4>After-Sales Support</h4>
                        <p className="mb-0">Ongoing service, maintenance, and customer support after your purchase.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                          Do you offer both new and used cars?
                        </div>
                        <div className="accordion-section-content" id="accordion-a1">
                          Yes, we provide a wide selection of brand-new and certified pre-owned vehicles to suit different needs and budgets.
                        </div>
                        <div className="accordion-section-title" data-tab="#accordion-a2">
                          Can I apply for financing?
                        </div>
                        <div className="accordion-section-content" id="accordion-a2">
                          Absolutely. We offer flexible financing options with competitive rates and a quick approval process.
                        </div>  
                        <div className="accordion-section-title" data-tab="#accordion-a3">
                          Do you accept trade-ins?
                        </div>
                        <div className="accordion-section-content" id="accordion-a3">
                          Yes, you can trade in your current vehicle and use its value toward your next purchase with us.
                        </div>
                        <div className="accordion-section-title" data-tab="#accordion-a4">
                          Are your cars inspected?
                        </div>
                        <div className="accordion-section-content" id="accordion-a4">
                          All our vehicles go through a thorough inspection to ensure quality, safety, and performance before being listed.
                        </div>
                        <div className="accordion-section-title" data-tab="#accordion-a5">
                          Do your vehicles come with a warranty?
                        </div>
                        <div className="accordion-section-content" id="accordion-a5">
                          Yes, we offer warranty options on many of our vehicles for added peace of mind after your purchase.
                        </div>
                        <div className="accordion-section-title" data-tab="#accordion-a6">
                          Can I schedule a test drive?
                        </div>
                        <div className="accordion-section-content" id="accordion-a6">
                          Of course. You can easily book a test drive online or visit our showroom at your convenience.
                        </div>
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
  fileName: "homepage-8.html",
  title: "Velocare Auto Studio - Premium Detailing and Auto Care",
  description: "Velocare Auto Studio - Premium Detailing and Auto Care",
  Component: Homepage8PageComponent,
};
