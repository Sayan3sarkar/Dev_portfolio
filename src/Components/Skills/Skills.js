import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Skills.css';

const Skills = ({ skill, width, fontAwesomeClass, imageUrl }) => {
    return (
        <div className="skills">
            <div className="skills__titleContainer">
                <h5 className="skills__title">{skill}</h5>
                {
                    fontAwesomeClass ? (
                        <FontAwesomeIcon icon={fontAwesomeClass} className="skills__icon" />
                    ) : (
                        <div className="skills__imageUrl">
                            <img src={imageUrl} alt="skill" />
                        </div>
                    )}
            </div>
            <div className="skills__bar">
                <div className="skills__progress">
                    <div className="skills__innerProgress" style={{ width: width }}></div>
                </div>
            </div>
        </div>
    )
}

export default Skills
