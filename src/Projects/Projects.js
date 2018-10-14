import React, { Component } from 'react';
import { CenterAlignedHeading } from '../Common/Common.style'
import { ProjectContainer } from './Projects.style'
import TeaserCard from '../TeaserCard/TeaserCard';
import projectData from '../Constants/projectData.js'

class Projects extends Component {
  render() {
    return (
      <ProjectContainer>
        <CenterAlignedHeading>Projects and Experiments </CenterAlignedHeading>
        <div className='container'>
          <div className="row">
            <div className="col-sm">
              <TeaserCard cardData={projectData.magnetic} />
            </div>
            <div className="col-sm">
              <TeaserCard cardData={projectData.neonShifter} />
            </div>
            <div className="col-sm">
              <TeaserCard cardData={projectData.meshDeformation} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <TeaserCard cardData={projectData.rays} />
            </div>
            <div className="col-sm">
              <TeaserCard cardData={projectData.eva} />
            </div>
            <div className="col-sm">
              <TeaserCard cardData={projectData.raysCaster} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <TeaserCard cardData={projectData.insightVR} />
            </div>
            <div className="col-sm-4">
              <TeaserCard cardData={projectData.rpb} />
            </div>
          </div>
        </div>
      </ProjectContainer >
    );
  }
}

export default Projects;