import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import CreateSportForm from './components/CreateSportForm';
import Sport from './components/Sport';
import React from "react";
import CustomersList from './components/CustomersList';
import Customers from './components/Customers';

function App() {

  return (
    <div className="App">
      {/* <Sport></Sport> */}
      {/* <CustomersList/> */}
      <Customers/>
    </div>
  );
}

export default App;
