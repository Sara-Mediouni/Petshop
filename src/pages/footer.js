import React from 'react';
import './footer.css';
import {BiCopyright} from 'react-icons/bi';
import {AiOutlineArrowRight,AiFillInstagram} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'
import {IoLogoWhatsapp} from 'react-icons/io5'
import {MdLocationPin} from 'react-icons/md'
import {ImFacebook} from 'react-icons/im'
import {GrTwitter} from 'react-icons/gr'
const Footer = () => {
    return (

		
		<section class="footer-07">
			
			
					
					

                    <div className="box-container">

<div className="box ">
    <h3>Need help ?</h3>
    <a href="#"><i><AiOutlineArrowRight/></i>Contacts</a>
</div>

<div className="box">
    <h3>Our location</h3>
    <a href="#"><i><MdLocationPin/></i>Tunisia</a>
</div>

<div className="box">
    <h3>Useful links</h3>
    <a href="#"><i><AiOutlineArrowRight/></i>Store</a>
    
</div>


</div>
					
				
			<div class="responsive">
                <div class="col-md-10 col-sm-12  text-center icons">
                    <p>Join us on social networks</p>
<a href="#"><i><SiGmail/></i></a>
<a href="#"><i><ImFacebook/></i></a>
<a href="#"><i><GrTwitter/></i></a>
<a href="#"><i><AiFillInstagram/></i></a>
<a href="#"><i><IoLogoWhatsapp/></i></a>
                </div>
				<div class="row mt-5">
					<div class="col-md-10 col-sm-12 col-xs-8 text-center copyright">
						
					<i><BiCopyright/></i>  Copyright 2022 | All rights reserved 
				
                    
					</div>
				</div></div>
		
		</section>
		


    );
}

export default Footer;