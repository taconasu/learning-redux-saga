import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppProps } from './adapters/appAdapters';

export const App: React.FC<AppProps> = (props) => {
  // Redux storeが見れるはず
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
