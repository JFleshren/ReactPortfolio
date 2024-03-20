import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header'; 
import { Footer } from './components/Footer';
import { AboutMe } from './components/AbooutMe';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Resume } from './components/Resume';
import reactLogo from './assets/react.svg';
import viteLogo from '../public/vite.svg';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/components/AboutMe" component={AboutMe} />
            <Route path="/components/Portfolio" component={Portfolio} />
            <Route path="/components/Contact" component={Contact} />
            <Route path="/components/Resume" component={Resume} />
          </Switch>
          <>
            <div>
              <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
          </>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
