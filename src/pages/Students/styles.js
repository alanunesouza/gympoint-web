import styled from 'styled-components';

export const Container = styled.div`
  /* max-width: 900px; */
  margin: 50px;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0 0 40px 40px;
    font-size: 24px;
    font-weight: 500;
  }
`;

export const ListContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
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
  }
`;

export const Button = styled.a`
  color: ${props => props.color};
  margin: 10px;
  cursor: pointer;
`;
