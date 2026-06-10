import React from "react";
import "./Experience.css";
import mywork_logo from '../../assets/logo2.png'

const Experience = () => {
  return (
    <div id="experience" className="experience">


      <div className="experience-title">
        <h1>Work Experience</h1>
        <img src={mywork_logo} alt="" />
      </div>

      <div className="experience-container">

        {/* Experience 1 */}
        <div className="experience-card">

          <div className="experience-year">
            <h2>2025 - 2026</h2>
          </div>

          <div className="experience-content">

            <h2>IT Functional</h2>

            <h3>PT Dinamika Megatama Citra</h3>

            <p className="company-type">
              Feedmill & Poultry Company
            </p>

            <ul>
              <li>
                Operational administration and documentation management.
              </li>

              <li>
                ERP Dynamics 365 Business Central support and data management.
              </li>

              <li>
                Inventory monitoring and stock opname documentation.
              </li>

              <li>
                User and vendor coordination for operational support.
              </li>

              <li>
                Monitoring project progress and operational reporting.
              </li>
            </ul>

            <div className="experience-skills">

              <span>ERP</span>

              <span>Administration</span>

              <span>Inventory</span>

              <span>Documentation</span>

              <span>Operational Support</span>

            </div>
            <div className="experience-buttons">

              <a
                href="/surat_pengalaman_kerja.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
              >
                View Experience Letter
              </a>

              <a
                href="/surat_pengalaman_kerja.pdf"
                download
                className="download-btn"
              >
                Download PDF
              </a>

            </div>

          </div>
        </div>

        {/* Experience 2 */}
        <div className="experience-card">

          <div className="experience-year">
            <h2>2024</h2>
          </div>

          <div className="experience-content">

            <h2>Software Engineer Intern</h2>

            <h3>PT Jababeka Infrastruktur</h3>

            <ul>

              <li>
                Developed e-commerce applications using Laravel.
              </li>

              <li>
                Created ERD and flowchart for system documentation.
              </li>

              <li>
                Performed system testing and bug identification.
              </li>

              <li>
                Integrated WhatsApp API and email verification.
              </li>

            </ul>

            <div className="experience-skills">

              <span>Laravel</span>

              <span>API</span>

              <span>Testing</span>

              <span>Documentation</span>

            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Experience;