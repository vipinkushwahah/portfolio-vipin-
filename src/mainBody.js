import React from "react";
import 'remixicon/fonts/remixicon.css';
import "./mainBody.css";
import Resume from './assat/vipin.pdf'

const RotatingCircle = () => {
    return (
        <div>
            <div className="container__wreaper">
                <div className="container__wreaper-main-heading">
                    <div className="intro-title">
                        Software <span className="highlight-text">Developer</span>
                    </div>
                    <div className="intro-greeting">Hello, I'm</div>
                    <div className="intro-name">Vipin Hiralal Kushwaha</div>
                    <div className="intro-description">
                        I’m a frontend developer with a passion for creating dynamic, user-friendly, and visually engaging websites.
                        Skilled in modern technologies like React, and CSS animations, I specialize in building responsive and
                        accessible interfaces that bring designs to life.
                    </div>
                    <div className="action-section">
                        <div className="download-cv-button">
                        <a href={Resume} download="Vipin_CV.pdf">
                            <button>
                                DOWNLOAD CV <i className="ri-download-2-line"></i>
                            </button>
                        </a>    
                        </div>
                        <div className="social-links">
                        <a href="https://www.instagram.com/vipinkushwaha39/" target="blank">
                             <div className="social-link"><i className="ri-instagram-line"></i></div>
                        </a>     
                        <a href="https://in.linkedin.com/in/vipinkushwahah" target="blank">
                            <div className="social-link"><i className="ri-linkedin-fill"></i></div>
                        </a>    
                        <a href="https://github.com/vipinkushwahah/" target="blank">
                            <div className="social-link"><i className="ri-github-fill"></i></div>
                        </a>
                            <div className="social-link">
                                <i className="ri-whatsapp-fill"></i>
                                <span className="tooltip">7420-8683-46</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="circle-container">
                    {/* Rotating Circle */}
                    <svg className="rotating-circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="lightorange"
                            strokeWidth="3"
                            strokeDasharray="25, 15, 10, 20" /* Custom dash pattern */
                            strokeLinecap="round"
                        />
                    </svg>

                    {/* Static Image */}
                    <div className="circle-image">
                        <img
                            src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png"
                            alt="Circle Center"
                        />
                    </div>
                </div>
            </div>
            <div class="stats">
                <div class="stats__item">
                    <div class="stats__value">
                        <span>1</span>
                    </div>
                    <div class="stats__description">
                        <span>Years of</span>
                        <span>Experience</span>
                    </div>
                </div>
                <div class="stats__item">
                    <div class="stats__value">
                        <span>26</span>
                    </div>
                    <div class="stats__description">
                        <span>Projects</span>
                        <span>Completed</span>
                    </div>
                </div>
                <div class="stats__item">
                    <div class="stats__value">
                        <span>4</span>
                    </div>
                    <div class="stats__description">
                        <span>Technologies</span>
                        <span>Mastered</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default RotatingCircle;
