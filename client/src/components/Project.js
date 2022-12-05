import React, { useState } from 'react';

import githubIcon from '../images/github.svg';

export default function Project(props) {
    const [status, setStatus] = useState(false)
    const { name, description, repo, deployment, imagePath } = props.projectData

    function handleClick() {
        status ? setStatus(false) : setStatus(true);
    }

    return (
        <>
            <div className='card' onClick={handleClick}>
                <div className='content'>
                    <div className='title'>{name}</div>
                    <div className='body' >{description}</div>
                </div>
            </div>
            <dialog onClick={handleClick} open={status}>
                <div className='content'>
                    <div className='header'>
                        <a href={deployment} target='_blank' rel='external'>{name}</a>
                        <a href={repo} target='_blank' rel='external'>
                            <img src={githubIcon} width='30em' alt='The GitHub Repository'></img>
                        </a>
                    </div>
                    <div className='body' >
                        <p>{description}</p>
                        <div>
                            <img src={imagePath}></img>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
}
