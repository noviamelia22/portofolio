import React from 'react'
import './Dataanalyst.css'

import data_logo from '../../assets/logo2.png'

import project_2 from '../../assets/Project4_2.png'
import project_3 from '../../assets/Project4_3.png'
import project_4 from '../../assets/Project4_4.png'
import project_5 from '../../assets/Project4_5.png'
import project_6 from '../../assets/Project4_6.png'
import project_7 from '../../assets/Project4_7.png'

import project_8 from '../../assets/Excell4.png'
import project_9 from '../../assets/Excell2.png'
import project_10 from '../../assets/Excell3.png'
import project_11 from '../../assets/Excell5.png'

import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

import { motion } from 'framer-motion'

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

                <div className="data">

                    <div className="data-title">
                        <h1>Data Analysis & Excel</h1>
                        <img src={data_logo} alt="logo" />
                    </div>

                    {/* PROJECT 1 */}

                    <div className="project-section">

                        <div className="project-header">

                            <h2>Sentiment Analysis on Social Media</h2>

                            <div className="project-meta">
                                <span>📊 Data Analyst</span>
                                <span>🐍 Python</span>
                                <span>🤖 Machine Learning</span>
                            </div>

                        </div>

                        <div className="project-hero">
                            <img src={project_2} alt="E-Learning Hero" />
                        </div>

                        <div className="project-tags">
                            <span>Python</span>
                            <span>SVM</span>
                            <span>Naive Bayes</span>
                            <span>Tweet Harvest</span>
                            <span>Streamlit</span>
                            <span>Data Visualization</span>
                        </div>

                        <div className="project-description-below">
                            <p>
                                Conducted sentiment analysis on social media platform X using Python.
                                Tweets were crawled with Tweet Harvest and classified using SVM and
                                Naive Bayes, where SVM achieved higher accuracy. Results showed
                                41.31% of users expressed positive sentiment. A Streamlit app was
                                built for real-time sentiment classification.
                            </p>
                            <p>
                                <strong>Live Demo:</strong>{" "}
                                <a
                                    href="https://www.researchgate.net/publication/393033882_Sentiment_Sentiment_Analysis_of_Social_Media_X_Users_on_the_Decline_of_Marriage_Rates_in_Indonesia"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View Website
                                </a>
                            </p>
                        </div>


                        <div className="project-images-row">
                            <img src={project_3} alt="Sentiment Analysis" />
                            <img src={project_4} alt="Sentiment Analysis" />
                            <img src={project_5} alt="Sentiment Analysis" />
                        </div>

                    </div>

                    {/* PROJECT 2 */}

                    <div className="project-section">

                        <div className="project-header">

                            <h2>Data Analysis & Excel Dashboard</h2>

                            <div className="project-meta">
                                <span>📊 Data Analyst</span>
                                <span>📈 Microsoft Excel</span>
                                <span>📋 Business Reporting</span>
                            </div>

                        </div>

                        <div className="project-hero">
                            <img src={project_11} alt="E-Learning Hero" />
                        </div>

                        <div className="project-tags">
                            <span>Pivot Table</span>
                            <span>Charts</span>
                            <span>SUMIFS</span>
                            <span>COUNTIFS</span>
                            <span>VLOOKUP</span>
                            <span>INDEX MATCH</span>
                        </div>

                        <div className="project-description-below">
                            <p>
                                Created reports, dashboards, and data summaries using
                                Microsoft Excel. Applied Pivot Tables, Charts,
                                Conditional Formatting, and Data Validation to transform
                                raw datasets into meaningful business insights.
                            </p>

                            <p>
                                Utilized advanced Excel functions such as SUMIFS,
                                COUNTIFS, AVERAGEIFS, VLOOKUP, INDEX MATCH, and IFERROR
                                for data processing, validation, and automated reporting.
                            </p>
                        </div>

                        <div className="project-images-row">
                            <img src={project_8} alt="Excel Dashboard" />
                            <img src={project_9} alt="Pivot Table Analysis" />
                            <img src={project_10} alt="Excel Functions" />
                        </div>


                    </div>

                </div>

                <Footer />
            </>
        </motion.div>
    )
}

export default Dataanalyst