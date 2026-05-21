import type { NativePageDefinition } from "@/lib/native-page-types";

function ShopProductSinglePageComponent() {
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
                        <input type="text" name="Name" id="name" className="de-quick-search ms-3 w-100 rounded-20" placeholder="search..." />
                        <a className="de-icon-counter" href="#">
                          <div className="d-counter">0</div>
                          <img src="/images/ui/heart.svg" className="" alt="" />
                        </a>
                        <div id="btn-cart" className="de-icon-counter">
                          <div className="d-counter">5</div>
                          <img src="/images/ui/cart.svg" className="" alt="" />
                        </div>            
                        <span id="menu-btn" />
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
            <section className="pt-120 sm-pt-0">
              <div className="container">
                <div className="row gy-4 gx-5">
                  <div className="col-md-6">
                    <div id="sync1" className="owl-carousel owl-theme">
                      <div className="item"><img src="/images/shop/products/towel-1a.webp" className="w-100" alt="" /></div>
                      <div className="item"><img src="/images/shop/products/towel-1b.webp" className="w-100" alt="" /></div>
                      <div className="item"><img src="/images/shop/products/towel-1c.webp" className="w-100" alt="" /></div>
                      <div className="item"><img src="/images/shop/products/towel-1d.webp" className="w-100" alt="" /></div>
                      <div className="item"><img src="/images/shop/products/towel-1e.webp" className="w-100" alt="" /></div>
                    </div>
                    <div id="sync2" className="owl-carousel owl-theme">
                      <div className="item"><img src="/images/shop/products/towel-1a.webp" className="w-100" alt="" /></div>
                      <div className="item"><img src="/images/shop/products/towel-1b.webp" className="w-100" alt="" /></div>
                      <div className="item"><img src="/images/shop/products/towel-1c.webp" className="w-100" alt="" /></div>
                      <div className="item"><img src="/images/shop/products/towel-1d.webp" className="w-100" alt="" /></div>
                      <div className="item"><img src="/images/shop/products/towel-1e.webp" className="w-100" alt="" /></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="de-rating-ext mb-3">
                      <span className="d-stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </span> 4.8
                    </div>
                    <h2 className="fs-40">Premium Microfiber Cleaning Towel</h2>
                    <p className="col-lg-10">Experience a superior clean with the Premium Microfiber Cleaning Towel. Designed with ultra-soft, high-absorbency fibers, it effortlessly lifts dust, dirt, and residue from any surface without leaving streaks or scratches.</p>
                    <div className="d-flex mb-4 align-items-center">
                      <div>
                        <h3 className="fs-24 mb-0 me-2 line-through op-5">$7.49</h3>
                      </div>
                      <div>
                        <h3 className="fs-32 mb-0 me-2">$10.49</h3>
                      </div>
                      <div>
                        <span className="fs-18 fw-600 px-3 rounded-20px bg-color text-white">Sale</span>
                      </div>
                    </div>                            
                    <div className="row g-4">
                      <div className="col-lg-6 group radio__button mb-4">
                        <h5 className="mb-3">Select Color</h5>
                        <div className="atr__colors">
                          <div className="atr__color-1 active" data-image="images/shop/products/towel-1a.webp"><span data-bgcolor="#4ba1e8" /></div>
                          <div className="atr__color-2" data-image="images/shop/products/towel-1b.webp"><span data-bgcolor="#a7ef4e" /></div>
                          <div className="atr__color-3" data-image="images/shop/products/towel-1c.webp"><span data-bgcolor="#e17b42" /></div>
                          <div className="atr__color-3" data-image="images/shop/products/towel-1d.webp"><span data-bgcolor="#e44e83" /></div>
                          <div className="atr__color-3" data-image="images/shop/products/towel-1e.webp"><span data-bgcolor="#f1d857" /></div>
                        </div>
                      </div>
                      <div className="col-lg-6 group radio__button mb-4">
                        <h5 className="mb-3">Select Size</h5>
                        <input type="radio" name="size" id="size_1" defaultValue="small" defaultChecked />
                        <label htmlFor="size_1">Small</label>
                        <input type="radio" name="size" id="size_2" defaultValue="small" />
                        <label htmlFor="size_2">Medium</label>
                        <input type="radio" name="size" id="size_3" defaultValue="small" />
                        <label htmlFor="size_3">Large</label>
                      </div>
                    </div>
                    <div className="group radio__button mb-4">
                      <h5 className="mb-3">Quantity</h5>
                      <div className="de-number">
                        <span className="d-minus">-</span>
                        <input type="text" className="no-border no-bg" defaultValue={1} />
                        <span className="d-plus">+</span>
                      </div>
                    </div>
                    <a className="btn-main fx-slide mt-4 w-100" href="#"><span>Add to Cart</span></a>
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
            <h5 className="mb-3">Your Cart</h5>
            <div className="cart-items">                
              {/* cart item begin */}
              <div className="de__cart">
                <div className="de__cart-item justify-content-between">
                  <div className="d-wrap">
                    <input type="checkbox" id="item1" name="item1" className="d-checkbox__input" defaultChecked />
                    <label htmlFor="item1" className="d-checkbox__label align-items-center" />
                    <img src="/images/shop/products/soap-3a.webp" alt="" />
                    <div className="d-info">
                      <div>
                        <h4>Nanoskin NANO SUDS Wash &amp; Shine Shampoo</h4>                                
                        <span className="d-price">$32.99</span> 
                      </div>         
                    </div>  
                  </div>
                  <div className="de-number">
                    <span className="d-minus">-</span>
                    <input type="text" className="no-border no-bg" defaultValue={1} />
                    <span className="d-plus">+</span>
                  </div>
                </div>
              </div>   
              {/* cart item end */}
              {/* cart item begin */}
              <div className="de__cart">
                <div className="de__cart-item justify-content-between">
                  <div className="d-wrap">
                    <input type="checkbox" id="item2" name="item2" className="d-checkbox__input" defaultChecked />
                    <label htmlFor="item2" className="d-checkbox__label align-items-center" />
                    <img src="/images/shop/products/soap-1a.webp" alt="" />
                    <div className="d-info">
                      <div>
                        <h4>Meguiar's Gold Class Car Wash Shampoo</h4>                                
                        <span className="d-price">$11.99</span> 
                      </div>         
                    </div>  
                  </div>
                  <div className="de-number">
                    <span className="d-minus">-</span>
                    <input type="text" className="no-border no-bg" defaultValue={1} />
                    <span className="d-plus">+</span>
                  </div>
                </div>
              </div>   
              {/* cart item end */}
              {/* cart item begin */}
              <div className="de__cart">
                <div className="de__cart-item justify-content-between">
                  <div className="d-wrap">
                    <input type="checkbox" id="item3" name="item3" className="d-checkbox__input" defaultChecked />
                    <label htmlFor="item3" className="d-checkbox__label align-items-center" />
                    <img src="/images/shop/products/towel-1c.webp" alt="" />
                    <div className="d-info">
                      <div>
                        <h4>Premium Microfiber Cleaning Towel</h4>                                
                        <span className="d-price">$7.49</span> 
                      </div>         
                    </div>  
                  </div>
                  <div className="de-number">
                    <span className="d-minus">-</span>
                    <input type="text" className="no-border no-bg" defaultValue={1} />
                    <span className="d-plus">+</span>
                  </div>
                </div>
              </div>   
              {/* cart item end */}
              {/* cart item begin */}
              <div className="de__cart">
                <div className="de__cart-item justify-content-between">
                  <div className="d-wrap">
                    <input type="checkbox" id="item4" name="item4" className="d-checkbox__input" defaultChecked />
                    <label htmlFor="item4" className="d-checkbox__label align-items-center" />
                    <img src="/images/shop/products/wax-1a.webp" alt="" />
                    <div className="d-info">
                      <div>
                        <h4>Turtle Wax Original Hard Shell Shine Car Wax</h4>                                
                        <span className="d-price">$7.49</span> 
                      </div>         
                    </div>  
                  </div>
                  <div className="de-number">
                    <span className="d-minus">-</span>
                    <input type="text" className="no-border no-bg" defaultValue={1} />
                    <span className="d-plus">+</span>
                  </div>
                </div>
              </div>   
              {/* cart item end */}
              {/* cart item begin */}
              <div className="de__cart">
                <div className="de__cart-item justify-content-between">
                  <div className="d-wrap">
                    <input type="checkbox" id="item5" name="item5" className="d-checkbox__input" defaultChecked />
                    <label htmlFor="item5" className="d-checkbox__label align-items-center" />
                    <img src="/images/shop/products/soap-2a.webp" alt="" />
                    <div className="d-info">
                      <div>
                        <h4>3D Pink Car Soap - pH Balanced Formula</h4>                                
                        <span className="d-price">$29.95</span> 
                      </div>         
                    </div>  
                  </div>
                  <div className="de-number">
                    <span className="d-minus">-</span>
                    <input type="text" className="no-border no-bg" defaultValue={1} />
                    <span className="d-plus">+</span>
                  </div>
                </div>
              </div>   
              {/* cart item end */}
              {/* cart item begin */}
              <div className="de__cart">
                <div className="de__cart-item justify-content-between">
                  <div className="d-wrap">
                    <input type="checkbox" id="item6" name="item6" className="d-checkbox__input" defaultChecked />
                    <label htmlFor="item6" className="d-checkbox__label align-items-center" />
                    <img src="/images/shop/products/wax-2a.webp" alt="" />
                    <div className="d-info">
                      <div>
                        <h4>Formula 1 Bug &amp; Tar Remover - 16oz</h4>                                
                        <span className="d-price">$6.99</span> 
                      </div>         
                    </div>  
                  </div>
                  <div className="de-number">
                    <span className="d-minus">-</span>
                    <input type="text" className="no-border no-bg" defaultValue={1} />
                    <span className="d-plus">+</span>
                  </div>
                </div>
              </div>   
              {/* cart item end */}
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
  fileName: "shop-product-single.html",
  title: "Velocare Auto Studio - Premium Detailing and Auto Care",
  description: "Velocare Auto Studio - Premium Detailing and Auto Care",
  Component: ShopProductSinglePageComponent,
};
