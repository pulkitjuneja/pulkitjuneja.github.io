import React, { Component } from 'react';
import {
  TeaserContainer, TeaserImage,
  TeaserCaption, TeaserMeta,
  TeaserTitle, TeaserDescription
} from './TeaserCard.style'
import propTypes from 'prop-types'

class TeaserCard extends Component {
  render() {

    const { imageURL, title, description } = this.props;

    return (
      <TeaserContainer>
        <TeaserImage src="https://i.imgur.com/qbb4bgk.gif" />
        <TeaserCaption>
          <TeaserMeta>
            <TeaserTitle>{title}</TeaserTitle>
            <TeaserDescription>{description}</TeaserDescription>
          </TeaserMeta>
        </TeaserCaption>
      </TeaserContainer>
    );
  }
}

TeaserCard.propTypes = {
  imageURL: propTypes.string,
  title: propTypes.string,
  description: propTypes.string
}

export default TeaserCard;