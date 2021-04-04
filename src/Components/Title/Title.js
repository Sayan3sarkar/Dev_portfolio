import React from 'react';
import './Title.css';

const Title = ({ title, span, ...props }) => {
    return (
        <div className="title" style={props.style && props.style}>
            <h3>
                {title}
                <span> {span}</span>
            </h3>
        </div>
    )
}

export default Title
