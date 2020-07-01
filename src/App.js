import React from 'react';
import { Button } from '@rmwc/button';
import logo from './logo.svg';
import './App.css';

import '@rmwc/button/styles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button raised label="Press" />
      </header>
    </div>
  );
}

export default App;
