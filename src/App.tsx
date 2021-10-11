import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import History from '@/pages/History';
import RoutePaths from '@/router/paths';
import Settings from '@/pages/Settings';
import Start from '@/pages/Start';
import { connectSettingsSelector } from '@/selectors/connect-settings';

const App: React.FC = () => {
  const connectSettings = useSelector(connectSettingsSelector);

  return (
    <Switch>
      <Route
        exact
        path={RoutePaths.INDEX.PATH}
        render={() => {
          if (connectSettings) {
            return <History />;
          }
          return <Start />;
        }}
      />

      <Route
        exact
        path={RoutePaths.SETTINGS.PATH}
        render={() => <Settings />}
      />

      <Route>404 Page not found</Route>
    </Switch>
  );
};

export default App;
