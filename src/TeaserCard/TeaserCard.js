import React, { Component } from 'react';
import propTypes from 'prop-types'
import './TeaserCard.css'

class TeaserCard extends Component {
  render() {

    const { imageURL, title, link } = this.props.cardData;

    return (
      <div className="teaserContainer">
        <div className="content">
          <a href={link}>
            <div className="content-overlay"></div>
            <div className="imageContainer">
              <img className="content-image" src={imageURL} />
            </div>
            <div className="content-details fadeIn-bottom">
              <h5 className="content-title">{title}</h5>
            </div>
          </a>
        </div>
      </div >
    );
  }
}

TeaserCard.propTypes = {
  cardData : propTypes.shape({
    title: propTypes.string,
    imageURL: propTypes.string,
    description: propTypes.string,
    link: propTypes.string
  })
}

export default TeaserCard;