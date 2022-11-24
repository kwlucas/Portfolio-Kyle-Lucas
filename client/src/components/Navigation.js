import React from 'react';
// Import our custom hook.
import { useDirectory } from '../utils/DirectoryContext';

// Make our ThemeComponent the default export from this file
export default function Navigation() {
  // Pluck values from our ThemeContext by invoking our useDirectory hook
  const { currentDirectory, setCurrentDirectory, directories } = useDirectory();

  // Object containing CSS gradient for darkTheme and non-darkTheme
  /* const themeStyles = {
    background: darkTheme
      ? '-webkit-linear-gradient(top left, #150C17, #535353)'
      : '-webkit-linear-gradient(bottom, #FFFFFF, #EDBAAB)',
    padding: '10rem',
    margin: '10rem',
    borderRadius: '30px',
    color: darkTheme ? '#FAFAFA' : '#363537',
  }; */

  return (
    <>
      <navbar>
        {directories.map((directory) => (
          <a className={currentDirectory == directory ? 'selected' : ''}>
            <h3 key={directory}>{directory}</h3>
          </a>
        ))}
      </navbar>
      {(currentDirectory == 'About Me') ? (
        <div></div>
      ) : (
        <div></div>
      )}
    </>
  );
}
