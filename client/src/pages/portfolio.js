import React, { useState, useEffect } from 'react';

import Project from '../components/Project';

import statblockImg1 from '../images/Statblock1.PNG';
import statblockImg2 from '../images/Statblock2.PNG';
import statblockImg3 from '../images/Statblock3.PNG';

import codeClipsImg1 from '../images/CodeClips-Image.PNG';
import codeClipsImg2 from '../images/CodeClipsNewUser.gif';
import codeClipsImg3 from '../images/CodeClipsNewPost.gif';

import fetchCoinImg1 from '../images/FetchCoinpreview.PNG';

import otherProjectsImg1 from '../images/RepoImage.PNG';

const projects = [
    {
        name: 'Statblock',
        date: 'Dec 2022',
        description: 'Statblock is an application for Dungeons and Dragons enthusiasts to input and save their game stats with intention of making the organization and execution of their gameplay easier.',
        infoSegments: ['A full-stack web application that I created with a small team of developers (4 including me) in mid December of 2022, Statblock is one of the most aesthetically successful designs I have worked on. The idea of Statblock was to create and store character profiles for D&D and other table-top roleplaying games.',
    'It featured a completely responsive design capable of being used both on mobile and desktop devices, a dynamic user interface complete with animated components, and secure handling of user data.'],
        frontEndTech: ['React.js', 'Syntactically Awesome Style Sheets, SASS (CSS extension language)', 'HTML & CSS'],
        backEndTech: ['Node.js', 'Express.js', 'Bcrypt (password hashing library)', 'Apollo', 'GraphQL', 'MongoDB'],
        mainTech: ['MongoDB', 'React', 'SASS/CSS'],
        repo: 'https://github.com/kwlucas/Statblock',
        deployment: 'https://statblock.herokuapp.com/',
        imagePath: statblockImg1,
        mediaPaths: [statblockImg2, statblockImg3]
    },
    {
        name: 'Code Clips',
        date: 'Sep 2022',
        description: 'Code Clips is a full-stack web application for developers that allows one to store bits of code, documentation, and references online for future use.',
        infoSegments: ['I worked on Code Clips with primarily one other developer during late September 2022. The application allows for users to post and save code snippets for later reference. It has a mobile responsive design and dynamic user interface components. The UI (user interface also featured several manually coded vector graphics which sets it apart from some of my other projects.'],
        frontEndTech: ['Handlebars.js (javascript templating library)', 'Browserify (bundler tool similar to Webpack)', 'Highlight.js (syntax highlighting library)', 'HTML & CSS',],
        backEndTech: ['Node.js', 'Express.js', 'Sequelize (and by extension mySQL/SQL)', 'Bcrypt (password hashing library)'],
        mainTech: ['SQL', 'Express', 'HTML', 'CSS'],
        repo: 'https://github.com/kwlucas/Code-Clips',
        deployment: 'https://code-clips.herokuapp.com/',
        imagePath: codeClipsImg1,
        mediaPaths: [codeClipsImg2, codeClipsImg3]
    },
    {
        name: 'FetchCoin',
        date: 'Aug 2022',
        description: 'FetchCoin is a front-end application that can be used to search up various crypto currencies and get basic information regarding them.',
        infoSegments: ['I worked on Fetch Coin with two other developers in early August 2022. It would find basic information and relevant news articles related to any cryptocurrency the user would enter. It would then save these searches so that the user could return to them later.', 'I am very proud of Fetch Coin because not only was it the first project I ever worked on with a group of developers, but also because it had a tight time table; having to be completed in what came down to under a week.'],
        frontEndTech: ['Bulma.io (CSS Framework)','CoinGecko API', 'TheNewsAPI', 'HTML & CSS', 'JavaScript'],
        backEndTech: [],
        mainTech: ['JS', 'HTML', 'CSS'],
        repo: 'https://github.com/kwlucas/Fetch-Coin',
        deployment: 'https://patrickaratcliff.github.io/k5-project1-finance_info/',
        imagePath: fetchCoinImg1,
        mediaPaths: []
    },
    {
        name: 'Other Projects',
        date: '',
        description: 'Additional projects that I have worked on include: the SECOR Cares (a non-profit organization) website, Slate (my own CSS framework), a blog site, a schedule app, a team profile/roster generator, a collection of portfolio sites, a password generator, weather dashboard app, a note taking app, several Discord moderation bots, a README generator, and a quiz app.',
        infoSegments: ['You can see most of these projects on my Github page.'],
        frontEndTech: [],
        backEndTech: [],
        mainTech: [],
        repo: 'https://github.com/kwlucas?tab=repositories',
        deployment: 'https://github.com/kwlucas?tab=repositories',
        imagePath: otherProjectsImg1,
        mediaPaths: []
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
