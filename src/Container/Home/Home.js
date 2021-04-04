import React from 'react';
import { faFacebook, faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Home.css';
import { withRouter } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <header className="home__hero">
                <h1 className="home__heroText">
                    Hi, I'm
                    <span> Sayan Sarkar</span>
                </h1>
                <p className="home__subText">
                    I'm a <span>Full Stack Developer</span> with 3+ years of professional experience in technologies like <span>ReactJS, Express(with NodeJS)</span>, and <span>Angular</span>.
                </p>
                <p className="home__subText">
                    This is my personal portfolio. Find some of my prominent works in the <span>Projects/Blogs</span> section of this portfolio.
                </p>
                <p className="home__subText">
                    Find all of my open source contributions by clicking on the following <span> Github</span> icon.
                </p>
                <div className="home__icons">
                    <a href="https://github.com/Sayan3sarkar" target="_blank" className="home__iconHolder" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="home__icon gh" />
                    </a>
                    <a href="https://www.linkedin.com/in/sayan-sarkar-258863143/" target="_blank" className="home__iconHolder" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="home__icon lnk" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100018626464417" target="_blank" className="home__iconHolder" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="home__icon fb" />
                    </a>
                    <a href="https://sayansarkar333.medium.com/" target="_blank" className="home__iconHolder" rel="noreferrer">
                        <FontAwesomeIcon icon={faMedium} className="home__icon md" />
                    </a>
                </div>
            </header>
        </div >
    )
}

export default withRouter(Home)
