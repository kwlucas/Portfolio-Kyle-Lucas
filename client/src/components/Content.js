import React from 'react';
import { useDirectory } from '../utils/DirectoryContext';

import About from '../pages/about';
import Contact from '../pages/contact';
import Portfolio from '../pages/portfolio';
import Resume from '../pages/resume';

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
