import React from 'react'
import { Navigation } from './components/Navigation';
import { Informative } from './pages/Informative';
import { Introduction } from './pages/Introduction';
import './style/main.scss'

function App() {
  return (
    <>
        <Navigation/>
        <Introduction/>
        <Informative/>
    </>
  );
}

export default App;