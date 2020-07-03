import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import ROUTES from './routes';

function App() {
  return (
    <Router>
      <Layout routes={ROUTES}>
        <Switch>
          {ROUTES.map((route) => (
            <Route exact={route.exact} path={route.path}>
              {route.content}
            </Route>
          ))}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
