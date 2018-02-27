import reducer from '../reducer/category';
require('jest');

describe('Category Reducer', function() {
  it('should return the initial state on first call', () => {
    expect(reducer([], {})).toEqual([]);
  });
  it('should handle CATEGORY_CREATE', () => {
    let categoryOne = {_id: '1234', name: 'hello', timestamp: new Date()};
    let categoryTwo = {_id: '5678', name: 'hi', timestamp: new Date()};

    let state = reducer([categoryOne], {
      type: 'CATEGORY_CREATE',
      payload: categoryTwo,
    });
    expect(state).toContain(categoryOne);
    expect(state).toContain(categoryTwo);
  });
});
