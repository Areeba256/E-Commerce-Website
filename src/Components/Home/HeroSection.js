import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section-container">
        <div className="hero-section-main">
          <div className="filter">
            <div className="filterlinks">
              <a href="#">Woman's Fashion</a>
              <a href="#">Man's Fashion </a>
              <a href="#">Electronics</a>
              <a href="#">Home and lifestyle</a>
              <a href="#">Medicine</a>
              <a href="#">Sports and outdoor</a>
              <a href="#">Groceries and pets</a>
              <a href="#">Health and beauty</a>
            </div>
          </div>
          <div className="slider">
            <div className="slider-main">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      src="https://images.unsplash.com/photo-1546502208-81d149d52bd7?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      style={{ height: "285px" }}
                      alt="First slide"
                    />
                  </div>
                  {/* <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="https://www.google.com/search?q=e-commerce+slider+images&sca_esv=033c270f53017be6&source=hp&biw=1366&bih=641&ei=CXnNZt65M5D2kdUP-LfG2A4&iflsig=AL9hbdgAAAAAZs2HGbX4e7Xcy42wixzV4DDeLKdBFmYo&ved=0ahUKEwie4pmhzJSIAxUQe6QEHfibEesQ4dUDCBA&uact=5&oq=e-commerce+slider+images&gs_lp=EgNpbWciGGUtY29tbWVyY2Ugc2xpZGVyIGltYWdlczIEEAAYHjIHEAAYgAQYGEjsJlAAWIsicAB4AJABAJgB3QKgAdsuqgEIMC42LjEzLjW4AQPIAQD4AQGKAgtnd3Mtd2l6LWltZ5gCGKACxS_CAggQABiABBixA8ICBRAAGIAEwgIGEAAYBRgewgIGEAAYCBgemAMAkgcIMC41LjEyLjegB9Jm&sclient=img&udm=2#vhid=9muQI_0Qvrok4M&vssid=mosaic"
                      style={{ height: "300px" }}
                      alt="Second slide"
                    />
                  </div> */}
                  {/* <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="..."
                      alt="Third slide"
                      style={{ height: "300px" }}
                    />
                  </div> */}
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
