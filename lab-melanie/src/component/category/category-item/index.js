import React from 'react';
import {connect} from 'react-redux';
import {categoryUpdate, categoryDelete} from '../../../action/category-action';
import {renderIf} from '../../../lib/utils';
import CategoryForm from '../category-form/index';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category ?
      this.props.category :
      {
        name: '',
        budget: 0,
        editing: false,
      };

    this.handleEditing = this.handleEditing.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEditing(category) {
    this.setState({
      editing: !this.state.editing,
    });
  }

  handleUpdate(category) {
    this.setState({
      editing: !this.state.editing,
    });
    this.props.categoryItemCategoryUpdate(category);
  }

  handleDelete() {
    this.props.categoryItemCategoryDelete(this.state);
  }

  render() {
    return (
      <div className="category-item" key={this.props.category._id} onDoubleClick={this.handleEditing}>
        <h3>{this.props.category.name}</h3>
        <p>Budget: ${this.props.category.budget}</p>
        <button type="button" onClick={this.handleDelete}>{this.props.buttonText}</button>
        {renderIf(this.state.editing, <CategoryForm
          category={this.props.category}
          buttonText="Update"
          onComplete={this.handleUpdate}/>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state,
});

const mapDispatchToProps = (dispatch, getState) => ({
  categoryItemCategoryUpdate: category => dispatch(categoryUpdate(category)),
  categoryItemCategoryDelete: category => dispatch(categoryDelete(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
