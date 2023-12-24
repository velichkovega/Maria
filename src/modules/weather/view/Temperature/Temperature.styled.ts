import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  height: calc(100% - 56px);
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 12px 12px;
  grid-template-areas:
    'current-weather current-weather current-weather current-weather map map'
    'current-weather current-weather current-weather current-weather map map'
    'forecast forecast forecast forecast map map'
    'forecast forecast forecast forecast map map';
`;
