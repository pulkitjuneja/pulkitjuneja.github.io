import React, { Component } from 'react';
import { Container, CenterAlignedHeading } from '../Common/Common.style'
import TeaserCard from '../TeaserCard/TeaserCard';

class Projects extends Component {
  render() {
    return (
      <Container>
        <CenterAlignedHeading>Projects and Experiments </CenterAlignedHeading>
        <div className='container'>
          <div className="row">
            <div className="col-lg">
              <TeaserCard title="Magnetic" description="Magnetic" imageURL="/Magnetic.png" />
            </div>
            <div className="col-lg">
              <TeaserCard title="test" description="test description" imageURL="/MeshDeform.png" />
            </div>
          </div>
        </div>
      </Container >
    );
  }
}

export default Projects;