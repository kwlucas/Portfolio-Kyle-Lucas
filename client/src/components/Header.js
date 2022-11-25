import React from 'react';
import { useDirectory } from '../utils/DirectoryContext';
import Navigation from './navigation';

export default function Header() {

  const { currentDirectory, changeDirectory } = useDirectory();

  function nameClick() {
    if(currentDirectory != 'Home'){
      changeDirectory('Home');
    }
  }

  return (
      <header className={currentDirectory == 'Home'? 'banner': 'navbar'}>
        <div >
          <h1 onClick={nameClick}>Kyle Lucas</h1>
          <div>Web Developer</div>
        </div>
        <Navigation />
      </header>
  );
}
