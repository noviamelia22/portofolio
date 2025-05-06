import React from 'react'
import './About.css'
import about_profile from '../../assets/foto1.jpg'
import about_logo from '../../assets/logo2.png'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={about_logo} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={about_profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am Novi Amelia Kristanti, an Information Systems graduate with a strong interest in web development and UI/UX design.
                            I have hands-on experience creating web applications using Laravel and designing user interfaces with Figma.</p>
                        <p> I completed internships as a Software Engineer at PT Jababeka Infrastruktur and as a UI/UX Designer at Flow Byte Digital.
                            I also joined the Indonesian Student Exchange Program and actively contributed to campus organizations.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>React Js</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Figma</p><hr style={{ width: "80%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievments">
                <div className="about-achievment">
                    <h1>3+</h1>
                    <p>WEB PROJECTS</p>
                </div>
                <div className="about-achievment">
                    <h1>2+</h1>
                    <p>FIGMA UI/UX DESIGNS</p>
                </div>
                <div className="about-achievment">
                    <h1>15+</h1>
                    <p>BUGS FIXED</p>
                </div>
            </div>

        </div>
    )
}

export default About
