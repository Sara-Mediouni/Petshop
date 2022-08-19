import React, { Component } from 'react'
import Navbar from './Navbar'
import img1 from '../images/img1.png'
import Footer from './footer'

export default class Home extends Component {
  render() {
    return (
     <div>
         <Navbar></Navbar>
         <img src={img1}/>
        <section></section>
        <Footer></Footer>
     </div>
    )
  }
}
