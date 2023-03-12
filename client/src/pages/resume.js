import React from 'react';
import resume from '../media/Kyle_Lucas_Resume2023.pdf';

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
