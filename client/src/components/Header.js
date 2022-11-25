import React from 'react';
import Navigation from './navigation';

export default function Header(directory) {

  return (
      <header className={directory == 'Home'? 'banner': 'navbar'}>
        <div >
          <h1>Kyle Lucas</h1>
          <div>Web Developer</div>
        </div>
        <Navigation />
      </header>
  );
}
