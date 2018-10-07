import React, { Component } from 'react';
import propTypes from 'prop-types'
import {BlogContainer, BlogThumbNail, Title, Date, Description} from './BlogCard.style'

class BlogCard extends Component {
  render() {

    const {title, description, imageURL, link, date} = this.props.cardData;

    return (
      <BlogContainer className="row">
        <div className="col-md-9 col-xs-12 col-sm-12">
          <a href = {link}>
            <Title>{title}</Title>
          </a>
          <Date>Published on {date}</Date>
          <Description>{description}</Description>
        </div>
        <div className="col-md-3 d-none d-md-block">
          <BlogThumbNail src={imageURL} />
        </div>
      </BlogContainer>
    );
  }
}

BlogCard.propTypes = {
  cardData: propTypes.shape({
    title: propTypes.string,
    description:propTypes.string,
    imageURL: propTypes.string,
    link: propTypes.string,
    date: propTypes.string
  })
}

export default BlogCard;