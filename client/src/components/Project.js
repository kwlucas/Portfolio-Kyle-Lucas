import React from 'react';

export default function Project(props) {
    const { name, description, repo, deployment, imagePath } = props.projectData
    return (
        <>
            <div className='card'>
                <div className='cardTitle'>{name}</div>
                <div className='cardBody' >{description}</div>
            </div>
            <div className='cardBorder'></div>
        </>
    );
}
