import React from 'react';
import './ImageSection.css';
import about from '../../img/about.png';

const ImageSection = () => {
    return (
        <div className="imageSection">
            <div className="imageSection__img">
                <img src={about} alt="" />
            </div>
            <div className="imageSection__aboutInfo">
                <h4>I am <span>Sayan Sarkar</span></h4>
                <p className="imageSection__aboutInfoText">
                    I am a professional <span>Full Stack Developer</span>. I have worked with <span>UI/UX</span> technologies like <span>ReactJS</span> and am currently working with
                    <span>Angular 9</span>. I develop <span>REST API's</span> using <span>NodeJS</span> frameworks like <span>Express</span>.
                    Also, several years of coding in <span>C++</span> and <span>Python</span> make <span>Data Structures and Algorithms</span>, one of my strongest suits.
                </p>

                <h4 style={{ marginTop: '1rem' }}>Personal Details</h4>
                <div className="imageSection__aboutDetails">
                    <div className="imageSection__about__left">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages Known</p>
                        <p>Address</p>
                    </div>
                    <div className="imageSection__about__right">
                        <p>: <span>Sayan Sarkar</span></p>
                        <p>: <span>24</span></p>
                        <p>: <span>Indian</span></p>
                        <p>: <span>English, Bengali, Hindi</span></p>
                        <p>: <span>Salt Lake, Kolkata-700064</span></p>
                    </div>
                </div>

                {/* <button className="imageSection__btn">Download Resume</button> */}
            </div>
        </div>
    )
}

export default ImageSection
