import React from 'react';
import projectsData from './projects.json';

const ProjectCard = props => {
    return (
        <div className="profile-card">
            <a href={props.project.link}>

                <h3>{props.project.name}</h3>
                <img src={props.project.img} alt={`${props.project.name} project preview`} />
                <p>{props.project.description}</p>
                
            </a>
        </div>
    );
}

export default ProjectCard;