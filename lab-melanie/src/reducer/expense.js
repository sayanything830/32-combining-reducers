let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;
  let changedState, categoryId, categoryExpenses, updatedExpenses;

  switch(type) {
  case 'CATEGORY_CREATE': return {...state, [payload._id]: []};
  case 'CATEGORY_DELETE':
    changedState = {...state};
    delete changedState[payload._id];
    return changedState;
  case 'EXPENSE_CREATE':
    categoryId = payload.categoryId;
    categoryExpenses = state[categoryId];
    updatedExpenses = [...categoryExpenses, payload];
    return {...state, [categoryId]: updatedExpenses};;
  case 'EXPENSE_UPDATE':
    categoryId = payload.categoryId;
    categoryExpenses = state[categoryId];
    updatedExpenses = categoryExpenses.map(expense => expense._id === payload._id ? payload : expense);
    return {...state, [categoryId]: updatedExpenses};;
  case 'EXPENSE_DELETE':
    categoryId = payload.categoryId;
    categoryExpenses = state[categoryId];
    updatedExpenses = categoryExpenses.filter(expense => expense._id !== payload._id);
    return {...state, [categoryID]: updatedExpenses};;
  case 'EXPENSE_RESET': return initialState;
  default: return state;
  }
};
