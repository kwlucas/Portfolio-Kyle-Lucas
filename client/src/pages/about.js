import React from 'react';
import aboutImage from '../images/kyleImage01.jpg';

export default function About() {

    return (
        <main>
            <h2>About Me</h2>
            <div className='container'>
                <img src={aboutImage} alt='Kyle Lucas'></img>
                <p>I've got a passion for programming. I pick up things quick and am always ready to take on something new.</p>
            </div>
        </main>
    );
}
