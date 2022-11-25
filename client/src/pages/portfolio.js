import React from 'react';

import Project from '../components/Project';

const projects = [
    {
        name: 'Project 1',
        description: 'Awsome description of project.',
        repo: 'linkToRepo.com',
        deployment: 'linkToDeployment.com',
        imagePath: 'path/to/image'
    },
    {
        name: 'Project 2',
        description: 'Awsome description of project.',
        repo: 'linkToRepo.com',
        deployment: 'linkToDeployment.com',
        imagePath: 'path/to/image'
    },
    {
        name: 'Project 3',
        description: 'Awsome description of project.',
        repo: 'linkToRepo.com',
        deployment: 'linkToDeployment.com',
        imagePath: 'path/to/image'
    },
]

export default function Portfolio() {

    return (
        <main>
            <h2>Portfolio</h2>
            <div className='cardContainer'>
                {projects.map((project, index) => (
                    <Project key={index} projectData={project} />
                ))}
            </div>
        </main>
    );
}
