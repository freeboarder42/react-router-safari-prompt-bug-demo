import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import ComponentWithPrompt from './ComponentWithPrompt';
import './App.css';

class App extends Component {
   render() {
      return (
         <Router>
            <div className="container">
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/pageWithPrompt" component={ComponentWithPrompt} />
               </Switch>
            </div>
         </Router>
      );
   }
}

export default App;
