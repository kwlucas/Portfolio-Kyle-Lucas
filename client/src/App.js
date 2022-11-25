import React from 'react';
import './App.css';
import { DirectoryProvider } from './utils/DirectoryContext';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';



function App() {
  return (
    <DirectoryProvider>
      <Header />
      <Content />
      <Footer />
    </DirectoryProvider>
  );
}

export default App;
