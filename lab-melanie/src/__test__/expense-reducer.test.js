import reducer from '../reducer/expense';
require('jest');

describe('Expense Reducer', function() {
  it('should return the initial state on first call', () => {
    expect(reducer([], {})).toEqual([]);
  });

  // --- Leaving this here for code review -- //
  // ---------------------------------------- //
  // it('should handle EXPENSE_CREATE', () => {
  //   let expenseOne = {_id: '1234', name: 'hello', timestamp: new Date()};
  //   let expenseTwo = {_id: '4567', name: 'hi', timestamp: new Date()};

  //   let state = reducer({expenseOne}, {
  //     type: 'EXPENSE_CREATE',
  //     payload: expenseTwo,
  //   });
  //   expect(state).toContain(expenseOne);
  //   expect(state).toContain(expenseTwo);
  // });
});
