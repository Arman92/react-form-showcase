import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 16px 0;
`;

export const FormField = styled.div`
  margin: 0 12px;
  flex: 1;
  position: relative;

  div {
    display: flex;
    align-items: center;

    label {
      font-size: 14px;
    }

    & > * {
      :first-child {
        flex: 0.2;
        max-width: 120px;
        padding-right: 12px;
      }

      :last-child {
        flex: 0.8;
      }
    }
  }

  span.error-message {
    padding: 1px 10px;
    background: #ffdada;
    margin: 0 auto;
    border-radius: 4px;
    color: #7d0000;
    font-style: italic;
    font-size: 14px;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(calc(100% + 4px));
  }
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 48px;

  button:last-child {
    margin-left: 24px;
  }
`;
