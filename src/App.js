import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/home/home';
import Sobre from './components/about/Sobre';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';


function App() {
  return (
   <>
   <Header/>
   <main className='main'>
    <Home/>
    <Sobre />
    <Skills/>
    <Contact/>
   </main>
   </> 
  )
}

export default App;
