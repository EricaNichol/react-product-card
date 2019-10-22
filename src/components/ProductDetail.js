import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuantitySelect from './QuantitySelect';
import ProductGallery from './ProductGallery';

class ProductDetail extends Component {

  render () {
    let itemList = this.props.items.map(item=>{
       return(
         <div className="card" key={item.id}>
           <div className="card-image left">
             <ProductGallery item={item} />
           </div>

           <div className="card-content right">
             <span className="card-title"><b>{item.title}</b></span>
             <p className="card-price">${item.price} USD</p>
             <p className="card-description small">{item.desc}</p>
             <QuantitySelect />
             <p className="card-disclaimer small">30 day money back gurantee</p>
           </div>
          </div>
       )
   })

    return (
       <div className="container">
         {itemList}
       </div>
    )
  }
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
}

export default connect(mapStateToProps)(ProductDetail)
