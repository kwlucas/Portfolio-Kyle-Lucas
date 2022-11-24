import React, { useState, useContext, createContext } from 'react';

// Create our theme context using React.CreateContext()
export const DirectoryContext = createContext();

// Create a custom hook that allows easy access to our DirectoryContext values
export const useDirectory = () => useContext(DirectoryContext);

// Creating our theme provider. Accepts an argument of "props", here we plucking off the "children" object.
export default function DirectoryProvider({ children }) {
  // Creating our state
  const [currentDirectory, setDirectory] = useState('');

  // Method to update our state
  const changeDirectory = (directory) => {
    console.log('inside directory change');
    return setDirectory(directory);
  };

  // The provider component will wrap all other components inside of it that need access to our global state
  return (
    // Dark theme and toggle theme are getting provided to the child components
    <DirectoryContext.Provider value={{ currentDirectory, changeDirectory }}>
      {children}
    </DirectoryContext.Provider>
  );
}
