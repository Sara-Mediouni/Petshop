import React, { Component } from "react";
import "./Navbar.css";
import img1 from "../images/Leafly-cannabis-topicals-for-pets-Canada.jpg";
import Footer from "./footer";
import img3 from "../images/istockphoto-1369757652-170667a.jpg";
import img2 from "../images/dog-cat-paw-print-with-heart-pattern-design_1017-36752.webp";
import { MdPets } from "react-icons/md";
import imgdog from "../images/Paikka.pet_113193-2_1800x1800-modified.png";
import Banner from "./banner";
import imgad from "../images/Article_51068-1932x1200.png";
export default class Home extends Component {
  render() {
    return (
      <div className="body">
        <Banner />

        <section className="start">
          <span>
            Find your little <span style={{ color: "#e59dad" }}>puppy</span>
          </span>
          <img
            src={imgdog}
            style={{
              height: "400px",
              float: "right",
              opacity: "4",
              marginRight: "130px",
              marginTop: "50px",
              borderRadius: "50px",
            }}
          />
          <a className="start-btn">Discover</a>
        </section>
<section className="advice"><span>Take care of your pet</span><img src={imgad} style={{
              height: "400px",
              float: "left",
              opacity: "4",
              marginLeft: "130px",
              marginTop: "50px"
            }}/></section>
        <Footer></Footer>
      </div>
    );
  }
}
