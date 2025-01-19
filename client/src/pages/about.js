import React from 'react';
import aboutImage from '../images/kyleImage01.jpg';

export default function About() {

    return (
        <main>
            <div className='about container'>
                <section>
                    <div>
                        <img src={aboutImage} alt='Kyle Lucas'></img>
                        <div className='name'>
                            <h2>Kyle Lucas</h2>
                            <h3>Web Developer</h3>
                        </div>
                    </div>
                    <div>
                        <div className='name'>
                            <h2>Kyle Lucas</h2>
                            <h3>Web Developer</h3>
                        </div>
                        <div className='skillChart'>
                            <div>
                                <div>
                                    <h4>JavaScript</h4>
                                    <progress value={95} max={100}>95%</progress>
                                </div>
                                <div>
                                    <h4>HTML</h4>
                                    <progress value={80} max={100}>80%</progress>
                                </div>
                                <div>
                                    <h4>CSS</h4>
                                    <progress value={85} max={100}>85%</progress>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h4>Python</h4>
                                    <progress value={60} max={100}>60%</progress>
                                </div>
                                <div>
                                    <h4>SQL</h4>
                                    <progress value={35} max={100}>35%</progress>
                                </div>
                                <div>
                                    <h4>C#</h4>
                                    <progress value={80} max={100}>80%</progress>
                                </div>
                            </div>
                        </div>
                        <ul className='techList'>
                            <li>React</li>
                            <li>Jquery</li>
                            <li>Bootstrap</li>
                            <li>Node</li>
                            <li>MySQL</li>
                            <li>Express</li>
                        </ul>
                    </div>
                    <div>
                        <p>I am a young programmer who has a real passion for the industry. I have always been rather objective and logical and prior to programming professionally I wrote code as a hobby for many years.<br></br>My journey with programming goes all the way back to when I was in 5th grade. I had begun dabbling in the basics of Ruby to make games using a software called "RPG Maker". I worked my way into Python from there, and everything seemed to grow from that. Python, C++, C#, Bash; I found myself stockpiling skills for pretty much nothing but hobbies. Then, near the end of highschool Covid came around and we were all in quarantine. That turned me onto social media which I had never been very active in. It was there I heard that I could create chat bots using Javascript, so I taught myself that and started making bots on Discord, a text based social media platform.</p>
                    </div>
                </section>
            </div>
            <p>Not long after I started creating bots I started doing freelance bot development. The most difficult part of that was getting clients, I had to do a lot of networking and getting myself out there, but it soon became pretty successful, at least for a high-schooler who didn't have to pay rent. After highschool I headed off to college but quickly realized that it was not for me. I looked into alternative education tracks and I soon found myself in a coding boot camp program at the University of Denver. It was extremely fast paced, but I was very interested in the topic and was determined to learn and I excelled. Learning advanced coding in an official, flushed out capacity was a game changer as I had, up until that point been a completely self-taught programmer. Once I had graduated I began doing freelance web development with a focus on front-end. During this time I fell into the niche of creating static portfolio sites for artists. These sites were primarily developed using the React.js framework which I had taken a liking to. One time after delivering one of these React portfolios the client asked if I was looking for work as she knew a friend who had a company that was looking for React developers. A few interviews after that and I was brought on as an intern at Verkrea, a company in Germany focused on developing a platform to better connect artists and other freelancers with their clients.</p>
            <p>The internship at Verkrea has been going phenomenally. The company is in the midst of converting an HTML and python (flask) based site to the MERN stack. During this process I primarily worked on bringing the HTML and JavaScript front-end into React. As we near the end of the conversion process I have begun to work on creating brand new React pages based on wireframes directly from the designers.</p>
            <br></br>
            <h3>My Specialties</h3>
            <p>In terms of programming languages I have a high proficiency in the front-end development languages; <b>JavaScript</b>, <b>HTML</b>, and <b>CSS</b> with an expertise using the <b>React</b> framework in particular. My CSS knowledge is especially extensive, having created my own CSS framework with the intention of completely flushing out my CSS knowledge. While I am not as experienced with the back-end I know my way around <b>SQL</b> and its ORM, <b>Sequelize</b> in addition to the main libraries for <b>GraphQL</b> and <b>MongoDB</b>. I have a very solid understanding of the fundamentals of <b>Python</b>, having been flushed out as the first full language I learned. Finally, I am also familiar with both <b>C#</b> and <b>C++</b>. I have used these two languages in a limited capacity when dabbling with things such as game development and robotics and I would consider myself as having at least a basic understanding of them.</p>
            <p>I am familiar with a wide variety of technology and tools used in the industry. As mentioned earlier I am especially skilled with <b>React</b>, but as my strongest language I have used a myriad of other javascript libraries; including <b>Next.js</b>, <b>Electron.js</b>, <b>Jest</b>, and <b>Jquery</b>. I have also recently started several online courses on <b>AWS</b> and devOps related tools such as <b>Docker</b>, <b>Kubernetes</b>, and <b>Ansible</b>. I have also lightly dabbled in <b>React Native</b> for work on mobile apps and <b>Unreal</b> and <b>Unity</b> engines for game development.<br></br>Regarding more general skills I pride myself on being flexible, someone who adapts quickly to any situation or problem. I am a quick learner that can pick up things pretty much on the fly which has allowed me to have a very diverse skill set.</p>
        </main>
    );
}
