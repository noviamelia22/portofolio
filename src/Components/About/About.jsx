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
                        <p>I am Novi Amelia Kristanti, an Information Systems graduate with experience as an IT Functional in a feedmill and poultry company. 
                            I have experience in operational administration, ERP support, system documentation, inventory management, and operational IT support.</p>
                        <p> Experienced in using ERP Dynamics 365 Business Central, Microsoft Office, and coordinating with various divisions to support daily company operations. 
                            I am detail-oriented, disciplined, adaptable, and able to work both independently and in teams.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Excel</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Administration</p><hr style={{ width: "90%" }} /></div>
                        <div className="about-skill"><p>Inventory</p><hr style={{ width: "85%" }} /></div>
                        <div className="about-skill"><p>Coordination</p><hr style={{ width: "95%" }} /></div>
                        <div className="about-skill"><p>ERP System</p><hr style={{ width: "80%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievments">
                <div className="about-achievment">
                    <h1>1</h1>
                    <p>Year Experience</p>
                </div>
                <div className="about-achievment">
                    <h1>ERP</h1>
                    <p>DYNAMICS 365 BC</p>
                </div>
                <div className="about-achievment">
                    <h1>85+</h1>
                    <p>OPERATIONAL DOCUMENTS</p>
                </div>
            </div>

        </div>
    )
}

export default About
