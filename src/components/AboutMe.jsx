import './styles.css';
{/*import image from '.jpg';*/}

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <div className="bio">
        <img src="PICTURE-PLACEHOLDER" alt="" />
        <p>
          {/* Replace PLACEHOLDER with new bio */}
         
          I am a web developer with a passion for creating engaging user experiences. I have experience working with modern web technologies such as React, Node.js, and Express. I am always eager to learn new technologies and frameworks to improve my skills. I am currently seeking new opportunities to work on exciting projects with a talented team.
       
        </p>
      </div>
    </div>
  );
};

export default AboutMe;