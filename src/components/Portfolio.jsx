const Portfolio = () => {
  const projects = [
    {
      title: 'Bee-Porter',
      description: 'A simple application using MapBox API to mark bee swarm locations for local beekeepers. This project was built using React, Node.js, Express, and MongoDB.',
      link: 'https://bee-porter-1.onrender.com/'
    },
    {
      title: 'Project 2',
      description: 'Description Placeholder',
      link: 'Future Link Here'
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