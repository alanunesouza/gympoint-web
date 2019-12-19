import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import { Container, ListContainer, Table, Button, ButtonAdd } from './styles';
import api from '~/services/api';
import { getStudents, deleteStudent } from '~/store/modules/student/actions';

export default function Students() {
  const { students } = useSelector(state => state.student);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('/students');

      dispatch(getStudents(response.data));
    }

    loadStudents();
  }, []);

  function handleDeleteStudent({ id }) {
    dispatch(deleteStudent(id));
  }

  return (
    <Container>
      <div>
        <h1>Gerenciando alunos</h1>
        <Link to="/student">
          <ButtonAdd>
            <FiPlus />
            cadastrar
          </ButtonAdd>
        </Link>
      </div>

      <ListContainer>
        <Table>
          <thead>
            <tr>
              <th>nome</th>
              <th>e-mail</th>
              <th>idade</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.email}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  <Link to={`/student/${student.id}`}>
                    <Button color="#2054C3">editar</Button>
                  </Link>
                  <Button
                    onClick={() => handleDeleteStudent(student)}
                    color="#F44646"
                  >
                    apagar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ListContainer>
    </Container>
  );
}
