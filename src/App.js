import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './pages/About';
import PortfolioContainer from './containers/PortfolioContainer/PortfolioContainer'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path='/' component={About} />
        <Route exact path='/about' component={About} />
        <Route exact path='/portfolio' component={PortfolioContainer} />
      </div>
    </Router>
  );
}

export default App;
