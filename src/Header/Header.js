import React, { Component } from 'react';
import { Name, Title, IconWrapper, IconsContainer, BoldSpan } from './Header.style'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import HeaderBackground from '../HeaderBackground/HeaderBackground'

class Header extends Component {
	render() {
		return (
			<div>
				<HeaderBackground>
					<Name>Hello I'm Pulkit</Name>
					<Title>Game Developer | Computer graphics Enthusiast</Title>
					<IconsContainer>
						<a href="https://github.com/pulkitjuneja/"><IconWrapper><FaGithub color="black" size="1em" /></IconWrapper></a>
						<a href="https://www.linkedin.com/in/pulkitjuneja16/"><IconWrapper><FaLinkedin color="#2980b9" size="1em" /></IconWrapper></a>
						<a href="https://twitter.com/PulkitJuneja96"><IconWrapper><FaTwitter color="#2980b9" size="1em" /></IconWrapper></a>
						<a href="https://github.com/pulkitjuneja/"><IconWrapper><FaEnvelope color="#16a085	" size="1em" /></IconWrapper></a>
						<a href="pulkit_juneja.pdf" target="blank"><BoldSpan>CV</BoldSpan></a>
					</IconsContainer>
				</HeaderBackground>
			</div >
		);
	}
}


export default Header;