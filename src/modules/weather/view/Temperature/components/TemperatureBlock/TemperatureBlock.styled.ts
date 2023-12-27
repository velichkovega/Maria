import styled from 'styled-components';

interface WindProps {
  deg: number;
}

interface TempSize {
  small: string;
}

export const CurrentTemp = styled.div<TempSize>`
  color: #fff;
  font-size: ${({ small }) => (Boolean(small) ? '36px' : '96px')};
`;

export const CurrentTempWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-grow: 1;
`;

export const WindWrapper = styled.div<WindProps>`
  color: #fff;
  transform: rotate(${(p) => p.deg}deg);
  display: inline-block;
  width: 16px;
  height: 16px;
`;
