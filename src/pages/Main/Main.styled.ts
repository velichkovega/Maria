import styled from 'styled-components';

import img from '../../assets/background.jpg';

export const Wrapper = styled.div`
  background-image: url(${img});
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
