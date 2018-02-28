import * as actions from '../action/expense-action';

describe('Expense Actions', function() {
  it('should create an action to add an expense', () => {
    let expense = {name: 'milk'};
    let action = actions.expenseCreate(expense);

    expect(action.type).toEqual('EXPENSE_CREATE');
    expect(action.payload).toHaveProperty('_id');
    expect(action.payload).toHaveProperty('timestamp');
  });
});
