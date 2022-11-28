import React from 'react';
import githubIcon from '../images/github.svg';
import linkedinIcon from '../images/linkedin.svg';

export default function Footer() {
    return (
        <footer>
            <a href='https://github.com/kwlucas' target='_blank' rel='external'>
                <img src={githubIcon} width='50em' alt='My GitHub Profile!'></img>
            </a>
            <a href='https://www.linkedin.com/in/kyle-w-lucas/' target='_blank' rel='external'>
                <img src={linkedinIcon} width='50em' alt='My LinkedIn Profile!'></img>
            </a>
        </footer>
    );
}
