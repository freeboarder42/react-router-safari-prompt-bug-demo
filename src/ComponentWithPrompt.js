import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Prompt } from 'react-router';
import './App.css';

class ComponentWithPrompt extends Component {
   render() {
      return (
         <div>
            <h1>Component with a Prompt</h1>
            <div>If you came here in Safari on iOS via the Home component, try to use the browser's back button to go back to <NavLink to="/">Home</NavLink>.</div>
            <div style={{marginTop: 10}}>The <NavLink to="/">Home</NavLink> link works, but only if the browser's back button was not clicked before. 
                 If the browser's back button was clicked before, even the <NavLink to="/">Home</NavLink> link does not work anymore.</div>
            <Prompt
               when={true}
               message="Really navigate away?" />            
         </div>
      );
   }
}

export default ComponentWithPrompt;
