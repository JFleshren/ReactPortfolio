import React from 'react';

const Resume = () => {
  
  const resumeContent = {
    name: 'Your Name',
    title: 'Your Title',
    summary: 'Summary of your experience, skills, etc.',
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
