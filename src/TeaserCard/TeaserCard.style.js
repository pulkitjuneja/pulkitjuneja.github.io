import styled from 'styled-components'

export const TeaserContainer = styled.figure`
  margin: 0;
  @media (min-width: 350px) {
    position: relative; /* 1 */
    padding-top: 100%; /* 2 */
    overflow: hidden; /* 3 */
  }
`;

export const TeaserImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;

  @media (min-width: 350px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
  }
`

export const TeaserCaption = styled.figcaption`
  @media (min-width: 350px) {

    :hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    :active {
      background-color: rgba(0, 0, 0, 0.8);
    }

    position: absolute;
    top: 0;
    right: 0;
    user-select: none;
    bottom: 0;
    left: 0;
    transition: 0.2s ease-in-out;
  }
`

export const TeaserMeta = styled.div`
  @media (min-width: 350px) {
    position: absolute;
    top: 100%; /* 1 */
    right: 0;
    left: 0;
    padding: 0 20px 20px; /* 2 */
    color: rgb(255, 255, 255);
    transition: inherit; /* 3 */
  }
`

export const TeaserTitle = styled.span`
  @media (min-width: 350px) {
    display: block;
    font-weight: bold;
    font-size: 100%;
    margin-bottom: 5px;
  }
`

export const TeaserDescription = styled.p`
    margin: 0;
`