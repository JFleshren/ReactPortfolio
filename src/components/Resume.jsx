import React from 'react';

const Resume = () => {
  
  const resumeContent = {
    name: 'Jared Fleshren',
    title: 'Junior Full Stack Developer',
    summary: 'As an entry-level full stack developer, I bring a versatile skill set capable of designing and implementing a wide range of web applications. Proficient in leveraging the MERN stack (MongoDB, Express.js, React, Node.js) to develop scalable and responsive solutions, I possess adeptness in both front-end and back-end technologies. With expertise in HTML5, CSS3 (Bootstrap, Tailwind), and JavaScript, coupled with a solid foundation in RESTful API development and MVC architecture, I am poised to contribute effectively to complex development projects. Committed to ongoing professional growth, I am eager to collaborate within dynamic teams to deliver innovative and impactful solutions in the ever-evolving landscape of full stack development. ',
    // Add any extra sections here
  };

  return (
    <div className="resume">
      <h2>Resume</h2>
      <div className="resume-content">
        <h3>{resumeContent.name}</h3>
        <h4>{resumeContent.title}</h4>
        <p>{resumeContent.summary}</p>
        {/* Add more sections */}
      </div>
    </div>
  );
};

export default Resume;
