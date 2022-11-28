import React from 'react';
import githubIcon from '../images/github.svg';
import linkedinIcon from '../images/linkedin.svg';

export default function Footer() {
    return (
        <footer>
            <div>
                <img src={githubIcon} width='60em'></img>
            </div>
            <div>
                <img src={linkedinIcon} width='60em'></img>
            </div>
            <div>
                <i>Icon</i>
            </div>
        </footer>
    );
}
