import * as actions from '../action/category-action';

describe('Category Actions', function() {
  it('should create an action to add a category', () => {
    let category = {name: 'hello'};
    let action = actions.categoryCreate(category);

    expect(action.type).toEqual('CATEGORY_CREATE');
    expect(action.payload).toHaveProperty('_id');
    expect(action.payload).toHaveProperty('timestamp');
  });
});
