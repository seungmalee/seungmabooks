import './App.css';
import React from 'react';
import Searchbar from './Component/Searchbar';
import { Route, Routes } from 'react-router-dom';
import Books from './Component/Books';
import Main from './Component/Main';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/search/' element={<Searchbar/>}/>
      <Route path='/search/*' element={<Books/>}/>
    </Routes>
  );
}

export default App;
