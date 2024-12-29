import React, { useState } from "react";
import './project.css'
import portfolioImage from './assats/portfolio.png'
import ecommerceImage from './assats/ecomerce.png'
import homeImage from './assats/home.png'
import form from './assats/form.PNG'
import Untitled from './assats/Untitled.png'
import todo from './assats/todo.PNG'
import kkkkk from './assats/kkkkk.PNG'
import ffff from './assats/ffff.PNG'
import countdown from './assats/countdown.PNG'
import Capture5 from './assats/Capture5.PNG'

const Project = () => {
    const projects = [
        {
            id: "01",
            name: "Portfolio Website",
            description: "A personal portfolio website showcasing projects and skills.",
            technologies: ["React", "CSS", "JavaScript", "HTMl"],
            liveLink: "https://vipin-port-folio-website.netlify.app/",
            repoLink: "https://github.com/vipinkushwahah/my-portfolio-website",
            image: portfolioImage, // Replace with actual image URL
        },
        {
            id: "02",
            name: "E-commerce App",
            description: "An e-commerce platform with product browsing and cart functionality.",
            technologies: ["React", "HTML", "CSS", "Tailwind CSS", "JavaScript"],
            liveLink: " https://vipin-e-commerce-web-site.netlify.app/",
            repoLink: "https://github.com/vipinkushwahah/E-commerce-Website",
            image: ecommerceImage, // Replace with actual image URL
        },
        {
            id: "03",
            name: "Home Service App",
            description: "An Home Service platform with home service browsing and  functionality.",
            technologies: ["React", "HTML", "CSS", "Tailwind CSS", "JavaScript"],
            liveLink: "https://home-service-website.netlify.app/",
            repoLink: "https://github.com/vipinkushwahah/home-service",
            image: homeImage, // Replace with actual image URL
        },
        {
            id: "04",
            name: "An-web-page",
            description: "An-web-page made by me for prectice and increase my skill with css and html.",
            technologies: [ "HTML", "CSS" ],
            // liveLink: "https://home-service-website.netlify.app/",
            repoLink: "https://github.com/vipinkushwahah/an-web-page",
            image: ffff, // Replace with actual image URL
        },
        {
            id: "05",
            name: "Timer",
            description: "An timer made by me which can be used to set timer stop and start again.",
            technologies: [ "HTML", "CSS", "JavaScript"],
            // liveLink: "https://home-service-website.netlify.app/",
            repoLink: "https://github.com/vipinkushwahah/timer-",
            image: countdown, // Replace with actual image URL
        },
        {
            id: "06",
            name: "To-do-list",
            description: "An to-do-list made by me to add iterm to the list so that u dont forget.",
            technologies: [ "HTML", "CSS", "JavaScript"],
            // liveLink: "https://home-service-website.netlify.app/",
            repoLink: "https://github.com/vipinkushwahah/to-do-list",
            image: todo, // Replace with actual image URL
        },
        {
            id: "07",
            name: "Amazon-web-page",
            description: "An amazon-web-page made for prectice to check my html and css skills and improve them.",
            technologies: [ "HTML", "CSS"],
            // liveLink: "https://home-service-website.netlify.app/",
            repoLink: "https://github.com/vipinkushwahah/amazon-web-page",
            image: kkkkk, // Replace with actual image URL
        },
        {
            id: "08",
            name: "multitask-website",
            description: "An multitask-website with  browsing and  functionality of multitasking stuff and other.",
            technologies: ["React", "HTML", "CSS", "Tailwind CSS", "JavaScript"],
            liveLink: "https://home-service-website.netlify.app/",
            repoLink: "https://github.com/vipinkushwahah/multitask-website",
            image: homeImage, // Replace with actual image URL
        },
        {
            id: "09",
            name: "Login-Form",
            description: "An made for login page with animation and unique style added logic with javascript to make it good.",
            technologies: ["React", "HTML", "CSS", "JavaScript"],
            // liveLink: "https://home-service-website.netlify.app/",
            repoLink: "https://github.com/vipinkushwahah/login-form",
            image: Capture5, // Replace with actual image URL
        },
        {
            id: "10",
            name: "Sign-Up-form-in-react",
            description: "An made for login page and sign up page by using javascript logic and flip animation between the login and signup.",
            technologies: ["React", "HTML", "CSS", "JavaScript"],
            // liveLink: "https://home-service-website.netlify.app/",
            repoLink: "https://github.com/vipinkushwahah/Sign-Up-form-in-react",
            image: Untitled, // Replace with actual image URL
        },
        {
            id: "11",
            name: "Modern-Application-Form",
            description: "An Modern-Application-Form made to show my skills and ability to create new logical forms",
            technologies: ["React", "HTML", "CSS", "JavaScript"],
            // liveLink: "https://home-service-website.netlify.app/",
            repoLink: "https://github.com/vipinkushwahah/Modern-Application-Form",
            image: form, // Replace with actual image URL
        },
    ];
   
    const [activeProject, setActiveProject] = useState(0);

    const handleNext = () => {
        setActiveProject((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <div className="project-container">
            {/* Project Details */}
            <div className="project-details">
                <div className="project-number">{projects[activeProject].id}</div>
                <div className="project-name">{projects[activeProject].name}</div>
                <div className="project-description">{projects[activeProject].description}</div>
                <div className="project-technologies">
                    {projects[activeProject].technologies.join(", ")}
                </div>
                <div className="project-buttons">
                    <button
                        className="live-btn"
                        onClick={() => window.open(projects[activeProject].liveLink, "_blank")}
                    >
                        <i class="ri-arrow-right-up-line" title="live project"></i>
                    </button>
                    <button
                        className="repo-btn"
                        onClick={() => window.open(projects[activeProject].repoLink, "_blank")}
                    >
                       <i className="ri-github-fill" title="Github"></i>
                    </button>
                </div>
            </div>

            {/* Image Slider */}
            <div className="project-slider">
                <div>
                <img
                    src={projects[activeProject].image}
                    alt={projects[activeProject].name}
                    className="project-image"
                />
                </div>
                
                <div>
                <button className="prev-btn" onClick={handlePrev}>❮</button>
                <button className="next-btn" onClick={handleNext}>❯</button>
                </div>
            </div>
        </div>
    );
};

export default Project;
