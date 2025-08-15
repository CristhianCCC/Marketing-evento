import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './index.css'
import About from './components/About';
import Details from './components/Details';
import Host from './components/Host';
import Testimonials from './components/Testimonials';
import Ticket from './components/Ticket';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Details/>
      <Host/>
      <Testimonials/>
      <Ticket/>
      <Footer/>
    </>
  )
}

export default App;
