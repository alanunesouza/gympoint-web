import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import check from '~/assets/check.png';
import unchecked from '~/assets/unchecked.png';
import { Container, ListContainer, Table, Button, ButtonAdd } from './styles';
import { getRegisters, deleteRegister } from '~/store/modules/register/actions';

export default function Registers() {
  const { registers } = useSelector(state => state.register);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadRegisters() {
      await dispatch(getRegisters());
    }

    loadRegisters();
  }, []);

  function handleDeleteregister({ id }) {
    dispatch(deleteRegister(id));
  }

  return (
    <Container>
      <div>
        <h1>Gerenciando matrículas</h1>
        <Link to="/registration">
          <ButtonAdd>
            <FiPlus />
            cadastrar
          </ButtonAdd>
        </Link>
      </div>

      <ListContainer>
        <Table>
          <thead>
            {registers && registers.length > 0 && (
              <tr>
                <th>aluno</th>
                <th>plano</th>
                <th>início</th>
                <th>término</th>
                <th>ativa</th>
                <th> </th>
              </tr>
            )}
          </thead>
          <tbody>
            {registers.map(register => (
              <tr key={register.id}>
                <td>{register.student.name}</td>
                <td>{register.plan.title}</td>
                <td>{register.start_date_formatted}</td>
                <td>{register.end_date_formatted}</td>
                <td>
                  {register.active ? (
                    <img src={check} alt="Check" />
                  ) : (
                    <img src={unchecked} alt="Unchecked" />
                  )}
                </td>
                <td>
                  <Link to={`/registration/${register.id}`}>
                    <Button color="#2054C3">editar</Button>
                  </Link>
                  <Button
                    onClick={() => handleDeleteregister(register)}
                    color="#F44646"
                  >
                    apagar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {registers && registers.length === 0 && (
          <span>Você não tem matrículas cadastradas no momento.</span>
        )}
      </ListContainer>
    </Container>
  );
}
