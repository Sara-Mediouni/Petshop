import React, { Component } from 'react'
import './pets.css';
import {GrFormTrash} from 'react-icons/gr';
import Navbar from './Navbar';
import img1 from '../images/poodle-beige-background-portrait-funny-pet-studio_219326-87.webp';
import img2 from '../images/male-chocolate-small-puppy-poodle-dog-photoshoot-studio-pet-photography-with-concept-breaking-blue-paper-head-through-it-with-expression_374656-464.webp';

export default class Pets extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pets:[],
          c:[]
          
        }}
        componentDidMount(){
            this.getpets();
        }
        deletepet(id){
var requestOptions = {
  method: 'DELETE',
  redirect: 'follow'
};

fetch("https://petstore.swagger.io/v2/pet/"+id, requestOptions)
  .then(response => response.text())
  .then(result => {
    if (result.success === true) {

        this.getpets();
      console.log("pet deleted successfully!")
        }})
  .catch(error => console.log('error', error)); }
    getpets(){
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://petstore.swagger.io/v2/pet/findByStatus?status=available&status=available", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);

        this.setState({pets:result})
        console.log(this.state.pets)
    })

    .catch(error => console.log('error', error));
}
  render() {
    return (
        <div className='container' style={{marginTop:"200px"}}>
      <img src={img1} style={{height:"350px",borderRadius:"50px"}}/>
      <p>ggggggggggggg</p>
  
    
     </div> 
    )
  }
}
