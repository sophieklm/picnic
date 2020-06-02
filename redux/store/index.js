import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { checkMiddleware } from '../middleware/index';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(checkMiddleware)),
);

export default store;
