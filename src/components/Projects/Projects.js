import React from 'react';
import ProjectCard from './Cards/Card';

const Projects = props => {
    const projectList = [{name: `React Wars`, img: `https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_956a88c2.jpeg?region=1%2C93%2C999%2C500&width=960`,
                          description: `This was React Wars`}, {name: `React Wars2`, img: `https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_956a88c2.jpeg?region=1%2C93%2C999%2C500&width=960`,
                          description: `This was React Wars`}];
    return (
        <div className = 'projects'>
            { projectList.map((project, index) => <ProjectCard key= {`${project.name}${index}`} project= {project} />) }
        </div>
        
    );
}

export default Projects;