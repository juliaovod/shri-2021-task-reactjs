import React from 'react';

import { Route, Switch } from 'react-router-dom';

import RoutePaths from '@/router/paths';
import Settings from '@/pages/Settings';

const App: React.FC = () => (
  <Switch>
    <Route
      component={Settings}
      path={RoutePaths.SETTINGS.PATH}
    />

    <Route>App</Route>
  </Switch>
);

export default App;
