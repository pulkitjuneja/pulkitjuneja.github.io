import React, { Component } from 'react';
import {AboutContainer} from './About.style'
import {CenterAlignedHeading} from '../Common/Common.style'

class About extends Component {
  render() {
    return (
      <AboutContainer>
        <CenterAlignedHeading>About Me</CenterAlignedHeading>
        <p>I am a full stack developer with an aptitude in Game development and computer graphics. I love both making and playing games</p>
      </AboutContainer>
    );
  }
}

export default About;