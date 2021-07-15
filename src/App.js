import Register from './containers/register'
import { Provider } from 'react-redux';
import reducer from './reducers';
import { createStore } from 'redux';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Register></Register>
    </Provider>
  );
}

export default App;
