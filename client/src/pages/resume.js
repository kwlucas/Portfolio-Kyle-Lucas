import React from 'react';
import resume from '../media/KyleLucasResume.pdf';

export default function Resume() {

  return (
    <main>
        <h2>Resume</h2>
        <div>
            <p><a href={resume} target='_blank'>Download</a> my resume!</p>
            <iframe src={resume} title='My resume!'></iframe>
        </div>
    </main>
  );
}
