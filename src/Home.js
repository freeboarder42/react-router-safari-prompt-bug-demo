
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

class Home extends Component {
   render() {
      return (
         <div>
            <h1>Home</h1>
            <div>When running the app in Safari (iOS), goto the <NavLink to="/pageWithHistoryBlock">component with history.block</NavLink>, and then 
                 try to get back using the browser's back button first (and after this even by the Home link).</div>
            <div style={{marginTop: 10}}>On iOS (12, and probably in Safari on MacOS) the Prompt component does not display a prompt 
                 and prevents the browser to go back. Additionally, after this, history.block even prevents the router link to work.</div>
         </div>
      );
   }
}

export default Home;
