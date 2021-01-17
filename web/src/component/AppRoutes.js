import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DisplayRepo } from './DisplayRepo';
import { ShowRepo } from './ShowRepo';

class AppRoutes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route
          render={() => (
            <Switch>
              <Route exact={true} path="/" component={ShowRepo} />
              <Route exact={true} path="/display" component={DisplayRepo} />
            </Switch>
          )}
        />
      </BrowserRouter>
    );
  }
}
export { AppRoutes };
