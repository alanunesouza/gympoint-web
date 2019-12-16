import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */

  div:first-child {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 30px 0;
  }

  h1 {
    font-size: 24px;
    font-weight: 500;
  }
`;

export const ListContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 6px;
  margin: 10px 0;
  padding: 0 10%;
`;

export const Table = styled.table`
  width: 100%;
  text-align: center;
  align-items: center;
  border-collapse: collapse;

  thead {
    tr {
      border: 0;
    }
  }

  tr {
    height: 50px;
    border-bottom: 2px solid #eee;
  }

  td,
  th {
    width: 30%;
    text-align: left;
    padding: 10px;
  }
`;

export const Button = styled.a`
  color: ${props => props.color};
  margin: 10px;
  cursor: pointer;
`;

export const ButtonAdd = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 6px;
  padding: 8px;
  background-color: #ed4c64;
  color: #fff;
`;
