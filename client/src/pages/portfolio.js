import React, { useState } from 'react';

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
    const [mousePos, setMousePos] = useState({
        X: 0,
        Y: 0
    });

    const handleMouseMove = (event) => {
        const target = event.target
        const rect = target.getBoundingClientRect()
        const posX = event.clientX - rect.left;
        const posY = event.clientY - rect.top;
        setMousePos({
            X: posX,
            Y: posY
        })

        target.style.setProperty('--mouseX', `${mousePos.X}px`);
        target.style.setProperty('--mouseY', `${mousePos.Y}px`);
    }

    return (
        <main>
            <h2>Portfolio</h2>
            <div className='cardContainer'>
                {projects.map((project, index) => (
                    <Project key={index} eventHandler={handleMouseMove} projectData={project} />
                ))}
            </div>
        </main>
    );
}
