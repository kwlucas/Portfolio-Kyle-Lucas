import React from 'react';
import './App.css';
import { DirectoryProvider } from './utils/DirectoryContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
// import Content from './components/Content';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';



function App() {
  return (
    <Router>
      <DirectoryProvider>
        <Header />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        <Footer />
      </DirectoryProvider>
    </Router>
  );
}

export default App;
