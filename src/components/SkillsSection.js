import React from 'react';
import './SkillsSection.css';

// Skill data with icon classes from devicon and custom colors
const skills = [
  { name: 'JavaScript', level: 'Advanced', color: '#F7DF1E', iconClass: 'devicon-javascript-plain' },  // Bright yellow
  { name: 'React', level: 'Basic', color: '#61DAFB', iconClass: 'devicon-react-original' },          // Soft sky blue
  { name: 'Node.js', level: 'Advanced', color: '#8CC84B', iconClass: 'devicon-nodejs-plain' },      // Light green
  { name: 'CSS', level: 'Intermediate', color: '#264de4', iconClass: 'devicon-css3-plain' },                // Deep blue
  { name: 'HTML', level: 'Advanced', color: '#E34F26', iconClass: 'devicon-html5-plain' },              // Bright orange-red
  { name: 'Python', level: 'Intermediate', color: '#3776AB', iconClass: 'devicon-python-plain' },       // Muted blue
  { name: 'Java', level: 'Advanced', color: '#007396', iconClass: 'devicon-java-plain' },               // Deep teal
  { name: 'Angular', level: 'Basic', color: '#DD0031', iconClass: 'devicon-angular-plain' },         // Dark red
  { name: 'Blockchain', level: 'Basic', color: '#2E3B4E', iconClass: 'devicon-solidity-plain' },        // Slate gray
  { name: 'Bootstrap', level: 'Intermediate', color: '#7952B3', iconClass: 'devicon-bootstrap-plain' },        // Purple
  { name: 'GitLab', level: 'Advanced', color: '#FC6D26', iconClass: 'devicon-gitlab-plain' },              // Orange
  { name: 'AWS', level: 'Basic', color: '#FF9900', iconClass: 'devicon-amazonwebservices-plain' },      // Bright orange
  { name: 'Docker', level: 'Basic', color: '#2496ED', iconClass: 'devicon-docker-plain' },              // Ocean blue
  { name: 'MySQL', level: 'Intermediate', color: '#4479A1', iconClass: 'devicon-mysql-plain' },                // Medium blue
  { name: 'MongoDB', level: 'Intermediate', color: '#47A248', iconClass: 'devicon-mongodb-plain' },            // Forest green
  { name: 'Spring Boot', level: 'Basic', color: '#6DB33F', iconClass: 'devicon-spring-plain' }          // Light green
];


const SkillsSection = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            style={{ background: `linear-gradient(135deg, ${skill.color}, #fff)` }}
          >
            <div className="skill-icon" style={{ color: skill.color }}>
              <i className={skill.iconClass}></i>
            </div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-level">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
