import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'lightslider/dist/css/lightslider.css';
import 'lightslider/dist/js/lightslider.js';
import './App.scss';
import Navbar from './componets/Navbar';
import Header from './componets/Header';
import Floors from './componets/Floors';
import Property from './componets/Property';
import Footer from './componets/Footer';

function App() {
  return (
    <div className="App" data-spy="scroll" data-target="#navbar-spy" data-offset="0">
     <Navbar />      
     <Header />
     <Floors />
     <Property />
     <Footer />
    </div>
  );
}

export default App;
