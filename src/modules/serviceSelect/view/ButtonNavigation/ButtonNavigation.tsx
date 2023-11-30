import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ButtonWrapper } from './ButtonNavigation.style';

interface Props {
  name: string;
  link: string;
}

export const ButtonNavigation: FC<Props> = ({ name, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return <ButtonWrapper onClick={handleClick}>{name}</ButtonWrapper>;
};
