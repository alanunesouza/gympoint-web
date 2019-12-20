import styled from 'styled-components';

export const CurrencyInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: bold;
    color: #000;
    font-size: 14px;
    line-height: 16px;
  }
  input {
    margin-top: 8px;
    border: 2px solid #666;
    border-radius: 4px;
    height: 45px;
    padding: 0 15px;
    color: #000;
    width: 100%;
    &::placeholder {
      color: #666;
      height: 19px;
      margin: 0 0 10px;
      font-size: 16px;
      line-height: 19px;
    }
  }
  span {
    margin-top: 8px;
    color: #ed4c64;
    align-self: flex-start;
    font-weight: bold;
  }
`;