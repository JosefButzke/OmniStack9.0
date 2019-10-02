import styled from 'styled-components';

export const Container = styled.div`
  ul {
    width: 100%;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin-bottom: 30px;
  }

  li {
    display: flex;
    flex-direction: column;

    header {
      width: 100%;
      height: 120px;
      background-size: cover;
      border-radius: 4px;
    }

    strong {
      margin-top: 10px;
      font-size: 24px;
      color: #444;
    }

    span {
      font-size: 15px;
      color: #999;
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
