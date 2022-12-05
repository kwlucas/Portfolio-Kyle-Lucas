import React from 'react';

export default function Project(props) {
    const { name, description, repo, deployment, imagePath } = props.projectData
    return (
        <div className='card'>
            <div className='content'>
                <div className='title'>{name}</div>
                <div className='body' >{description}</div>
            </div>
            <div className='border'></div>
        </div>
    );
}
