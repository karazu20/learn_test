import React from 'react';
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from './reducers/'
import Test from './components/Test'




// middleware that logs actions
 const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });
//
//
function configureStore() {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware,
    ),
  );
  return createStore(reducer,  enhancer);
}

const store =  configureStore({});

const App = () => (
  <Provider store={store}>
    <Test />
  </Provider>
)

export default App;
