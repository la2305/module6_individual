import "../css/footer.css"
const Footer = () => {
  return (
    <>
      <>
        <>
          {/* Remove the container if you want to extend the Footer to full width. */}
          <div className="mt-5"> </div>
          <div>
            {/* Footer */}
            <footer
              className="text-center text-lg-start text-dark"
              style={{ backgroundColor: "#ECEFF1" }}
            >
              {/* Section: Social media */}
              <section
                className="d-flex justify-content-between p-4 text-white"
                style={{ backgroundColor: "#82ae46" }}
              >
                {/* Left */}
                <div className="me-5">
                  <span>Get connected with us on social networks:</span>
                </div>
                {/* Left */}
                {/* Right */}
                <div>
                  <a href="" className="text-white me-4">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="" className="text-white me-4">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="" className="text-white me-4">
                    <i className="fab fa-google" />
                  </a>
                  <a href="" className="text-white me-4">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="" className="text-white me-4">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a href="" className="text-white me-4">
                    <i className="fab fa-github" />
                  </a>
                </div>
                {/* Right */}
              </section>
              {/* Section: Social media */}
              {/* Section: Links  */}
              <section className="">
                <div className="container text-center text-md-start mt-5">
                  {/* Grid row */}
                  <div className="row mt-3">
                    {/* Grid column */}
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                      {/* Content */}
                      <h6 className="text-uppercase fw-bold">Eating Well</h6>
                      <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{
                          width: 60,
                          backgroundColor: "#7c4dff",
                          height: 2,
                        }}
                      />
                      <p>
                      Our company, with 15 years of experience in the field of providing clean food, will always bring you the best experience. Guess where in this world you can find something better than us?
                      </p>
                    </div>
                    {/* Grid column */}
                    {/* Grid column */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                      {/* Links */}
                      <h6 className="text-uppercase fw-bold">Suppliers</h6>
                      <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{
                          width: 60,
                          backgroundColor: "#7c4dff",
                          height: 2,
                        }}
                      />
                      <p>
                        <a  className="a text-dark">
                          MDFruits
                        </a>
                      </p>
                      <p>
                        <a className="a text-dark">
                          Nature Journal
                        </a>
                      </p>
                      <p>
                        <a  className="a text-dark">
                          Fruit Logistica
                        </a>
                      </p>
                      <p>
                        <a className="a text-dark">
                        MTFruits 
                        </a>
                      </p>
                    </div>
                    {/* Grid column */}
                    {/* Grid column */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                      {/* Links */}
                      <h6 className="text-uppercase fw-bold">Useful links</h6>
                      <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{
                          width: 60,
                          backgroundColor: "#7c4dff",
                          height: 2,
                        }}
                      />
                      <p>
                        <a  className="a text-dark">
                          Your Account
                        </a>
                      </p>
                      <p>
                        <a className="a text-dark">
                          Become an Affiliate
                        </a>
                      </p>
                      <p>
                        <a  className="a text-dark">
                          Shipping Rates
                        </a>
                      </p>
                      <p>
                        <a className="a text-dark">
                          Help
                        </a>
                      </p>
                    </div>
                    {/* Grid column */}
                    {/* Grid column */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                      {/* Links */}
                      <h6 className="text-uppercase fw-bold">Contact</h6>
                      <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{
                          width: 60,
                          backgroundColor: "#7c4dff",
                          height: 2,
                        }}
                      />
                      <p>
                        <i className="fas fa-home mr-3" /> 536/17A Điện Biên Phủ, Thanh Khê, Đà Nẵng
                      </p>
                      <p>
                        <i className="fas fa-envelope mr-3" /> lequangphuoc2305@gmail.com
                      </p>
                      <p>
                        <i className="fas fa-phone mr-3" /> + 84338210411
                      </p>
                      <p>
                        <i className="fas fa-print mr-3" /> + 01 234 567 89
                      </p>
                    </div>
                    {/* Grid column */}
                  </div>
                  {/* Grid row */}
                </div>
              </section>
              {/* Section: Links  */}
              {/* Copyright */}
              <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
              >
                Copyright belongs to:  
                <a className="a text-dark" href="https://mdbootstrap.com/">
                 LaIT
                </a>
              </div>
              {/* Copyright */}
            </footer>
            {/* Footer */}
          </div>
          {/* End of .container */}
        </>
      </>
    </>
  );
};
export default Footer;
