import type { NativePageDefinition } from "@/lib/native-page-types";

function TermsPageComponent() {
  return (
    <div id="legacy-page-root" className="dark-scheme">
      <div id="wrapper">
        <a href="#" id="back-to-top" />
        <div id="de-loader" />
        <header className="transparent">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="de-flex sm-pt10">
                  <div className="de-flex-col">
                    <div id="logo">
                      <a href="/index.html">
                        <img className="logo-main" src="/images/logo-velocare.svg" alt="Velocare Auto Studio" />
                        <img className="logo-mobile" src="/images/logo-velocare-mobile.svg" alt="Velocare Auto Studio" />
                      </a>
                    </div>
                  </div>
                  <div className="de-flex-col header-col-mid">
                    <ul id="mainmenu">
                      <li><a className="menu-item" href="/index.html">Home</a></li>
                      <li><a className="menu-item" href="/services.html">Services</a></li>
                      <li><a className="menu-item" href="/shop.html">Shop</a></li>
                      <li><a className="menu-item" href="/contact.html">Contact</a></li>
                    </ul>
                  </div>
                  <div className="de-flex-col">
                    <div className="menu_side_area">
                      <a href="/appointment.html" className="btn-main fx-slide hover-white"><span>Make Appointment</span></a>
                      <span id="menu-btn" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="no-bottom no-top" id="content">
          <div id="top" />
          <section className="bg-dark text-light relative">
            <div className="container relative z-2">
              <div className="row gy-4 gx-5 justify-content-center">
                <div className="col-lg-12 text-center">
                  <div className="spacer-double sm-hide" />
                  <h1 className="mb-3">Terms and Conditions</h1>
                  <div className="border-bottom mb-3" />
                  <ul className="crumb">
                    <li><a href="/index.html">Home</a></li>
                    <li className="active">Terms and Conditions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="sw-overlay" />
          </section>
          <section>
            <div className="container">
              <div className="row g-4">
                <div className="col-lg-12">
                  <h3>1. Service Scope</h3>
                  <p>Velocare Auto Studio provides vehicle detailing and related auto-care services based on the selected package and approved add-ons.</p>
                  <h3>2. Booking and Scheduling</h3>
                  <p>Appointments are confirmed after scheduling details are submitted. Arrival delays may affect service start time or require rescheduling.</p>
                  <h3>3. Pricing and Payment</h3>
                  <p>Service pricing is shown before confirmation. Additional charges only apply when approved for extra work outside the original package.</p>
                  <h3>4. Vehicle Condition Disclosure</h3>
                  <p>Customers must disclose known paint defects, prior repairs, or sensitive aftermarket finishes before service begins.</p>
                  <h3>5. Limitations and Liability</h3>
                  <p>We use industry-safe processes and products. However, pre-existing defects, aged materials, and undocumented prior repairs may influence outcomes.</p>
                  <h3>6. Cancellation Policy</h3>
                  <p>Please cancel or reschedule at least 24 hours in advance. Repeated no-shows may limit future booking priority.</p>
                  <h3>7. Contact</h3>
                  <p>For questions about these terms, contact <a href="mailto:hello@velocareauto.com">hello@velocareauto.com</a> or call <a href="tel:+12135550198">+1 (213) 555-0198</a>.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer>
          <div className="subfooter">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="de-flex">
                    <div className="de-flex-col">© 2026 - Velocare Auto Studio. All rights reserved. Built &amp; maintanace by <a href="https://www.growrixos.com" target="_blank" rel="noopener noreferrer" className="id-color" style={{marginLeft: 4, textDecoration: 'underline !important', fontWeight: 700}}>Growrix OS</a>.</div>
                    <ul className="menu-simple">
                      <li><a href="/privacy.html">Privacy Policy</a></li>
                      <li><a href="/contact.html">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>

  );
}

export const page: NativePageDefinition = {
  fileName: "terms.html",
  title: "Velocare Auto Studio - Terms and Conditions",
  description: "Terms and conditions for Velocare Auto Studio services and website usage.",
  Component: TermsPageComponent,
};
