import React from 'react';
import Project from './Projects';

const projectData = [
    {
        title: 'Blockchain Mini Project',
        description: 'A personal blockchain project showcasing my projects and skills.',
        technologies: ['React', 'CSS', 'JavaScript','NodeJs','Smart contracts'],
        liveDemo: 'https://sakshi-techhub-admission-dapp.netlify.app/ ',
        repoLink: 'https://github.com/yourusername/portfolio',
        image: '/admission.png',
    },
    {
        title: 'ERP',
        description: 'The platform where we are manage all resources.',
        technologies: ['Angular', 'Node.js', 'Express', 'MongoDB'],
        liveDemo: 'https://development.d2jup677fkamnr.amplifyapp.com/auth/sign-in',
        repoLink: 'https://github.com/yourusername/task-manager',
        image: '/erp.png',
    },
    {
      title: 'VMS',
      description: 'The enterprise application.',
      technologies: ['Angular', 'Node.js', 'Fastify', 'MySQL'],
      liveDemo: 'https://development.d2pwyx7sf53up4.amplifyapp.com/self-configuration/rate-factor/list',
      repoLink: 'https://github.com/yourusername/task-manager',
      image: '/vms.png',
  }
];

const ProjectList = () => {
    return (
        <div className="project-list">
            {projectData.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    liveDemo={project.liveDemo}
                    repoLink={project.repoLink}
                    image={project.image}
                />
            ))}
        </div>
    );
};

export default ProjectList;
