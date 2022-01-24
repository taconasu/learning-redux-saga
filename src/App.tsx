import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppProps } from './adapters/appAdapter';

export const App: React.FC<AppProps> = ({
  user: { data },
  initialize,
}) => {
  useEffect(() => {
    // adapterで定義した初期化関数を実行
    initialize()
  }, [initialize])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { data.name && <h2>Hello, {data.name}!!</h2> }
      </header>
    </div>
  );
}
