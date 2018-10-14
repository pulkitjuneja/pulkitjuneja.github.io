import styled, { css } from 'styled-components'
import { Container } from '../Common/Common.style'

const textMain = css`
	color: #fff;
`

export const IconWrapper = styled.span`
	padding-left:20px;
`

export const TitleDiv = styled(Container)`
	-webkit-align-self: center;
	-ms-flex-item-align: center;
	align-self: center;
	background: #bdc3c7;
	height:100%;
	text-align: center;
`;

export const SmallSeperator = styled.div`
	background: #2c3e50;
	height: 2px;
	width: 20%	;
	margin: auto;
	margin-top: 10px;
	margin-bottom: 10px;
	transform: matrix(1, 0, 0, 1, 0, 0) ;
`

export const BigSeperator = styled(SmallSeperator)`
 width: 50%;
`

export const Name = styled.h1`
	${textMain}
	text-align:center;
	padding-left:1em;
`

export const Title = styled.h6`
	${textMain}
	text-align:center;
`

export const IconsContainer = styled.span`
	margin:auto;
	display: inline-block;
`

export const BoldSpan = styled.span`
	margin:auto;
	padding-left:20px;
	display: inline-block;
	font-weight:1000;
	color: #ED4C67
`