import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import ComponentWithHistoryBlock from './ComponentWithHistoryBlock';
import './App.css';

class App extends Component {
   render() {
      return (
         <Router>
            <div className="container">
               <Switch>
                  <Route exact path="/" component={Home}  />
                  <Route path="/pageWithHistoryBlock" component={ComponentWithHistoryBlock}/>
               </Switch>
            </div>
         </Router>
      );
   }
}

export default App;
