import React from 'react'
import './Dataanalyst.css'
import data_logo from '../../assets/logo2.png'
import project_2 from '../../assets/Project4_2.png'
import project_3 from '../../assets/Project4_3.png'
import project_4 from '../../assets/Project4_4.png'
import project_5 from '../../assets/Project4_5.png'
import project_6 from '../../assets/Project4_6.png'
import project_7 from '../../assets/Project4_7.png'
import project_8 from '../../assets/Project4_8.png'
import project_9 from '../../assets/Project4_9.png'
import project_10 from '../../assets/Project4_10.png'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { motion } from 'framer-motion';

const Dataanalyst = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
        >
            <>
                <Navbar />
                <div className='data'>
                    <div className="data-title">
                        <h1>Data Analyst</h1>
                        <img src={data_logo} alt="" />
                    </div>
                    <div className='project-section'>
                        <div className='project-header'>
                            <h2>1. Sentiment Analysis</h2>
                        </div>
                        <div className='project-images-row'>
                            <img src={project_2} alt="" />
                            <img src={project_3} alt="" />
                            <img src={project_4} alt="" />
                            <img src={project_5} alt="" />
                            <img src={project_6} alt="" />
                            <img src={project_7} alt="" />
                        </div>
                        <div className='project-description-below'>
                            <p>
                                Conducted sentiment analysis on social media platform X using Python. Tweets were crawled with Tweet Harvest and classified using SVM and Naive Bayes, where SVM achieved higher accuracy. Results showed 41.31% of users expressed positive sentiment. A Streamlit app was built for real-time sentiment classification.
                            </p>
                        </div>
                    </div>
                    <div className='project-section'>
                        <div className='project-header'>
                            <h2>2. Analysis of Matoa</h2>
                        </div>
                        <div className='project-images-row'>
                            <img src={project_8} alt="" />
                            <img src={project_9} alt="" />
                            <img src={project_10} alt="" />
                        </div>
                        <div className='project-description-below'>
                            <p>
                                The classification of matoa fruit ripeness was carried out using image processing techniques and Python-based programming. The process involved converting original RGB images of matoa fruit into HSV (Hue, Saturation, Value) color space to extract distinctive color features that reflect the fruit’s ripeness level. The system categorized the fruits into three ripeness stages: Mentah (unripe), Matang (ripe), and Busuk (rotten).
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        </motion.div>
    )
}

export default Dataanalyst
