import * as React from 'react';

interface InputContextState {
  id: string;
}

const InputContext = React.createContext<InputContextState | null>(null);

const useInputContext = () => {
  const context = React.useContext(InputContext);

  if (!context) {
    return { id: undefined };
  }

  return context;
};

export { InputContext, useInputContext };
