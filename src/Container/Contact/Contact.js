import React from 'react';
import { withRouter } from 'react-router';

import ContactItem from '../../Components/ContactItem/ContactItem';
import Title from '../../Components/Title/Title';
import './Contact.css';
import email from '../../img/contact/emailme.svg';
import location from '../../img/contact/location.svg';

const Contact = () => {
    return (
        <div className="contact__container">
            <Title title="Contact Details" span="Contact Details" style={{ marginBottom: '5rem' }} />
            <div className="contact">
                <div className="contact_map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.6683555869904!2d88.39777031545667!3d22.59150398517312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02760a5789f559%3A0x5373355076886790!2sP.N.B.!5e0!3m2!1sen!2sin!4v1617474173521!5m2!1sen!2sin"
                        width="350"
                        height="450"
                        style={{ border: '1rem solid #191d2b', borderRadius: '1rem' }}
                        allowFullScreen=""
                        loading="lazy"></iframe>
                </div>
                <div className="contact__section">
                    <ContactItem icon={email} text="sayansarkar333@gmail.com" title="Email" />
                    <ContactItem icon={location} text="Salt Lake, Kolkata-700064" title="Address" />
                </div>
            </div>
        </div>
    )
}

export default withRouter(Contact)
