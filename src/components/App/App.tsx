import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from '../../store';

// components
import { HomeAutnContainer } from '../../containers/authenticatedContainer';
import { LoginNotAuthContainer } from '../../containers/notAuthenticatedContainer';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={HomeAutnContainer} />
            <Route path="/login" component={LoginNotAuthContainer} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
