import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header.jsx'; 
import { Footer } from './components/Footer.jsx';
import { AboutMe } from './components/AboutMe.jsx';
import { Portfolio } from './components/Portfolio.jsx';
import { Contact } from './components/Contact.jsx';
import { Resume } from './components/Resume.jsx';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/AboutMe" component={AboutMe} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Resume" component={Resume} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
