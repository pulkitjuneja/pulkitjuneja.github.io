import React, { Component } from 'react';
import { Container, HeaderUnderScore, CenterAlignedHeading } from '../Common/Common.style'
import TeaserCard from '../TeaserCard/TeaserCard';

class Projects extends Component {
  render() {
    return (
      <Container>
        <CenterAlignedHeading>Projects and Experiments </CenterAlignedHeading>
        <HeaderUnderScore />
        <div className='container'>
          <div className='row'>
            <TeaserCard title="test" description="test description" imageUrl="https://i.imgur.com/qbb4bgk.gif" />
          </div>
        </div>
      </Container>
    );
  }
}

export default Projects;