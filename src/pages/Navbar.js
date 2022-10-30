import React from 'react'
import {MdPets} from 'react-icons/md';
import {Navbar,Container,Nav} from "react-bootstrap"
import './Navbar.css';
import { useState ,useEffect} from 'react'
import{BsPerson,BsSearch}from 'react-icons/bs';
import{BiSearchAlt2} from 'react-icons/bi'
export default function NavbarComp(){
  const [activeLink,setActiveLink]=useState('home');
    const [scrolled,setScrolled]=useState(false);
    useEffect(()=>{
        const onSroll=()=>{
            if (window.scrollY>50){
                setScrolled(true);
                console.log(scrolled)
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener('scroll',onSroll);
        return ()=>
            window.removeEventListener('scroll',onSroll);
    },[])
    const onUpdateActiveLink=(value)=>{
        setActiveLink(value)}
    return (
      <Navbar className={scrolled?"scrolled":""}>
        <Container>
          <Navbar.Brand href="#home" className={scrolled?"navbar-brand2":""}>
          <a href="/" class="navbar-brand" style={{marginRight:'180px'}} ><h1>Puppify<MdPets /></h1></a>
          </Navbar.Brand>
         <Navbar.Toggle aria-contols="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
         </Navbar.Toggle>
         <Navbar.Collapse>
            <Nav className="me-auto">
            <Nav.Link href="/" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="/pets"className={activeLink==='store'?'active navbar-link':'navbar-link'}onClick={()=>onUpdateActiveLink('store')}>Store</Nav.Link>
            <Nav.Link href="#help"className={activeLink==='help'?'active navbar-link':'navbar-link'}onClick={()=>onUpdateActiveLink('help')}>Help</Nav.Link>
            <Nav.Link href="#contacts"className={activeLink==='contacts'?'active navbar-link':'navbar-link'}onClick={()=>onUpdateActiveLink('contacts')}>Contacts</Nav.Link>
          </Nav>
          <span className='icons'><BsPerson/></span>
          
         </Navbar.Collapse>
          
        </Container>
      </Navbar>
        
    )
  
}
