import Register from './containers/register'
import Login from './containers/login'
import { Provider } from 'react-redux';
import reducer from './reducers';
import { createStore } from 'redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const store = createStore(reducer);

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route path="/register" exact>
            <Register></Register>
          </Route>
          <Route path="/login" exact>
            <Login></Login>
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
