import React from 'react';
import aboutImage from '../images/kyleImage02.jpg';

export default function About() {

    return (
        <main>
            <h2>About Me</h2>
            <div className='container'>
                <p>I've got a passion for programming. I pick up things quick and am always ready to take on something new.</p>
                <img src={aboutImage} alt='Kyle Lucas'></img>
            </div>
        </main>
    );
}
