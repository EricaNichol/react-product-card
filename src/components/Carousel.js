import React, { Component } from 'react';
import { connect } from 'react-redux';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import waterMark from '../images/instagram.png';

class Carousel extends Component {
  render () {
    let itemList = this.props.instaImage.map((insta, i) => {
      return (
        <div class="item" key={i}>
          <img src={insta} alt={i} />
          <img className="water-mark" src={waterMark} />
        </div>
        )
    })

    const options = {
      margin: 10,
      items: 4,
      loop: true,
      nav: true,
      stagePadding: 125
    }

    return(
      <OwlCarousel
        className="owl-theme"
        {...options}
      >
          { itemList }
      </OwlCarousel>
    )
  }
}
const mapStateToProps = (state)=>{
    return {
      instaImage: state.instaImage
    }
}

export default connect(mapStateToProps)(Carousel);
