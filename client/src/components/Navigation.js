import React from 'react';
// Import our custom hook.
import { useDirectory } from '../utils/DirectoryContext';
import { NavLink } from "react-router-dom";

// Make our ThemeComponent the default export from this file
export default function Navigation() {
  // Pluck values from our ThemeContext by invoking our useDirectory hook
  const { directories } = useDirectory();

  // <div key={directory} className={currentDirectory === directory ? 'tab selected' : 'tab'} onClick={() => changeDirectory(`${directory}`)}>
  //         {directory}
  //       </div>
  return (
    <>
      {directories.map((directory, index) => (
        <div key={index} className='tab'>
          <NavLink to={`/Portfolio-Kyle-Lucas/${directory}`}>{directory}</NavLink>
        </div>
      ))}
    </>
  );
}
