import React from 'react';

import { Container, ListContainer, Table, Button } from './styles';

export default function Students() {
  return (
    <Container>
      <h1>Gerenciando alunos</h1>

      <ListContainer>
        <Table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>E-MAIL</th>
              <th>IDADE</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Teste</td>
              <td>Teste</td>
              <td>Teste</td>
              <td>
                <Button color="#2054C3">editar</Button>
                <Button color="#F44646">apagar</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </ListContainer>
    </Container>
  );
}
