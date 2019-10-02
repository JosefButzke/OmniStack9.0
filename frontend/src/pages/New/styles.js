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

        span {
          font-weight: normal;
          color: #999;
          font-size: 12px;
        }
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

export const Label = styled.label.attrs(props => ({
  disabled: props.thumbnailExists
}))`
  margin-bottom: 20px;
  border: 1px dashed #ddd;
  background-size: cover;
  cursor: pointer;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    display: none;
  }

  &[disabled] {
    border: 0;

    img {
      display: none;
    }
  }
`;
