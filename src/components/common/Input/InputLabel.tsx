import * as React from 'react';
import styled from 'styled-components';

import { useInputContext } from './inputContext';

interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  isEssential?: boolean;
}

const InputLabel = ({ children, isEssential = false }: InputLabelProps) => {
  const { id } = useInputContext();

  return (
    <Container htmlFor={id}>
      {children}
      {isEssential && <span>*</span>}
    </Container>
  );
};

export default InputLabel;

const Container = styled.label`
  color: var(--color-gray5);
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  span {
    color: var(--color-blue1);
  }
`;
