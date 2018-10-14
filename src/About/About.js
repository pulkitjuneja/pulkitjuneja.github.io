import React, { Component } from 'react';
import { AboutContainer } from './About.style'
import { CenterAlignedHeading } from '../Common/Common.style'

class About extends Component {
  render() {
    return (
      <AboutContainer>
        <CenterAlignedHeading>About Me</CenterAlignedHeading>
        <p>Pulkit is a full stack developer with an aptitude in Game development and computer graphics. He love both making and playing games. He has professional experience with end to end development and deployment of web and mobile applications, game development. besides that he also have experience with AR/VR, graphics programming. he is a creator at heart and loves to hack around and build innovative things in his free time.</p>
      </AboutContainer>
    );
  }
}

export default About;