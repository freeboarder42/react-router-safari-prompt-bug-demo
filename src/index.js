
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import router from './router';
import * as serviceWorker from './serviceWorker';
import Home from './Home';
import ComponentWithHistoryBlock from './ComponentWithHistoryBlock';

const container = document.getElementById('root');

const history = createBrowserHistory();

const routes = [
   { path: '/', action: () => <Home history={history} /> },
   { path: '/pageWithHistoryBlock', action: () => <ComponentWithHistoryBlock history={history} /> }
];

function renderComponent(component) {
   ReactDOM.render(component, container);
}

function render(location) {
   const component = router.resolve(routes, location);
   renderComponent(component);
}

render(history.location); // Render the current URL

// Listen to history changes by re-rendering
history.listen(render);  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
