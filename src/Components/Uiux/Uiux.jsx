import React from 'react'
import './Uiux.css'
import uiux_logo from '../../assets/logo2.png'
import project_1 from '../../assets/Project3_1.png'
import project_2 from '../../assets/Project3_3.png'
import project_3 from '../../assets/Project3_4.png'
import project_5 from '../../assets/Project3_6.png'
import project_6 from '../../assets/Project3_7.png'
import project_7 from '../../assets/Project3_8.png'
import project_8 from '../../assets/Project3_9.png'
import project_9 from '../../assets/Project3_10.png'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { motion } from 'framer-motion';

const Uiux = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
        >
            <>
                <Navbar />
                <div className='uiux'>
                    <div className="uiux-title">
                        <h1>Ui/Ux Design</h1>
                        <img src={uiux_logo} alt="" />
                    </div>
                    <div className='project-section'>
                        <div className='project-header'>
                            <h2>1. E-Learning</h2>
                        </div>
                        <div className='project-images-row'>
                            <img src={project_1} alt="" />
                            <img src={project_2} alt="" />
                            <img src={project_3} alt="" />
                            <img src={project_5} alt="" />
                        </div>
                        <div className='project-description-below'>
                            <p>
                                Developed a scalable UI system in Figma for a web-based learning platform. Designed key pages (Home, Bootcamp, Free Class) and built a component library to maintain consistency and improve design efficiency.
                            </p>
                        </div>
                    </div>
                    <div className='project-section'>
                        <div className='project-header'>
                            <h2>2. Freelancers</h2>
                        </div>
                        <div className='project-images-row'>
                            <img src={project_6} alt="" />
                            <img src={project_7} alt="" />
                            <img src={project_8} alt="" />
                            <img src={project_9} alt="" />
                        </div>
                        <div className='project-description-below'>
                            <p>
                                Designed in Figma, this project includes a complete UI for a freelancer platform. Features include a Home page, a Find Freelancers page to browse talent, a Project page to track statuses (Pending, Accepted, Declined, Completed), and an Admin Dashboard for managing users and project activities.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        </motion.div>
    )
}

export default Uiux
