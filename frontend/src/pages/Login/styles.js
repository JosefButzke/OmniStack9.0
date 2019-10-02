import styled from 'styled-components';

export const Container = styled.div`
    p {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 30px;
    }

    form {
      display: flex;
      flex-direction: column;

      label {
        font-size: 14px;
        color: #444;
        font-weight: bold;
        margin-bottom: 8px;
      }

      input {
        margin-bottom: 20px;
        border: 1px solid #ddd;
        border-radius: 2px;
        height: 45px;
        padding: 0 15px;
        font-size: 16px;
      }
    }
`;

export const ButtonBtn = styled.button`
  border: 0;
  border-radius: 2px;
  width: 100%;
  height: 42px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  background: #F05A5B;
  color: #FFF;
  cursor: pointer;

  :hover {
    background: #E14F50;
  }
`;
