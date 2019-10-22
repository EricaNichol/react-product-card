import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import Carousel from './components/Carousel';
import './App.css';
import './mySass.scss';

function App() {
  return (
     <BrowserRouter>
        <div className="App">
          <Navbar/>
          <ProductDetail />
          <Carousel />

         </div>
      </BrowserRouter>
  );
}

export default App;
