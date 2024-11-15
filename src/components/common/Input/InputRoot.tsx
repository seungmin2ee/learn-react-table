import * as React from 'react';
import styled from 'styled-components';

import { InputContext } from './inputContext';

interface InputRootProps {
  children: React.ReactNode;
}

const InputRoot = ({ children }: InputRootProps) => {
  const id = React.useId();

  return (
    <InputContext.Provider value={{ id }}>
      <Container>{children}</Container>
    </InputContext.Provider>
  );
};

export default InputRoot;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;
