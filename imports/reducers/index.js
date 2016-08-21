import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import questions from './questions';

const rootReducer = combineReducers({
  questions,
  routing: routerReducer,
});

export default rootReducer;
