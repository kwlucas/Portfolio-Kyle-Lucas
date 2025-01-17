import React, { useEffect, useState } from 'react';
import { useDirectory } from '../utils/DirectoryContext';
// import { useLocation, NavLink } from 'react-router-dom';
import Navigation from './Navigation';
// import anime from 'animejs';

export default function Header() {

  const { currentDirectory, changeDirectory } = useDirectory();
  // const currentDirectory = useLocation().pathname;
  /* const [size, setSize] = useState({
    width: document.body.clientWidth,
    height: document.body.clientHeight
  });
  const [waveCount, setWaveCount] = useState(0);


  const colors = [
    // "rgb(42, 51, 84, 1.0)",
    "rgb(35, 51, 71, 1.0)",
    "rgb(42, 51, 84, 0.0)",
    // "rgb(35, 51, 71, 1.0)"
  ]

  const handleResize = () => {
    setSize({
      width: document.body.clientWidth,
      height: document.body.clientHeight
    });
    calculateTiles();
  }
  useEffect(() => {
    //console.log('Used Effect');
    handleResize();
  }, []);

  window.addEventListener('resize', handleResize);

  const handleMouseEnter = async (event) => {
    //console.log('Mouse Enter Tile');
    const index = [...event.target.parentElement.children].indexOf(event.target);
    let columns = Math.floor(size.width / 30);
    let rows = Math.floor(size.height / 30);
    console.log(waveCount % (colors.length));
    anime.timeline({
      targets: '.tile',
      delay: anime.stagger(30, {
        grid: [columns, rows],
        from: index
      })
    }).add({
      backgroundColor: colors[waveCount % (colors.length)],
    })
    setWaveCount(waveCount + 1);
  }

  function calculateTiles() {
    let columns = Math.floor(size.width / 30);
    let rows = Math.floor(size.height / 30);
    document.documentElement.style.setProperty('--columns', columns);
    document.documentElement.style.setProperty('--rows', rows);
    return rows * columns;
  }

  const createTiles = Array.from({ length: calculateTiles() }, (_, index) => {
    return <div key={index} className='tile' onClick={handleMouseEnter}></div>;
  }); */

  const [mousePos, setMousePos] = useState({
    X: 0,
    Y: 0
  });

  useEffect(() => {
    (document.querySelectorAll('#nameDisplay') || []).forEach(display => {
      const rect = display.getBoundingClientRect();
      display.style.setProperty('--mouseX', `${mousePos.X - rect.left}px`);
      display.style.setProperty('--mouseY', `${mousePos.Y - rect.top}px`);

    });
  })

  function handleMouseMove(event) {
    setMousePos({
      X: event.clientX,
      Y: event.clientY
    });
  }

  function nameClick() {
    if (currentDirectory !== 'Home') {
      changeDirectory('Home');
    }
  }

  // <h1><NavLink to='/Portfolio-Kyle-Lucas/'>Kyle Lucas</NavLink></h1>      
  // {currentDirectory === '/' || currentDirectory === '/Portfolio-Kyle-Lucas/' ? <nav><Navigation /></nav> : <Navigation />}
  return (
    <header className={currentDirectory === 'Home' ? 'banner' : 'navbar'} onMouseMove={handleMouseMove}>
      {/* currentDirectory === 'Home' ? <div id='bannerGrid'>{createTiles}</div> : <></> */}
      <div id='nameDisplay'>
        <h1 onClick={nameClick}>Kyle Lucas</h1>
        <div>Web Developer</div>
      </div>
      {currentDirectory === 'Home' ? <nav><Navigation /></nav> : <Navigation />}
    </header>
  );
}
