import React from 'react';
import { withRouter } from 'react-router';
import Blog from '../../Components/Blog/Blog';
import Project from '../../Components/Project/Project';
import Title from '../../Components/Title/Title';
import { blogs } from '../../shared/blogs';
import { projects } from '../../shared/projects';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="project__container">

            <Title title="Projects" span="Projects" />
            <div className="projects">
                {
                    projects.map(({ projectName, projectURL, image }, i) => (
                        <Project
                            key={i}
                            projectName={projectName}
                            projectURL={projectURL}
                            image={image}
                        />
                    ))
                }
            </div>

            <Title title="Blogs" span="Blogs" style={{ marginTop: '5rem' }} />
            <div className="blogs">
                {
                    blogs.map(({ blogName, blogImage, blogURL }, i) => (
                        <Blog
                            key={i}
                            blogName={blogName}
                            blogURL={blogURL}
                            blogImage={blogImage}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default withRouter(Blogs)
