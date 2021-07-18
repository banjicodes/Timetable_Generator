import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Main from './components/Main';
import TimeTable from './components/TimeTable';
import ErrorPage from './components/ErrorPage';

function App() {

  return (
    <Router>
      {/* <Link to="/timetable">File Upload</Link> */}
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/timetable" component={TimeTable}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
