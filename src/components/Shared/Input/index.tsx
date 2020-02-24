import styled from 'styled-components';

export const Input = styled.input`
  display: inline-block;
  border-radius: 5px 7px 7px 5px;
  color: #111111;
  font-size: 16px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  padding: 10px 11px;
  transition: all 0.3s;

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16), 0px -1px 1px rgba(0, 0, 0, 0.04);

  ::placeholder {
    color: #bdbdbd;
    padding-right: 21px;
  }

  :placeholder-shown {
    text-overflow: ellipsis;
  }

  :focus {
    border-color: #40a9ff;
    border-right-width: 1px;
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  :hover {
    border-color: #40a9ff;
    border-right-width: 1px;
  }

  &.input-error {
    border: 2px solid #e75c4a;

    :focus {
      box-shadow: none;
    }
  }
`;
