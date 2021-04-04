import React from 'react';
import './Project.css';

const Project = ({ projectName, projectURL, image }) => {
    return (
        <a href={projectURL} target="_blank" rel="noreferrer" className="project">
            <img src={image} alt={projectName} className="project__image" />
            <div className="project__name">
                {projectName}
            </div>
        </a>
    )
}

export default Project
