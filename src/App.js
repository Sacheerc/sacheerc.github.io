import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import { ThemeContext } from './contexts/ThemeContext';

const App = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <>
      <div className='container'>
        <NavBar />
        <Routes>
          <>
            <Route exact path='/' element={<Home theme={theme} />} />
            <Route path='/contact' element={<Contact />} />
          </>
        </Routes>
      </div>
      <Footer theme={theme} />
    </>
  );
};

export default App;
