import React from 'react';
import ReactDOM from 'react-dom';
// import our custom css (Currently not in use)
//import './index.css';

// import the app
import App from './App';

// this code loads what App returns in the index.html "root" div
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
