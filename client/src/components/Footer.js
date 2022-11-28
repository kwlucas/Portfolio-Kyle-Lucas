import React from 'react';
import githubIcon from '../images/github.svg';
import linkedinIcon from '../images/linkedin.svg';

export default function Footer() {
    return (
        <footer>
            <div>
                <object data={githubIcon} width='60em'></object>
            </div>
            <div>
                <object data={linkedinIcon} width='60em'></object>
            </div>
            <div>
                <i>Icon</i>
            </div>
        </footer>
    );
}
