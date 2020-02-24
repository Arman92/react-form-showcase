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
  margin: 12px 0;
`;

export const FormField = styled.div`
  display: flex;
  margin: 0 12px;
  flex: 1;
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
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 48px;

  button:last-child {
    margin-left: 24px;
  }
`;
