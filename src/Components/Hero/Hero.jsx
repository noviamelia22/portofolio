import React from 'react'
import './Hero.css'
import profile_img from '../../assets/foto1.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'M Novi Amelia,</span> frontend & ui/ux design</h1>
            <p>I am an Information Systems graduate with hands-on experience in front-end development and UI/UX design.
                Skilled in using React.js, Laravel, and Figma to build and design user-friendly web applications.</p>
            <div className="hero-action">
                <AnchorLink className='anchor-link' offset={50} href="#contact"><div className="hero-connect">Connect With Me</div></AnchorLink>
                <a href="" download className="hero-resume">My resume</a>
            </div>
        </div>
    )
}

export default Hero
