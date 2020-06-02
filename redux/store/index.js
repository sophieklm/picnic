import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { checkMiddleware } from '../middleware/index';
import thunk from 'redux-thunk';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(checkMiddleware, thunk)),
);

export default store;
