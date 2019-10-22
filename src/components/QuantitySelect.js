import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuantitySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1
    };

    this.incrementItem = this.incrementItem.bind(this);
    this.decreaseItem = this.decreaseItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  incrementItem = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      qty: state.qty + 1
    }));
  }

  decreaseItem = (e) => {
    e.preventDefault();
    if (this.state.qty <= 1) return;

    this.setState((state) => ({
      qty: state.qty - 1
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addToCart(this.state.qty);
  }

  render () {
    return(
      <div>
        <p className="small">Quantity</p>
        <div className="quantity_container">
          <a  onClick={this.decreaseItem} href="#" className="">-</a>
          <span className="quantity_text">{ this.state.qty } slice</span>
          <a  onClick={this.incrementItem} href="#" className="">+</a>
        </div>
        <a onClick={this.handleSubmit} href="#" className="waves-effect waves-light btn-small red quantity_button">Onwards with my Pizza</a>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems
  };
};

// Code change: this new function takes in dispatch as an argument
// It then returns an object that contains a function as a value!
// Notice above in handleOnClick() that this function, addItem(),
// is what is called, NOT the addItem action creator itself.
const mapDispatchToProps = dispatch => {
  return {
    addToCart: (qty) => {
      dispatch({
        type: "ADD_TO_CART",
        payLoad: qty
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuantitySelect);
