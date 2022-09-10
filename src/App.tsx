import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { MainView } from './views/MainView';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path={'/'} element={<MainView />} />
      </Routes>
    </div>
  );
}

export default App;
