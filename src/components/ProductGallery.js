import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: this.props.item.img,
      mainImage: this.props.item.img.length > 1 ? this.props.item.img[0] : this.props.item.img
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault();

    var src = e.target.src;

    this.setState((state) => ({
      mainImage: src
    }))
  }

  render () {
    // Could have made this in to a component but did this to show code
    // and save time.
    let imageGallery  = this.state.images.map((image, i) => (
                <li className="product_image_container" key={i}>
                  <a href="#" onClick={this.handleClick}>
                    <img className="product_image"  src={image} />
                  </a>
                </li>
              ))

    return(
      <div className="product_gallery">
        <div className="product_gallery_list">
          <ul>
            {imageGallery}
          </ul>
        </div>
        <div className="product_main">
            <img className="product_main_image"
              src={this.state.mainImage}
              alt=""
            />
        </div>
      </div>
    )
  }
}

export default ProductGallery;
