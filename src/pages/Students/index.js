import React, { useState, useEffect } from 'react';

import { Container, ListContainer, Table, Button } from './styles';
import api from '~/services/api';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('/students');

      setStudents(response.data);
    }

    loadStudents();
  }, []);

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
            {students.map(student => (
              <tr>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  <Button color="#2054C3">editar</Button>
                  <Button color="#F44646">apagar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ListContainer>
    </Container>
  );
}
