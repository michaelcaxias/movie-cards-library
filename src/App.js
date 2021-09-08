import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary />
    </div>
  );
}

export default App;
