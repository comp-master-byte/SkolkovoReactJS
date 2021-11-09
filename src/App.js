import React from 'react'
import { Navigation } from './components/Navigation';
import { Informative } from './pages/Informative';
import { Introduction } from './pages/Introduction';
import { Reviews } from './pages/Reviews';
import { Team } from './pages/Team';
import { Footer } from './components/Footer';
import './style/main.scss'

function App() {
  return (
    <div className="main">
        <Navigation/>
          <Introduction/>
          <Informative/>
          <Reviews/>
          <Team/>
        <Footer/>
    </div>
  );
}

export default App;