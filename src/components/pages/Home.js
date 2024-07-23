import React from "react";

const Home = () => {
    return (
        <div className="home-container">
          <header className="home-header">
            <img src="/logo.png" className="home-logo" alt="logo" style ={{height: 80}}/> 
            <nav className="home-nav">
              <button className="nav-button active">Home</button>
              <button className="nav-button">Recettes</button>
              <button className="nav-button">Cours de cuisine</button>
              <button className="nav-button">A propos</button>
              <button className="nav-button">Nous contacter</button>
            </nav>
          </header>
          <div className="search-bar">
            <input type="text" placeholder="Rechercher" />
          </div>
        </div>
      );
};

export default Home;