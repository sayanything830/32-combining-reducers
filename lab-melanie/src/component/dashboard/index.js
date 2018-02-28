import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate, categoryDelete} from '../../action/category-action';
import CategoryForm from '../category/category-form/index';
import CategoryItem from '../category/category-item/index';
import ExpenseItem from '../expense/expense-item/index';

class Dashboard extends React.Component {
  render() {
    return (
      <section>
        <h1>Fudge-It Budget</h1>
        <CategoryForm
          buttonText="Create"
          onComplete={this.props.dashboardCategoryCreate}/>

        {this.props.categories ?
          this.props.categories.map(category =>
            <div key={category._id}>
              <CategoryItem
                category={category}
                buttonText="Delete"/>

              {/* {this.props.expenses[this.props.categories._id] ?
                this.props.expenses[this.props.categories._id].map(expense =>
                  <div key={expense._id}>
                    <ExpenseItem expense={expense}/>
                  </div>)
                :
                undefined
              } */}

            </div>)
          :
          undefined
        }

      </section>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  dashboardCategoryCreate: category => dispatch(categoryCreate(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
