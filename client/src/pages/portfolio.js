import React, { useState, useEffect } from 'react';

import Project from '../components/Project';

const projects = [
    {
        name: 'Code Clips',
        description: 'Code Clips is a web app for developers that allows one to store bits of code, documentation, and references online for future use.',
        repo: 'https://github.com/kwlucas/Code-Clips',
        deployment: 'https://code-clips.herokuapp.com/',
        imagePath: 'https://github.com/kwlucas/Code-Clips/raw/main/public/images/CodeClips-Image.PNG'
    },
    {
        name: 'Statblock',
        description: 'A tool used to help create characters for use in D&D (Dungeons and Dragon)',
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

    useEffect(() => {
        (document.querySelectorAll('.card') || []).forEach(card => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouseX', `${mousePos.X - rect.left}px`);
            card.style.setProperty('--mouseY', `${mousePos.Y - rect.top}px`);

        });
    })

    function handleMouseMove(event) {
        setMousePos({
            X: event.clientX,
            Y: event.clientY
        });
    }

    return (
        <main>
            <h2>Portfolio</h2>
            <div className='cardContainer' onMouseMove={handleMouseMove}>
                {projects.map((project, index) => (
                    <Project key={index} projectData={project} />
                ))}
            </div>
        </main>
    );
}
