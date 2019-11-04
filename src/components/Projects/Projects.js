import React from 'react';
import ProjectCard from './Cards/Card';
import projectsData from './Cards/projects.json';

const projectList  = projectsData.projects;

const Projects = props => {
    return (
        <div className="project-wrapper">
            <h1>Selection of Recent Projects</h1>
            <div className = 'projects'>
                { projectList.map((project, index) => <ProjectCard key= {`${project.name}${index}`} project= {project} />) }
            </div>
        </div>
        
    );
}

export default Projects;