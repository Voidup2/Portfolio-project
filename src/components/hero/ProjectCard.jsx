import React, { useState } from 'react';
import './Body.css';

const ProjectCard = ({ title, imageSrc, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="project-styles" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
        <h3 className="card-title">{title}</h3>
      {isHovered && (
        <div className="card-details-overlay">
          <div className="card-details-content">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;