import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from '../../store';

// components
import { AuthHomeContainer } from '../../containers/authContainer';
import { NotAuthLoginContainer } from '../../containers/notAuthContainer';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={AuthHomeContainer} />
            <Route
              exact={true}
              path="/login"
              component={NotAuthLoginContainer}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
