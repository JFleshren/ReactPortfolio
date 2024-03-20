import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1.',
      link: 'https://example.com/project1'
    },
    {
      title: 'Project 2',
      description: 'Description of project 2.',
      link: 'https://example.com/project2'
    },
    // Add more projects
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
/* FILL PLCAEHOLDERS */