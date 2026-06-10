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

import { motion } from 'framer-motion'

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

        <div className="uiux">

          <div className="uiux-title">
            <h1>UI/UX Design</h1>
            <img src={uiux_logo} alt="logo" />
          </div>

          {/* PROJECT 1 */}

          <div className="project-card">

            <div className="project-header">
              <h2>E-Learning Platform</h2>

              <div className="project-meta">
                <span>🎨 UI/UX Designer</span>
                <span>🛠 Figma</span>
                <span>💻 Web Platform</span>
              </div>
            </div>

            <div className="project-hero">
              <img src={project_1} alt="E-Learning Hero" />
            </div>

            <div className="project-tags">
              <span>Wireframe</span>
              <span>Prototype</span>
              <span>Design System</span>
              <span>Responsive UI</span>
            </div>

            <div className="project-description">
              <p>
                Developed a scalable UI system in Figma for a web-based
                learning platform. Designed key pages including Home,
                Bootcamp, and Free Class while building a reusable component
                library to maintain design consistency and improve efficiency.
              </p>
            </div>

            <div className="project-gallery">
              <img src={project_2} alt="Project Screenshot" />
              <img src={project_3} alt="Project Screenshot" />
              <img src={project_5} alt="Project Screenshot" />
            </div>

          </div>

          {/* PROJECT 2 */}

          <div className="project-card">

            <div className="project-header">
              <h2>Freelancer Platform</h2>

              <div className="project-meta">
                <span>🎨 UI/UX Designer</span>
                <span>🛠 Figma</span>
                <span>💻 Web Platform</span>
              </div>
            </div>

            <div className="project-hero">
              <img src={project_6} alt="Freelancer Hero" />
            </div>

            <div className="project-tags">
              <span>Dashboard</span>
              <span>User Management</span>
              <span>Project Tracking</span>
              <span>Admin Panel</span>
            </div>

            <div className="project-description">
              <p>
                Designed a complete freelancer marketplace platform in Figma.
                The project includes a Home page, Find Freelancers page,
                Project Management page, and Admin Dashboard to manage users
                and project activities efficiently.
              </p>
            </div>

            <div className="project-gallery">
              <img src={project_7} alt="Project Screenshot" />
              <img src={project_8} alt="Project Screenshot" />
              <img src={project_9} alt="Project Screenshot" />
            </div>

          </div>

        </div>

        <Footer />
      </>
    </motion.div>
  )
}

export default Uiux