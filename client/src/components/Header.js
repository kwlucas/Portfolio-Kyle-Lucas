import React, { useEffect, useState } from 'react';
import { useDirectory } from '../utils/DirectoryContext';
import Navigation from './Navigation';
import anime from 'animejs';

export default function Header() {

  const { currentDirectory, changeDirectory } = useDirectory();
  const [size, setSize] = useState({
    width: document.body.clientWidth,
    height: document.body.clientHeight
  });
  const [waveCount, setWaveCount] = useState(0);


  const colors = [
    "rgb(42, 51, 84, 1.0)",
    "rgb(42, 51, 84, 0.0)",
    "rgb(35, 51, 71, 0.0)"
  ]

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

  const handleMouseEnter = async (event) => {
    //console.log('Mouse Enter Tile');
    const index = [...event.target.parentElement.children].indexOf(event.target);
    let columns = Math.floor(size.width / 50);
    let rows = Math.floor(size.height / 50);
    console.log(waveCount % (colors.length));
    anime.timeline({
      targets: '.tile',
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index
      })
    }).add({
      backgroundColor: colors[waveCount % (colors.length)],
    })
    setWaveCount(waveCount + 1);
  }

  function calculateTiles() {
    let columns = Math.floor(size.width / 50);
    let rows = Math.floor(size.height / 50);
    document.documentElement.style.setProperty('--columns', columns);
    document.documentElement.style.setProperty('--rows', rows);
    return rows * columns;
  }

  const createTiles = Array.from({ length: calculateTiles() }, (_, index) => {
    return <div key={index} className='tile' onClick={handleMouseEnter}></div>;
  });

  function nameClick() {
    if (currentDirectory !== 'Home') {
      changeDirectory('Home');
    }
  }

  return (
    <header className={currentDirectory === 'Home' ? 'banner' : 'navbar'}>
      {currentDirectory === 'Home' ? <div id='bannerGrid'>{createTiles}</div> : <></>}
      <div id='nameDisplay'>
        <h1 onClick={nameClick}>Kyle Lucas</h1>
        <div>Web Developer</div>
      </div>
      {currentDirectory === 'Home' ? <nav><Navigation /></nav> : <Navigation />}
    </header>
  );
}
