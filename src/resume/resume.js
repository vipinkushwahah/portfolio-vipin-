import React, { useState } from 'react';
import './resume.css'

const Resume = () => {
    // State to track the currently visible section
    const [activeSection, setActiveSection] = useState('experience');

    // Function to handle section switching
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="resume-container-main">
            {/* Navigation Buttons */}
            <div className='resume-container'>
                <div className="section-title">Why Hire Me?</div>
                <div className="section-description">
                    I have strong technical skills and experience in building scalable products,
                    having worked in a startup product-based company named Satschel India (compliance innovation).
                    I take calculated risks, solve complex problems, and adapt quickly to challenges. With a collaborative
                    approach and a focus on delivering impactful solutions, I am committed to contributing to business success.
                </div>
                <div className="button-group">
                    <button
                        className={`tab-button ${activeSection === 'experience' ? 'active' : ''}`}
                        onClick={() => handleSectionChange('experience')}
                    >
                        Experience
                    </button>
                    <button
                        className={`tab-button ${activeSection === 'education' ? 'active' : ''}`}
                        onClick={() => handleSectionChange('education')}
                    >
                        Education
                    </button>
                    <button
                        className={`tab-button ${activeSection === 'skills' ? 'active' : ''}`}
                        onClick={() => handleSectionChange('skills')}
                    >
                        Skills
                    </button>
                    <button
                        className={`tab-button ${activeSection === 'aboutMe' ? 'active' : ''}`}
                        onClick={() => handleSectionChange('aboutMe')}
                    >
                        About Me
                    </button>
                </div>
            </div>
            <div>
                {/* Section: My Experience */}
                {activeSection === 'experience' && (
                    <section className="resume-section experience">
                        <h2 className="section-title">My Experience</h2>
                        <p className="section-description">
                            I have 8 months of experience as a frontend developer at a product-based startup, where I gained
                            hands-on experience working closely with teams to deliver features on time. During my time at the
                            company, I contributed to various key projects, such as integrating mobile number validation based
                            on country codes for login, signup, and KYC verification processes. I also played a key role in implementing
                            WebSocket functionality for real-time facial verification via QR code on mobile devices. These efforts,
                            along with my solid understanding of frontend technologies, enabled me to improve user experiences and
                            contribute effectively to the success of the company's web platform.
                        </p>
                        <div className="job-detail">
                            <div className='job-role'>
                                <div className="job-year">2024 - Present</div>
                                <div className="job-title">Frontend Web Developer</div>
                                <div className="job-company">
                                    <span className='job-detail-numbering'>
                                        <i class="ri-arrow-right-s-fill"></i>
                                    </span>
                                    Satschel India (compliance innovation).
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Section: My Education */}
                {activeSection === 'education' && (
                    <section className="resume-section education">
                        <h2 className="section-title">My Education</h2>
                        <p className="section-description">
                            I completed my high school education in Goa before pursuing a diploma in Uttar Pradesh,
                            which provided a strong technical foundation. Building on this, I completed my B.Tech,
                            further enhancing my skills and knowledge in engineering and technology.
                        </p>
                        <div className="education-list">
                            <div className="education-item">
                                <div className="education-year">2024</div>
                                <div className="education-degree">
                                    Frontend Web Developer
                                </div>
                                <div className="education-institute">
                                    <span className='job-detail-numbering'>
                                        <i class="ri-arrow-right-s-fill"></i>
                                    </span>
                                    YouTube Course.
                                </div>
                            </div>
                            <div className="education-item">
                                <div className="education-year">2023</div>
                                <div className="education-degree">B.Tech</div>
                                <div className="education-institute">
                                    <span className='job-detail-numbering'>
                                        <i class="ri-arrow-right-s-fill"></i>
                                    </span>
                                    AKTU Lucknow, Uttar Pradesh.
                                </div>
                            </div>
                            <div className="education-item">
                                <div className="education-year">2020</div>
                                <div className="education-degree">Diploma</div>
                                <div className="education-institute">
                                    <span className='job-detail-numbering'>
                                        <i class="ri-arrow-right-s-fill"></i>
                                    </span>
                                    BTEUP Lucknow.
                                </div>
                            </div>
                            <div className="education-item">
                                <div className="education-year">2017</div>
                                <div className="education-degree">High School</div>
                                <div className="education-institute">
                                    <span className='job-detail-numbering'>
                                        <i class="ri-arrow-right-s-fill"></i>
                                    </span>
                                    St. Anthony's High School, Goa.
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Section: My Skills */}
                {activeSection === 'skills' && (
                    <section className="resume-section skills">
                        <div className="section-title">My Skills</div>
                        <div className="section-description">
                            I possess a strong technical skill set in frontend development, including proficiency in HTML, CSS, and JavaScript
                            for building responsive and interactive user interfaces. I have hands-on experience with React.js for creating dynamic,
                            component-based web applications. Additionally, I am well-versed in version control using Git and have collaborated
                            effectively on projects through GitHub, ensuring seamless code management and team workflows.
                        </div>
                        <div>
                            <div className="skill-list">
                                <div className="skill-item">
                                    <i className="ri-reactjs-line" title="ReactJS"></i>
                                </div>
                                <div className="skill-item">
                                    <i className="ri-javascript-fill" title="JavaScript"></i>
                                </div>
                                <div className="skill-item">
                                    <i className="ri-html5-fill" title="HTML5"></i>
                                </div>
                                <div className="skill-item">
                                    <i className="ri-css3-fill" title="CSS3"></i>
                                </div>
                                <div className="skill-item">
                                    <i className="ri-tailwind-css-fill" title="Tailwind CSS"></i>
                                </div>
                                <div className="skill-item">
                                    <i className="ri-github-fill" title="GitHub"></i>
                                </div>

                            </div>
                        </div>
                    </section>
                )}

                {/* Section: About Me */}
                {activeSection === 'aboutMe' && (
                    <section className="resume-section about-me">
                        <div className="section-title">About Me</div>
                        <div className="section-descridivtion">
                            I am a passionate developer who enjoys solving problems and learning new technologies.
                            My goal is to create impactful solutions that drive business success while enhancing user experiences.
                        </div>
                        <div className="profile-details">
                            <div className="profile-column">
                                <div className="profile-row">
                                    <span className="profile-label">Name</span>
                                    <span className="profile-value">Vipin Kushwaha</span>
                                </div>
                                <div className="profile-row">
                                    <span className="profile-label">Experience</span>
                                    <span className="profile-value">9 months</span>
                                </div>
                                <div className="profile-row">
                                    <span className="profile-label">Nationality</span>
                                    <span className="profile-value">Indian</span>
                                </div>
                                <div className="profile-row">
                                    <span className="profile-label">Freelance</span>
                                    <span className="profile-value">Vipin Kushwaha</span>
                                </div>
                            </div>
                            <div className="profile-column">
                                <div className="profile-row">
                                    <span className="profile-label">Phone</span>
                                    <span className="profile-value">+91 7420868346</span>
                                </div>
                                <div className="profile-row">
                                    <span className="profile-label">Email</span>
                                    <span className="profile-value">vipinkushwaha902@gmail.com</span>
                                </div>
                                <div className="profile-row">
                                    <span className="profile-label">Languages</span>
                                    <span className="profile-value">English, Hindi, Konkani, Marathi</span>
                                </div>
                            </div>
                        </div>

                    </section>
                )}
            </div>
        </div>
    );
};

export default Resume;
