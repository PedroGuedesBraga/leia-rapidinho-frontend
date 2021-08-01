import Register from './containers/register'
import Login from './containers/login'
import ResetPassword from './containers/resetPassword';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { createStore } from 'redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Menu from './containers/menu'
import PrivateRoute from './components/privateRoute'

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
          <Route path="/reset" exact>
            <ResetPassword></ResetPassword>
          </Route>
          <PrivateRoute path="/menu" component={Menu}></PrivateRoute>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
