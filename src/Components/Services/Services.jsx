import React from 'react'
import './Services.css'
import services_logo from '../../assets/logo2.png'
import Services_Data from '../../assets/services_data'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div id='portofolio' className='services'>
      <div className="services-title">
        <h1>My portofolio</h1>
        <img src={services_logo} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
              <Link to={service.link} className="readmore-link">
                <span>Read More</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services
