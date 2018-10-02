import React, { Component } from 'react';
import propTypes from 'prop-types'
import './TeaserCard.css'

class TeaserCard extends Component {
  render() {

    const { imageURL, title, description } = this.props;

    return (
      <div className="teaserContainer">
        <div className="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ">
            <div className="content-overlay"></div>
            <div className="imageContainer">
              <img className="content-image" src={imageURL} />
            </div>
            <div className="content-details fadeIn-bottom">
              <h3 className="content-title">{title}</h3>
            </div>
          </a>
        </div>
        <p>{description}</p>
      </div >
    );
  }
}

TeaserCard.propTypes = {
  imageURL: propTypes.string,
  title: propTypes.string,
  description: propTypes.string
}

export default TeaserCard;