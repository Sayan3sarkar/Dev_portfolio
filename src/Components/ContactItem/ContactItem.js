import React from 'react';
import './ContactItem.css';

const ContactItem = ({ icon, text, title }) => {
    return (
        <div className="contactItem">
            <img src={icon} alt={text} />
            <div className="contactItem__right">
                <h6>{title}</h6>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ContactItem
