import { FC, ReactNode } from 'react';

import { PageWrapper } from './Layout.styled';

interface Props {
  children: ReactNode;
}

export const Page: FC<Props> = ({ children }) => {
  return <PageWrapper>{children}</PageWrapper>;
};
