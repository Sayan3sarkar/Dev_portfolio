import React from 'react';
import './Academics.css';

const Academics = ({ details }) => {
    return (
        <div className="academics">
            <div className="academics__title">
                <h4>{details.degree}</h4>
            </div>
            {details.stream && (
                <div className="academics__stream">
                    <h5>in {details.stream}</h5>
                </div>
            )}
            <div className="academics__insName">
                {details.insName}
            </div>
            <div className="academics__board">
                affiliated to {details.board}
            </div>
            <div className="academics__marks">
                <span>CGPA/Percentage: </span> {details.marks}
            </div>
            <div className="academics__yop">
                <span>Year of Passout: </span> {details.yop}
            </div>
        </div>
    )
}

export default Academics
