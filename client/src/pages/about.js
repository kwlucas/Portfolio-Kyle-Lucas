import React from 'react';
import aboutImage from '../images/kyleImage01.jpg';

export default function About() {

    return (
        <main>
            <h2>About Me</h2>
            <h3>My Story</h3>
            <div className='about container'>
                <img src={aboutImage} alt='Kyle Lucas'></img>
                <p>I am a young programmer who has a real passion for the industry. I have always been rather objective and logical and have found coding as more of a hobby than anything else. I have been programming since I was in 5th grade when I began dabbling in the basics of Ruby to make games using a software called RPG maker. I worked my way into python from there and everything seemed to grow from that. Python, C++, C#, Bash; I found myself stockpiling skills for pretty much nothing but hobbies. Then, near the end of highschool Covid came around and we were all in quarantine. That turned me onto social media which I had never been very active in. It was there I heard that I could create chat bots using Javascript, so I taught myself that and started making bots on Discord, a text based social media platform.</p>
            </div>
            <p>Not long after I started creating bots I started doing freelance bot development. The most difficult part of that was getting clients, I had to do a lot of networking and getting myself out there, but it soon became pretty successful, at least for a high-schooler who didn't have to pay rent. After highschool I headed off to college but quickly realized that it was not for me. I looked into alternative education tracks and I soon found myself in a coding boot camp program at the University of Denver. It was extremely fast paced, but I was very interested in the topic and was determined to learn and I excelled. Learning advanced coding in an official, flushed out capacity was a game changer as I had, up until that point been a completely self-taught programmer. Once I had graduated I began doing freelance web development with a focus on front-end. I am still doing that so we are up to date now.</p>
            <p>Freelancing has been going alright. I am doing pretty well in the art community at the moment, a lot of aspiring artists out there are in need of portfolio sites and I have been really focusing on getting my name around in their circles. However, while it has been going well I do not think that I want to continue with it. For starters, while I love to code and enjoy doing it, freelancing has become more networking and advertising than it has coding. Secondly, in order to compete with large content management systems such as WordPress, Squarespace, and Wix I cannot charge very much.</p>
            <br></br>
            <h3>My Specialties</h3>
            <p>I have dabbled in a lot of things and am a quick learner who adapts quickly to anything. I have utilized <b>react native</b> for work on apps, <b>unreal</b> and <b>unity</b> engines for game development, a myriad of javascript libraries (including <b>react</b>, <b>next.js</b>, <b>electron.js</b>, <b>jest</b>, and <b>jquery</b>), <b>visual studio code</b>, and <b>git</b> products.</p>
            <p>In terms of programming language I have a high proficiency in the front-end development languages; <b>JavaScript</b>, <b>HTML</b>, and <b>CSS</b>. My CSS knowledge is especially extensive, having created my own CSS framework with the intention of completely flushing out my CSS knowledge. While I am not as experienced with the back-end I know my way around <b>SQL</b> and the main libraries for <b>graphQL</b> and <b>MongoDB</b>. I have a very solid understanding of the fundamentals of <b>python</b>, having been flushed out as the first full language I learned. Finally we have <b>C#</b> and <b>C++</b>. I have used these languages in a limited capacity when dabbling with things such as game development and robotics and I would consider myself as having at least a basic understanding of them.</p>
        </main>
    );
}
