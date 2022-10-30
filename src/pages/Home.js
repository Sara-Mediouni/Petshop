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
import sun from '../images/free-sun-icon-3337-thumb.png';
import food from '../images/dog-food-and-bone.svg';
import vet from '../images/821524.png';
import imgv from '../images/croping35.png';
export default class Home extends Component {
  render() {
    return (
      <div className="body">
        <Banner />
<div className="gh"style={{height:"120px"}}></div>
        <section className="start">
          <span>
            Find your little  <MdPets size={90} color={"#e59dad"} style={{ opacity: "0.4" }} /><span style={{ color: "#e59dad" }}> <MdPets size={90} color={"#e59dad"} style={{ opacity: "0.4" }} />puppy</span>
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
<section className="advice"><span> <MdPets size={90} color={"#e59dad"} style={{ opacity: "0.4" }} />Take care of your pet</span><img src={imgad} style={{
              height: "400px",
              float: "left",
              opacity: "4",
              marginLeft: "130px",
              marginTop: "50px"
            }}/><img src={imgv} style={{height:"120px",float:"right",marginTop:"300px",marginRight:"170px"}}/>
             <div class="card-group bg">
  <div class="card ">
    <img class="card-img-top" src={food} alt="Card image cap"/>
    <div class="card-body">
      
      <p class="card-text">Think twice before slipping pets some extra potato chips, fat trimmings or other foods from the dinner plate.</p>
    
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={vet} alt="Card image cap"/>
    <div class="card-body">

      <p class="card-text">A quick brush can go a long way. Brushing your dog’s hair will help remove dirt and dead hair from your dog’s coat and skin</p>
      
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={sun} alt="Card image cap"/>
    <div class="card-body">
      
      <p class="card-text">Regular walks, hiking, playing fetch and swimming can keep your pet physically active and fit. But don’t forget about mental stimulation! Providing toys to play with, hiding treats, building obstacle courses and practicing new tricks all keep your dog or cat interested and engaged.</p>
     
    </div>
  </div>
</div>
</section>
          <div className="gh"style={{height:"120px"}}></div>
        
      </div>
    );
  }
}
