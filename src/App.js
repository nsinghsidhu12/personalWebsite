import './App.css';
import { useState } from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className="App">
      <Header onToggle={onToggle} active={toggle}/>
      <Hero/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
