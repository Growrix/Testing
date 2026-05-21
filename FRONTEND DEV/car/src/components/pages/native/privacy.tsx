import type { NativePageDefinition } from "@/lib/native-page-types";

function PrivacyPageComponent() {
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
                  <h1 className="mb-3">Privacy Policy</h1>
                  <div className="border-bottom mb-3" />
                  <ul className="crumb">
                    <li><a href="/index.html">Home</a></li>
                    <li className="active">Privacy Policy</li>
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
                  <h3>1. Information We Collect</h3>
                  <p>We collect the details you submit through booking or contact forms, such as name, email, phone number, service preferences, and message content.</p>
                  <h3>2. How We Use Information</h3>
                  <p>Submitted data is used to confirm appointments, respond to inquiries, and provide service updates related to your request.</p>
                  <h3>3. Data Storage and Protection</h3>
                  <p>We take reasonable technical and organizational steps to protect personal information from unauthorized access, misuse, or disclosure.</p>
                  <h3>4. Third-Party Services</h3>
                  <p>Our website may include third-party plugins or links. Their privacy handling is governed by their own terms and policies.</p>
                  <h3>5. Data Retention</h3>
                  <p>We retain inquiry and booking records only as long as needed for customer service, operations, and compliance requirements.</p>
                  <h3>6. Your Rights</h3>
                  <p>You may request correction or deletion of your submitted information by contacting us directly.</p>
                  <h3>7. Contact</h3>
                  <p>For privacy questions, email <a href="mailto:hello@velocareauto.com">hello@velocareauto.com</a> or call <a href="tel:+12135550198">+1 (213) 555-0198</a>.</p>
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
                      <li><a href="/terms.html">Terms and Conditions</a></li>
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
  fileName: "privacy.html",
  title: "Velocare Auto Studio - Privacy Policy",
  description: "Privacy policy for Velocare Auto Studio website visitors and customers.",
  Component: PrivacyPageComponent,
};
