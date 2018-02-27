import expenseReducer from './expense';
import categoryReducer from './category';
import {combineReducers} from 'redux';

export default combineReducers({
  cards: expenseReducer,
  categories: categoryReducer,
});
