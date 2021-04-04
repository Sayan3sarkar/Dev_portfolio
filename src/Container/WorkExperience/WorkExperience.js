import React from 'react';
import { withRouter } from 'react-router';

import Title from '../../Components/Title/Title';
import WorkExp from '../../Components/WorkExp/WorkExp';
import { workEx } from '../../shared/workEx';
import './WorkExperience.css';

const WorkExperience = () => {
    return (
        <div className="workEx__container">
            <Title title="Work Experience" span="Work Experience" style={{ marginBottom: '4rem' }} />
            <div className="workExperience">
                {
                    workEx.map(({
                        company,
                        designation,
                        role,
                        duration,
                        location,
                        imageUrl,
                        tech_stack,
                        responsibilities
                    }, i) => (
                        <WorkExp
                            key={i}
                            company={company}
                            designation={designation}
                            role={role}
                            duration={duration}
                            location={location}
                            imageUrl={imageUrl}
                            tech_stack={tech_stack}
                            responsibilities={responsibilities}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default withRouter(WorkExperience)
