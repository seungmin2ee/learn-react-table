import * as React from 'react';
import styled from 'styled-components';

import { useInputContext } from './inputContext';

const InputField = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const { id } = useInputContext();

  return <Container ref={ref} id={id} {...props} />;
});

InputField.displayName = 'InputField';
export default InputField;

const Container = styled.input`
  height: 100%;
  padding: 6px 8px;
  color: var(--color-gray5);
  background-color: var(--color-white);
  border: 1px solid var(--color-gray6);
  border-radius: 3.5px;
  font-size: 14px;
  font-weight: 400;
  transition: box-shadow 0.15s ease-in-out;

  &::placeholder {
    color: var(--color-gray2);
  }

  &:focus {
    box-shadow:
      0 1px 1px rgba(226, 229, 236, 0.25),
      0 2px 2px rgba(226, 229, 236, 0.2),
      0 4px 4px rgba(226, 229, 236, 0.15),
      0 8px 8px rgba(226, 229, 236, 0.1);
  }

  &:disabled {
    background-color: var(--color-gray7);
  }

  &[type='checkbox'] {
    position: relative;
    width: 14px;
    height: 14px;
    padding: 0;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 2.5px;
    transition: none;

    /* check icon */
    &::after {
      display: none;
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 5px;
      height: 8px;
      border: 1px solid var(--color-white);
      border-width: 0 2px 2px 0;
      transform: translate(-50%, -60%) rotate(45deg);
    }

    &:focus {
      border-color: var(--color-blue3);
      box-shadow: 0 0 0 0.25rem rgba(80, 111, 217, 0.25);
    }

    &:checked {
      background-color: var(--color-blue1);
      border: 1px solid var(--color-blue1);
      &::after {
        display: block;
      }
    }
  }

  &[type='date'] {
    cursor: text;
    &::-webkit-calendar-picker-indicator {
      margin-left: -8px;
      cursor: pointer;
    }
  }
`;
