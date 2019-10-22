import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    let addedItems = null;

    if (this.props.addedItems > 0) {
       addedItems =  <span className="cart_number"> { this.props.addedItems } </span>
    }

    return (
      <li>
        <div className="cart_view">
          <i className="material-icons">shopping_cart</i>
          { addedItems }
        </div>
      </li>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    addedItems: state.addedItems
  }
}

export default connect(mapStateToProps)(Cart)
