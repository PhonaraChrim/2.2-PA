import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css'; 

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home': 
        return <Home />;
      case 'About': 
        return <About />;
      case 'Contact': 
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <h1>Walmart</h1>
        </div>
      </header>
  
      <nav className="navbar">
        <ul>
          <li onClick={() => setCurrentPage('Home')}>Home</li>
          <li onClick={() => setCurrentPage('About')}>About</li>
          <li onClick={() => setCurrentPage('Contact')}>Contact</li>
        </ul>
      </nav>
  
      <div className="mainContainer">
        {renderPage()} 
      </div>

      <div className="mainContainer">
        <div className="itemContainer">
          <img src="images/battery-19983_1280.jpg" alt = "img1"/>
          <h2>Item 1</h2>
          <p>Great items</p>
        </div>
        <div className="itemContainer">
        <img src="images/boot-250012_1280.jpg" alt = "img2"/>
          <h2>Item 2</h2>
          <p>Great prices</p>
        </div>
        <div className="itemContainer">
        <img src="images/vegetables-1584999_1280.jpg" alt = "img3"/>
          <h2>Item 3</h2>
          <p>Great everything</p>
        </div>
      </div>

    </div>
  );
};

export default App;