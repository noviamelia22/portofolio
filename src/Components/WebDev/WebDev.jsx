import React from 'react'
import './WebDev.css'

import webdev_logo from '../../assets/logo2.png'

import project_1 from '../../assets/Project1_1.png'
import project_2 from '../../assets/Project1_2.png'
import project_3 from '../../assets/Project1_3.png'
import project_4 from '../../assets/Project1_4.png'

import project_7 from '../../assets/Project2_1.png'
import project_8 from '../../assets/Project2_2.png'
import project_9 from '../../assets/Project2_3.png'
import project_10 from '../../assets/Project2_4.png'

import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

import { motion } from 'framer-motion'

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


    <div className="web-dev">

      <div className="web-dev-title">
        <h1>Web Development</h1>
        <img src={webdev_logo} alt="logo" />
      </div>

      {/* FOOD DELIVERY */}

      <div className="project-card">

        <div className="project-header">

          <h2>Food Delivery Website</h2>

          <div className="project-meta">
            <span>💻 Front-End Developer</span>
            <span>⚛ React.js</span>
            <span>🌐 Responsive Web</span>
          </div>

        </div>

        <div className="project-hero">
          <img src={project_1} alt="Food Delivery" />
        </div>

        <div className="project-tags">
          <span>React.js</span>
          <span>Responsive Design</span>
          <span>Shopping Cart</span>
          <span>UI Components</span>
        </div>

        <div className="project-description">
          <p>
            Developed a responsive Food Delivery web application using
            React.js. The application includes Home, Menu, Mobile App,
            Cart, and Contact sections, allowing users to browse food
            items, manage orders, and proceed through a seamless ordering
            experience across desktop and mobile devices.
          </p>

          <p>
            <strong>Live Demo:</strong>{" "}
            <a
              href="https://food-del-vert-mu.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              View Website
            </a>
          </p>
        </div>

        <div className="project-gallery">
          <img src={project_2} alt="" />
          <img src={project_3} alt="" />
          <img src={project_4} alt="" />
        </div>

      </div>

      {/* SHEEP SELLING */}

      <div className="project-card">

        <div className="project-header">

          <h2>Sheep Selling Platform</h2>

          <div className="project-meta">
            <span>💻 Full Stack Developer</span>
            <span>🚀 Laravel</span>
            <span>🗄 MySQL</span>
          </div>

        </div>

        <div className="project-hero">
          <img src={project_7} alt="Sheep Selling" />
        </div>

        <div className="project-tags">
          <span>Laravel</span>
          <span>MySQL</span>
          <span>WhatsApp API</span>
          <span>Email Verification</span>
        </div>

        <div className="project-description">
          <p>
            Built a sheep selling platform using Laravel and MySQL.
            The application includes Login, Homepage, Services,
            and Contact pages. User authentication is supported
            through WhatsApp API and Email Verification to ensure
            account security and data reliability.
          </p>
        </div>

        <div className="project-gallery">
          <img src={project_8} alt="" />
          <img src={project_9} alt="" />
          <img src={project_10} alt="" />
        </div>

      </div>

    </div>

    <Footer />
  </>
</motion.div>

)
}

export default WebDev