import React from 'react';
// Import our custom hook.
import { useDirectory } from '../utils/DirectoryContext';

// Make our ThemeComponent the default export from this file
export default function Navigation() {
  // Pluck values from our ThemeContext by invoking our useDirectory hook
  const { currentDirectory, changeDirectory, directories } = useDirectory();

  return (
    <>
      {directories.map((directory) => (
        <div key={directory} className={currentDirectory === directory ? 'tab selected' : 'tab'} onClick={() => changeDirectory(`${directory}`)}>
          {directory}
        </div>
      ))}
    </>
  );
}
