import './App.css';
import { useDirectory } from './utils/DirectoryContext';
import Header from './components/Header';
import Footer from './components/Footer';

import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';



function App() {

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
      <Header />
      {renderPage()}
      <Footer />
    </>
  );
}

export default App;
