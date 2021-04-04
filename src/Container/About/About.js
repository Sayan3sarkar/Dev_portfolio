import React from 'react';
import { withRouter } from 'react-router';
import ImageSection from '../../Components/ImageSection/ImageSection';
import Skills from '../../Components/Skills/Skills';
import Title from '../../Components/Title/Title';
import Academics from '../../Components/Academics/Academics';
import { academics } from '../../shared/academics';
import { skills } from '../../shared/skills';
import './About.css';

const About = () => {

    return (
        <div className="about">

            <Title title="About Me" span="About Me" />
            <ImageSection />

            <Title title="My Skills" span="My Skills" />
            <div className="about__skillsContainer">
                {skills.map(({ skill, width, fontAwesomeClass, imageUrl }, i) => (
                    <Skills skill={skill} width={width} key={i} fontAwesomeClass={fontAwesomeClass} imageUrl={imageUrl} />
                ))}
            </div>

            {/* <div className="about__serviceContainer">
                <Service image={design} title="Web Development" text="abcd" />
                <Service image={design} title="Web Development" text="abcd" />
                <Service image={design} title="Web Development" text="abcd" />
            </div> */}

            <Title title="Academic Background" span="Academic Background" style={{ marginTop: '5rem' }} />
            <div className="about__academicsContainer">
                {academics.map((academic, i) => (
                    <Academics key={i} details={academic} />
                ))}
            </div>
        </div>
    )
}

export default withRouter(About)
