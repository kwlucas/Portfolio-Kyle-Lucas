import React, { useEffect, useState } from 'react';
import { useDirectory } from '../utils/DirectoryContext';
import Navigation from './Navigation';

export default function Header() {

  const { currentDirectory, changeDirectory } = useDirectory();
  const [size, setSize] = useState({
    width: document.body.clientWidth,
    height: document.body.clientHeight
  });

  const handleResize = () => {
    setSize({
      width: document.body.clientWidth,
      height: document.body.clientHeight
    });
    calculateTiles();
  }
  useEffect(() => {
    console.log('Used Effect');
    //document.querySelector('#bannerGrid').addEventListener('mouseover', handleMouseEnter)
    handleResize();
  }, []);

  window.addEventListener('resize', handleResize);

  const handleMouseEnter = (event) => {
    console.log('Mouse Enter Tile');
    //event.target.style.color = "orange";
  }

  function calculateTiles() {
    let columns = Math.floor(size.width / 30);
    let rows = Math.floor(size.height / 30);
    document.documentElement.style.setProperty('--columns', columns);
    document.documentElement.style.setProperty('--rows', rows);
    return rows * columns;
  }

  const createTiles = Array.from({length: calculateTiles()}, (_, index) => {
    return <div key={index} className='tile' onMouseEnter={handleMouseEnter}></div>;
  });

  function nameClick() {
    if(currentDirectory !== 'Home'){
      changeDirectory('Home');
    }
  }

  return (
      <header className={currentDirectory === 'Home'? 'banner': 'navbar'}>
        {currentDirectory === 'Home'? <div id='bannerGrid'>{createTiles}</div>:<></>}
        <div id='nameDisplay'>
          <h1 onClick={nameClick}>Kyle Lucas</h1>
          <div>Web Developer</div>
        </div>
        {currentDirectory === 'Home'? <nav><Navigation /></nav>: <Navigation />}
      </header>
  );
}
