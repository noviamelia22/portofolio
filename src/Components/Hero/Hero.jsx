import React from 'react'
import './Hero.css'
import profile_img from '../../assets/foto1.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'M Novi,</span> IT Functional & Administration Support</h1>
            <p>Information Systems graduate with experience in operational administration, ERP support, system documentation, inventory management, and operational IT support. 
                Experienced in using ERP Dynamics 365 Business Central, Microsoft Office, and coordinating with various divisions to support company operations.
            </p>
            <div className="hero-action">
                <AnchorLink className='anchor-link' offset={50} href="#contact"><div className="hero-connect">Connect With Me</div></AnchorLink>
                <a href="/Novi Amelia Kristanti_CV.pdf" download className="hero-resume">My resume</a>
            </div>
        </div>
    )
}

export default Hero
