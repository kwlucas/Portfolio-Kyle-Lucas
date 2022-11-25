import React from 'react';
import { useDirectory } from '../utils/DirectoryContext';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';

export default function Content() {

    const { currentDirectory } = useDirectory();

    const renderPage = () => {
        if (currentDirectory === 'About') {
            return <About />;
        }
        if (currentDirectory === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentDirectory === 'Contact') {
            return <Contact />;
        }
        if (currentDirectory === 'Resume') {
            return <Resume />;
        }
    };

    return (
        <>
        {renderPage()}
        </>
    );
}
