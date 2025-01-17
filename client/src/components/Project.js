import React, { useState } from 'react';

import githubIcon from '../images/github.svg';

export default function Project(props) {
    const [status, setStatus] = useState(false);
    const { name, description, infoSegments, functionality, frontEndTech, backEndTech, mainTech, repo, deployment, imagePath, mediaPaths } = props.projectData

    /* function handleClick(event) {
        //status ? setStatus(false) : setStatus(true);
        event.stopPropagation()
        setStatus(!status);
    } */

    function handleOpen(event) {
        event.stopPropagation();
        setStatus(true);
    }

    function handleClose(event) {
        event.stopPropagation();
        setStatus(false);
    }

    //WHY WONT THE MODALS CLOSE ON MOBILE?!?!?!?!?!
    //Fixed by removing close button. Make it toggle with every click.

    return (
        <>
            <div className='card' onClick={handleOpen}>
                <div className='content'>
                    <div className='title'>{name}</div>
                    <div className='body'>
                        <img className='cover' src={imagePath}></img>
                        <p>{description}</p>
                    </div>
                    <ul className='techList'>
                        {mainTech.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            {status && <dialog onClick={handleClose} open={status}>
                <div className='content'>
                    {/* <div onClick={handleClose} className='closeBtn'>x</div> */}
                    <section>
                        <div className='mainImage' >
                            <img src={imagePath}></img>
                        </div>
                        <div className='mainInfo'>
                            <div className='header'>
                                <a href={deployment} target='_blank' rel='external'>{name}</a>
                                <a href={repo} target='_blank' rel='external'>
                                    <img src={githubIcon} width='30em' alt='The GitHub Repository'></img>
                                </a>
                            </div>
                            <ul className='mainTech'>
                                {mainTech.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <div className='description'>
                                <p>{description}</p>
                            </div>
                        </div>
                    </section>
                    {functionality[0] ? <div className='functions'>
                        <h4>Functionality</h4>
                        <ul>
                            {functionality.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div> : <></>}
                    {infoSegments[0] || mediaPaths[0] ? <div className='body' >
                        {infoSegments[0] ? <p>{infoSegments[0]}</p> : <></>}
                        {mediaPaths[0] ? <div> <img src={mediaPaths[0]}></img></div> : <></>}
                    </div> : <></>}
                    {infoSegments[1] || mediaPaths[1] ? <div className='body' >
                        {infoSegments[1] ? <p>{infoSegments[1]}</p> : <></>}
                        {mediaPaths[1] ? <div> <img src={mediaPaths[1]}></img></div> : <></>}
                    </div> : <></>}
                    {infoSegments[2] || mediaPaths[2] ? <div className='body' >
                        {infoSegments[2] ? <p>{infoSegments[2]}</p> : <></>}
                        {mediaPaths[2] ? <div> <img src={mediaPaths[2]}></img></div> : <></>}
                    </div> : <></>}
                    {frontEndTech[0] || backEndTech[0] ? <div className='body techLists' >
                        {frontEndTech[0] ? <div>
                            <p><b>Front-end</b></p>
                            <ul>
                                {frontEndTech.map((item, index) => (
                                    <li key={index}>{item} </li>
                                ))}
                            </ul>
                        </div> : <></>}
                        {backEndTech[0] ? <div>
                            <p><b>Back-end</b></p>
                            <ul>
                                {backEndTech.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div> : <></>}
                    </div> : <></>}
                </div>
            </dialog>}
        </>
    );
}
