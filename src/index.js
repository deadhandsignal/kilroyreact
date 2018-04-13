

import React from 'react';
import ReactDOM from 'react-dom';
import './components/main_body.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainBody from './components/main_body.js';
import MapHomeless from './components/MapHomeless.js';

class App extends React.Component {
  render() {
    return (

      <Router>
        <div>
          <Route exact path="/" component={MainBody}/>
          <Route path="/maphomeless" component={MapHomeless}/>
        </div>
      </Router>

    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
