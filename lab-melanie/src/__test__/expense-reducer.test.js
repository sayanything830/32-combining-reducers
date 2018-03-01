import reducer from '../reducer/expense';
require('jest');

describe('Expense Reducer', function() {
  it('should return the initial state on first call', () => {
    expect(reducer([], {})).toEqual([]);
  });
});
