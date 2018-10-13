import React, { Component } from 'react';
import {Name, Title, IconWrapper } from './Header.style'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import HeaderBackground from '../HeaderBackground/HeaderBackground'

class Header extends Component {
    render() {
        return (
            <div className="section">
							<HeaderBackground>
								<Name>Hello I'm Pulkit</Name>
								<Title>Game Developer | Computer graphics Enthusiast</Title>
								<span>
										<IconWrapper><FaGithub color="black" size="1em" /></IconWrapper>
										<IconWrapper><FaLinkedin color="#2980b9" size="1em" /></IconWrapper>
										<IconWrapper><FaTwitter color="#2980b9" size="1em" /></IconWrapper>
										<IconWrapper><FaEnvelope color="#16a085	" size="1em" /></IconWrapper>
								</span>
              </HeaderBackground>
            </div>
        );
    }
}


export default Header;