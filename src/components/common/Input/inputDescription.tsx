import * as React from 'react';
import styled from 'styled-components';

interface InputDescriptionProps {
  children: React.ReactNode;
}

const InputDescription = ({ children }: InputDescriptionProps) => {
  return <Container>{children}</Container>;
};

export default InputDescription;

const Container = styled.div`
  color: var(--color-blue4);
  font-size: 14px;
  font-weight: 400;
`;
