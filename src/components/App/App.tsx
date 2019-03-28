import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from '../../store';

// components
import { LoginContainer } from '../../containers/LoginContainer';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={LoginContainer} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
