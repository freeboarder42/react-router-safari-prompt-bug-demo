import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

class ComponentWithHistoryBlock extends Component {
   constructor(props) {
      super(props);

      const { history } = this.props;
      this.unblock = history.block('Really navigate away?');
   }

   componentWillUnmount() {
      this.unblock();
   }

   render() {
      return (
         <div>
            <h1>Component with history.block</h1>
            <div>If you came here in Safari on iOS via the Home component, try to use the browser's back button to go back to <NavLink to="/">Home</NavLink>.</div>
            <div style={{marginTop: 10}}>The <NavLink to="/">Home</NavLink> link works, but only if the browser's back button was not tapped before. 
                 If the browser's back button was tapped before, even the <NavLink to="/">Home</NavLink> link does not work anymore.</div>
         </div>
      );
   }
}

export default ComponentWithHistoryBlock;
