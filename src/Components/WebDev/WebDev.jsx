import React from 'react'
import './WebDev.css'
import webdev_logo from '../../assets/logo2.png'
import project_1 from '../../assets/Project1_1.png'
import project_2 from '../../assets/Project1_2.png'
import project_3 from '../../assets/Project1_3.png'
import project_4 from '../../assets/Project1_4.png'
import project_5 from '../../assets/Project1_5.png'
import project_6 from '../../assets/Project1_6.png'
import project_7 from '../../assets/Project2_1.png'
import project_8 from '../../assets/Project2_2.png'
import project_9 from '../../assets/Project2_3.png'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { motion } from 'framer-motion';

const WebDev = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
        >
            <>
                <Navbar />
                <div className='web-dev'>
                    <div className="web-dev-title">
                        <h1>Web develop</h1>
                        <img src={webdev_logo} alt="" />
                    </div>
                    <div className='project-section'>
                        <div className='project-header'>
                            <h2>1. Food Delivery</h2>
                        </div>
                        <div className='project-images-row'>
                            <img src={project_1} alt="Food 1" />
                            <img src={project_2} alt="Food 2" />
                            <img src={project_3} alt="Food 3" />
                            <img src={project_4} alt="Food 4" />
                            <img src={project_5} alt="Food 5" />
                            <img src={project_6} alt="Food 6" />
                        </div>
                        <div className='project-description-below'>
                            <p>
                                This is a responsive Food Delivery web application built using React.js.
                                The site includes several key sections such as Home, Menu, Mobile App, and Contact Us.
                                Users can browse food items, add them to a cart, and proceed to a payment page.
                                The design is optimized for mobile devices, ensuring a smooth and intuitive user experience.
                            </p>
                            <p>Link Website: <a href="https://food-del-vert-mu.vercel.app/" target="_blank" rel="noreferrer">Click Here</a></p>
                        </div>
                    </div>
                    <div className='project-section'>
                        <div className='project-header'>
                            <h2>2. Sheep Selling</h2>
                        </div>
                        <div className='project-images-row'>
                            <img src={project_7} alt="Sheep 1" />
                            <img src={project_8} alt="Sheep 2" />
                            <img src={project_9} alt="Sheep 3" />
                        </div>
                        <div className='project-description-below'>
                            <p>
                                This is a Sheep Selling web application developed using Laravel. The site includes core pages such as Login, Homepage, Services, and Contact.
                                It is designed to provide users with a smooth browsing and service request experience for sheep-related offerings.
                                The application features user verification via integrated WhatsApp and Email APIs to ensure account authenticity.
                                All user and service data are stored securely using a MySQL database, supporting reliable and scalable data management.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        </motion.div>
    )
}

export default WebDev
