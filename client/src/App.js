import './App.css';
import { useDirectory } from './utils/DirectoryContext';
import Header from './components/Header';
import Footer from './components/Footer';

import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';



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
