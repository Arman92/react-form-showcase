import styled from 'styled-components';

export const Select = styled.select`
  padding: 12px;
  background: #ffffff;
  border: none;
  font-size: 16px;
  -webkit-appearance: button;
  appearance: button;
  outline: none;
  border: 1px solid #d9d9d9;

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16), 0px -1px 1px rgba(0, 0, 0, 0.04);
  border-radius: 5px 7px 7px 5px;

  &.input-error {
    border: 1px solid #e75c4a;
  }
`;
