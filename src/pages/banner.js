import React from "react";
import { MdPets } from "react-icons/md";
import "./Navbar.css";
import img1 from "../images/Leafly-cannabis-topicals-for-pets-Canada.jpg";
import img3 from "../images/istockphoto-1369757652-170667a.jpg";
import img2 from "../images/dog-cat-paw-print-with-heart-pattern-design_1017-36752.webp";

export default function Banner() {
  return (
    <section className="banner">
      <span className="text">
        <MdPets size={90} color={"#e59dad"} style={{ opacity: "0.4" }} />
        We care <span style={{ color: "#000" }}>about your pet</span>!
      </span>
      <img
        src={img1}
        style={{
          height: "400px",
          float: "right",
          marginRight: "20px",
          borderRadius: "50px",
          marginTop: "50px",
        }}
      />
      <img
        src={img3}
        style={{
          height: "300px",
          borderRadius: "50px",
          marginTop: "350px",
          marginLeft: "80px",
        }}
      />
    </section>
  );
}
