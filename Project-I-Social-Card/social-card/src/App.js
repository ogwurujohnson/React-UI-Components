import React from 'react';
import './App.css';

// components
import Header from './components/HeaderComponents/HeaderContainer';
import Card from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className="App">
      <div className="mainContainer">
        <Header />
        <Card />
        <Footer />
      </div>
    </div>
  );
};

export default App;
