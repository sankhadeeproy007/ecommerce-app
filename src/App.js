import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route path="/about">About</Route>
          <Route path="/dashboard">Dashboard</Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
