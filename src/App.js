import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';

const App = () => {
  return (
    <div className='container'>
      <NavBar />
      <Routes>
        <>
          <Route exact path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </>
      </Routes>
      {/* <Home /> */}
    </div>
  );
};

export default App;
