import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { FiCheck, FiChevronLeft } from 'react-icons/fi';

import { Container, ListContainer, InputSmall, Button } from './styles';
import api from '~/services/api';
import { createStudent } from '~/store/modules/student/actions';
import history from '~/services/history';

export default function CreateStudent() {
  const { student } = useSelector(state => state.student);
  const { loading } = useSelector(state => state.student);
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    age: Yup.string().required('A idade é obrigatória'),
    weight: Yup.string().required('O peso é obrigatório'),
    height: Yup.string().required('A altura é obrigatória'),
  });

  function handleCreateStudent({ name, email, age, weight, height }) {
    console.log(name, email, age, weight, height);
    // dispatch(createStudent(name, email, age, weight, height));
  }

  return (
    <Container>
      <div>
        <h1>Cadastro de aluno</h1>
        <div>
          <Button backgroundColor="#ccc" onClick={() => history.goBack()}>
            <FiChevronLeft />
            voltar
          </Button>

          <Button backgroundColor="#ed4c64" type="submit" form="createStudent">
            <FiCheck />
            salvar
          </Button>
        </div>
      </div>

      <ListContainer>
        <Form id="createStudent" schema={schema} onSubmit={handleCreateStudent}>
          <span style={{ color: '#666' }}>NOME COMPLETO</span>
          <Input name="name" type="name" placeholder="John Doe" />

          <span style={{ color: '#666' }}>ENDEREÇO DE E-MAIL</span>
          <Input name="email" type="email" placeholder="exemplo@email.com" />

          <div>
            <InputSmall>
              <span style={{ color: '#666' }}>IDADE</span>
              <Input name="age" type="text" maxLength={3} />
            </InputSmall>

            <InputSmall>
              <span style={{ color: '#666' }}>PESO (em kg)</span>
              <Input name="weight" type="text" />
            </InputSmall>

            <InputSmall>
              <span style={{ color: '#666' }}>ALTURA</span>
              <Input name="height" type="text" />
            </InputSmall>
          </div>
        </Form>
      </ListContainer>
    </Container>
  );
}
