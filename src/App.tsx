import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { hasConnectSettings, getConnectSettings } from 'UiKit/utils/connect-settings';

import History from '@/pages/History';
import RoutePaths from '@/router/paths';
import Settings from '@/pages/Settings';
import Start from '@/pages/Start';

const App: React.FC = () => (
  <Switch>
    <Route
      exact
      path={RoutePaths.INDEX.PATH}
      render={() => {
        if (hasConnectSettings()) {
          const connectionSettings = getConnectSettings();
          return <History connectSettings={connectionSettings} />;
        }
        return <Start />;
      }}
    />

    <Route
      component={Settings}
      exact
      path={RoutePaths.SETTINGS.PATH}
    />

    <Route>404 Page not found</Route>
  </Switch>
);

export default App;
