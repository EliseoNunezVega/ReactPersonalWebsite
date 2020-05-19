import React from 'react';
import NavBar from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import SurveyPage from './Survey'


function App() {
  return (
      <Router>
          <NavBar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/survey" component={SurveyPage}/>
          </Switch>
      </Router>
  );
}

export default App;
