
import React, { Component } from 'react';
import './App.css';

class Home extends Component {
   gotoPageWithHistoryBlock() {
      this.props.history.push('/pageWithHistoryBlock');
   }

   render() {
      return (
         <div>
            <h1>Home</h1>
            <div>When running the app in Safari (iOS), goto the <button className="link" onClick={() => this.gotoPageWithHistoryBlock()}>component with history.block</button>, and then
                 try to get back using the browser's back button first (and after this even by the Home link).</div>
            <div style={{ marginTop: 10 }}>On iOS (12, and probably also in Safari on MacOS) history.block does not display a prompt
                 and prevents the browser to go back. Additionally, after this, history.block even prevents the router link to work.</div>
         </div>
      );
   }
}

export default Home;
