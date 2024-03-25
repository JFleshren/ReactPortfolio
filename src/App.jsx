import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Header  from './components/Header'; 
import  Footer  from './components/Footer';
import  AboutMe  from './components/AboutMe';
import  Portfolio  from './components/Portfolio';
import  Contact  from './components/Contact';
import  Resume  from './components/Resume';
import './App.css';

const App = () => {

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main">
            <Routes>
            <Route exact path="/" Component={AboutMe} />
            <Route path="/Portfolio" Component={Portfolio} />
            <Route path="/Contact" Component={Contact} />
            <Route path="/Resume" Component={Resume} />
          </Routes> 
          <>
            
          </>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
