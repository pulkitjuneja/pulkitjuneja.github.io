import React, { Component } from 'react';
import {Container, CenterAlignedHeading} from '../Common/Common.style'
import BlogCard from '../BlogCard/BlogCard'
import blogData from '../Constants/blogData'

class BlogSection extends Component {
  render() {
    return (
      <Container>
        <CenterAlignedHeading>Blogs and publications</CenterAlignedHeading>
        {
          this.renderCards()
        }
      </Container>
    );
  }

  renderCards () {
    const blogCards = [];
    Object.values(blogData).forEach(value =>{
      blogCards.push(
        <BlogCard cardData={value}/>
      )
    });
    return blogCards;
  }
}


export default BlogSection;