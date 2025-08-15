import { Routes, Route } from 'react-router';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './index.css'
import About from './components/About';
import Details from './components/Details';

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Details/>
    </>
  )
}

export default App;
