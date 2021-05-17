import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import Login from './pages/login';
import Dashboard from './pages/dashboard';
import NotFound from './pages/404';
import AdminLayout from './components/Layouts/AdminLayout';
import SecureRoute from './components/SecureRoute';

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <SecureRoute exact path="/admin/dashboard">
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </SecureRoute>

          <Route exact path="/">
            <Redirect to="/login" />
          </Route>

          <Route component={NotFound} />

        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
