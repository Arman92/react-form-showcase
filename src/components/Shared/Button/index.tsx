import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  display: inline-block;
  border-radius: 4px;
  color: #ffffff;
  font-family: 'IranSANS';
  font-weight: 500;
  transition: all 0.2s;

  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  &.btn-large {
    padding: 10px 90px;
    font-size: 16px;
  }

  &.btn-small {
    padding: 10px 25px;
    font-size: 16px;
  }
}

  &.btn-plain {
    box-shadow: none;

    :hover {
      box-shadow: none;
    }
  }

  &.btn-blue {
    :active {
      box-shadow: 0 2px 7px rgba(0, 188, 212, 0.43);
      outline: none;
    }
  }

  :hover {
    box-shadow: 0 5px 10px rgba(0, 188, 212, 0.43);
    opacity: 0.8;
  }

  &.btn-orange {
    :active {
      box-shadow: 0 2px 7px rgba(243, 153, 0, 0.43);
      outline: none;
    }
  }

  &.btn-fill {
    &.btn-blue {
      /* Node: linear-gradient was causing issues on some mobile devices (e.g. huawei) */
      /* background: linear-gradient(99.6deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
        rgba(0, 188, 212, 0.9); */
      background: rgba(0, 188, 212, 0.9);
    }

    &.btn-orange {
      background: linear-gradient(110.27deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #f39900;
      box-shadow: 0px 0px 10px rgba(243, 153, 0, 0.43);
    }
  }

  &.btn-outline {
    border: 2px solid;
    background: transparent;
    &.btn-orange {
      border-color: #f39900;
      color: #f39900;
    }

    &.btn-blue {
      border-color: #00bcd4;
      color: #00bcd4;
    }

    &.btn-gray {
      border-color: #b6b7b8;
      color: #676d73;

      &:disabled {
        color: #b6b7b8;
      }
    }
  }

  &.btn-rounded {
    border-radius: 50px;
    border-width: 2px;
    color: #2f3033;
  }

  &.btn-text-gray {
    &.btn-orange {
      color: rgba(47, 48, 51, 0.8);
    }

    &.btn-blue {
      color: rgba(47, 48, 51, 0.8);
    }

    &.btn-gray {
      color: rgba(47, 48, 51, 0.8);
    }
  }
`;
