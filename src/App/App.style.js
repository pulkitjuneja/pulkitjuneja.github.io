import styled from 'styled-components'

export const FlexDiv = styled.div`
  // flex
  display: flexbox;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  // direction
  webkit-box-flex-direction: row;
  moz-box-flex-direction: row;
  ms-flex-direction: row;
  webkit-flex-direction: row;
  flex-direction: row;

  // grow, shrink, basis
  webkit-box-flex: 1 1 200px;
  moz-box-flex: 1 1 200px;
  ms-flex: 1 1 200px;
  webkit-flex: 1 1 200px;
  flex: 1 1 200px;
`