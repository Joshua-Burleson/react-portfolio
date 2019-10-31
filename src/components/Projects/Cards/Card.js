import React from 'react';

const ProjectCard = props => {
    return (
        <div className="profile-card">
            <h3>{props.project.name}</h3>
            <img src={props.project.img} alt={`${props.project.name} project preview`} />
            <p>{props.project.description}</p>
        </div>
    );
}

export default ProjectCard;