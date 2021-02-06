import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Splash from '../src/components/Splash/Splash';
import ProjectPage from '../src/components/Projects/ProjectPage';
import PCBuildingPage from '../src/components/OtherPassions/PCBuildingPage.js';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <Router>
        <Switch>
          <Route path ='/'><Splash /></Route>
          <Route path ='/Projects'><ProjectPage /></Route>
          <Route path ='/OtherPassions'><PCBuildingPage /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
