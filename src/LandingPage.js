import React from "react";
import "./App.css";
import truckSmall from "./assets/truckSmall.png";
import pizzaMain from "./assets/pizzaMain.png";
import Vector from "./assets/Vector.png";
import gril from "./assets/gril.png";
import truckBig from "./assets/truckBig.png";
import insta from "./assets/insta.png";
import twitter from "./assets/twitter.png";
import fb from "./assets/fb.png";
import Carousel from "./Carousel";

const LandingPage = () => {
  return (
    <>
      <section className="firstContainer">
        <div className="firstHalf">
          <div className="truckDiv">
            <img className="smalltruck" src={truckSmall} alt="Truck" />
          </div>
          <div className="firstInnerdiv">
            <h1 className="captionh1">
              <span style={{ color: "rgba(14, 35, 104, 1)" }}>
                Discover the{" "}
              </span>{" "}
              <br />
              <span style={{ color: "red" }}>
                Best{" "}
                <span style={{ color: "rgba(14, 35, 104, 1)" }}>Food </span>
              </span>
              <br />
              <span style={{ color: "rgba(14, 35, 104, 1)" }}>and Drinks </span>
            </h1>
            <p className="Para">
              Naturally made Healthcare Products for the <br /> better care &
              support of your body.
            </p>
            <button className="Btn">Explore Now!</button>
          </div>
        </div>

        <div className="secondHalf">
          <div className="imgVec">
            <img className="pizza" src={pizzaMain} alt="pizza" />
            <img className="vector" src={Vector} alt="Vector" />
            <button className="onVectorButton">Get in Touch</button>
          </div>
        </div>
      </section>

      <section className="secondContainer">
        <div className="thirdHalf">
          <img src={gril} alt="Grilled" />
        </div>
        <div className="fourthHalf">
          <h1
            style={{ color: "rgba(14, 35, 104, 1)" }}
            className="captionh1Second"
          >
            About us
          </h1>
          <p className="Para">
            Lorem Ipsum is simply dummy text of the printing and
            <br />
            typesetting industry. Lorem Ipsum has been the industry's
            <br />
            standard dummy text ever since the 1500s, when an unknown
            <br />
            printer took a galley of type and scrambled it to make a type
            <br />
            specimen book. t has survived not only five centuries.
          </p>
          <button className="Btn">Read More</button>
        </div>
      </section>

      <section>
        <Carousel />
      </section>

      <footer className="footer">
        <img
          style={{ height: "100px", alignItems: "center" }}
          src={truckBig}
          alt="Truck"
        />
        <div className="first">
          <p className="title">Contact Us</p>
          <p className="info">
            Lorem Ipsum Pvt Ltd.5/1, Magalton <br /> Road, Phartosh Gate near
            YTM <br /> Market, XYZ-343434 <br />
            <br /> example2020@gmail.com <br />
            <br /> (904) 443-0343
          </p>
        </div>
        <div className="second">
          <p className="title">More</p>
          <ul className="info">
            <li>About Us</li>
            <br />
            <li>Products</li>
            <br />
            <li>Career</li>
            <br />
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="third">
          <p className="title">Social Links</p>
          <div className="socialLinks">
            <img className="footerIcons" src={insta} alt="instagram" />
            <img className="footerIconsTwit" src={twitter} alt="twitter" />
            <img className="footerIcons" src={fb} alt="facebook" />
          </div>
          <br />
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "0.8rem",
              color: "rgba(130, 139, 156, 1)",
            }}
          >
            © 2022 Food Truck Example
          </p>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
