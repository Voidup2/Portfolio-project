import './Body2.css';
import React, {useState} from 'react';
import ProjectCard from './ProjectCard';

// Sample data for your projects
const projects = [
  {
    id: 1,
    title: 'Python Project',
    description: 'This is a emotion recognition python based project. In this project I have used OpenCV a python based library, it can be used for face detection and facial recognition.It also uses DeepFace another Python library which reads an image based on its pixel value and analyse the pattern and use those to predict the human emotions. It uses the default webcam of the device for the image detection and uses the frames to detect the emotions.'
  },
  {
    id: 2,
    title: 'Crunchyroll Clone',
    description: 'This is a clone of a popular anime streaming website called Crunchyroll. I have used HTML and CSS to design the front end of the website. The website is responsive and can be viewed on all devices. It has a similar layout and design as the original website. The website has a navbar, a hero section, a featured section, and a footer. The website is not functional and is only for design purposes.'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'This is a portfolio website that showcases my projects and skills. I have used ReactJS to build the website. The website is responsive and can be viewed on all devices. It has a similar layout and design as my original portfolio. The website has a navbar, a hero section, a projects section, a skills section, and a footer. The website is functional and is used to showcase my work and skills.'
  },
];

const Body = () => {
  return (
    <div className='body-parent' id='project-section'>
      <h2>Projects</h2>
      <div className="body-contents">
        {projects.map(project => (
          <ProjectCard
            key={project.id} // Unique key is crucial for lists in React
            title={project.title}
          >
            {/* Children for the overlay */}
            <p>{project.description}</p>
          </ProjectCard>
        ))}
      </div>
    </div>
  );
};
export default Body