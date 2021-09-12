import Register from './containers/register'
import Login from './containers/login'
import ResetPassword from './containers/resetPassword';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { createStore } from 'redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoggedInArea from './containers/LoggedInArea';
import CustomRoute from './components/CustomRoute'

const store = createStore(reducer);

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <CustomRoute path="/register" component={Register} exact>
          </CustomRoute>
          <CustomRoute path="/login" component={Login} exact>
          </CustomRoute>
          <CustomRoute path="/reset" exact>
            <ResetPassword></ResetPassword>
          </CustomRoute>
          <CustomRoute path="/" type="private" component={LoggedInArea}></CustomRoute>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
