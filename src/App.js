import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BottomBar from './components/Bottombar';
import NavbarMobile from './components/NavbarMobile';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Le contenu de votre application irait ici */}
      <NavbarMobile/>
      <BottomBar />
    </div>
  );
}

export default App;
