import styled from 'styled-components';

import img from '../../assets/backgroundWeather.jpg';

export const Wrapper = styled.div`
  background-image: url(${img});
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModuleContainer = styled.div`
  width: 60vw;
  height: 540px;
`;
