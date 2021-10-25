import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import { AuthProvider } from './provider/auth';
import { Routes } from './Routes'

require('dotenv').config()

ReactDOM.render(
  <AuthProvider>
    <Routes />
  </AuthProvider>,
  document.getElementById('root')
);