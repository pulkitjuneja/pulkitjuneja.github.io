import React, { Component } from 'react';
import { TitleDiv, Name, Title, IconWrapper } from './Header.style'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

class Header extends Component {
    render() {
        return (
            <TitleDiv className="section">
                <Name>Hello I'm Pulkit</Name>
                <Title>Game Developer | Computer graphics Enthusiast</Title>
                {/* <BigSeperator/> */}
                <span>
                    <IconWrapper><FaGithub color="black" size="1.2em" /></IconWrapper>
                    <IconWrapper><FaLinkedin color="#2980b9" size="1.2em" /></IconWrapper>
                    <IconWrapper><FaTwitter color="#2980b9" size="1.2em" /></IconWrapper>
                    <IconWrapper><FaEnvelope color="#16a085	" size="1.2em" /></IconWrapper>
                </span>
            </TitleDiv>
        );
    }
}


export default Header;