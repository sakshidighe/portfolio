import React from 'react';
import './Projects.css'; // Optional for styling

const Projects = ({ title, description, technologies, liveDemo, repoLink, image }) => {
    return (
        <div className="project-card">
            <img src={image} alt={`${title} project screenshot`} className="project-image" />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="tech-stack">
                {technologies.map((tech, index) => (
                    <span key={index} className="tech">{tech}</span>
                ))}
            </div>
            <div className="project-links">
                {liveDemo && <a href={liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                {repoLink && <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>}
            </div>
        </div>
    );
};

export default Projects;
