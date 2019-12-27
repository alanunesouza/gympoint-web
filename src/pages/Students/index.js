import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MdSearch } from 'react-icons/md';

import {
  Container,
  ActionsContainer,
  ListContainer,
  Table,
  Button,
  ButtonAdd,
} from './styles';
import { getStudents, deleteStudent } from '~/store/modules/student/actions';

export default function Students() {
  const { students } = useSelector(state => state.student);
  const dispatch = useDispatch();

  async function loadStudents(page, name) {
    await dispatch(getStudents(page, name || ''));
  }

  useEffect(() => {
    loadStudents(1);
  }, []);

  function handleDeleteStudent({ id }) {
    dispatch(deleteStudent(id));
  }

  return (
    <Container>
      <div>
        <h1>Gerenciando alunos</h1>

        <ActionsContainer>
          <Link to="/student">
            <ButtonAdd>
              <FiPlus />
              cadastrar
            </ButtonAdd>
          </Link>

          <span>
            <MdSearch color="#999999" size={16} />
            <input
              name="studentName"
              placeholder="Buscar aluno"
              onChange={e => loadStudents(1, e.target.value)}
            />
          </span>
        </ActionsContainer>
      </div>

      <ListContainer>
        <Table>
          <thead>
            {students && students.length > 0 && (
              <tr>
                <th>nome</th>
                <th>e-mail</th>
                <th>idade</th>
                <th> </th>
              </tr>
            )}
          </thead>
          <tbody>
            {students &&
              students.map(student => (
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

        {students && students.length === 0 && (
          <span>Você não tem alunos cadastrados no momento.</span>
        )}
      </ListContainer>
    </Container>
  );
}
