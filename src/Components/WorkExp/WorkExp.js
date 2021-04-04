import React from 'react';
import './WorkExp.css';

const WorkExp = ({
    company,
    designation,
    role,
    duration,
    location,
    imageUrl,
    tech_stack,
    responsibilities
}) => {
    return (
        <div className="workExp">

            <div className="workExp__header">
                <div className="workExp__image">
                    <img src={imageUrl} alt={company} />
                </div>
                <div className="workExp__headerContent">
                    <div className="workExp__company">
                        <span>Company: </span>{company}
                    </div>
                    <div className="workExp__location">
                        <span>Location: </span>{location}
                    </div>
                    <div className="workExp__duration">
                        <span>Duration: </span>{duration}
                    </div>
                </div>
            </div>

            <div className="workExp__mid">
                <div className="workExp__designation">
                    <span>Designation: </span>{designation}
                </div>
                <div className="workExp__role">
                    <span>Role: </span>{role}
                </div>
            </div>

            <h4><span>Technology Stack:</span></h4>
            <div className="work__techStack">
                {
                    tech_stack.map((tech, i) => (
                        <p key={i}>{tech}</p>
                    ))
                }
            </div>

            <h4><span>Responsibilities:</span></h4>
            <div className="work__responsibilities">
                <ul>{responsibilities.map((res, i) => (
                    <li key={i}>{res}</li>
                ))}</ul>
            </div>
        </div>
    )
}

export default WorkExp
