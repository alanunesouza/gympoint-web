import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import { Container, ListContainer, Table, Button, ButtonAdd } from './styles';
import { getPlans, deletePlan } from '~/store/modules/plan/actions';

export default function Plans() {
  const { plans } = useSelector(state => state.plan);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadPlans() {
      await dispatch(getPlans());
    }

    loadPlans();
  }, []);

  function handleDeletePlan({ id }) {
    dispatch(deletePlan(id));
  }

  return (
    <Container>
      <div>
        <h1>Gerenciando planos</h1>
        <Link to="/plan">
          <ButtonAdd>
            <FiPlus />
            cadastrar
          </ButtonAdd>
        </Link>
      </div>

      <ListContainer>
        <Table>
          <thead>
            {plans && plans.length === 0 && (
              <tr>
                <th>título</th>
                <th>duração</th>
                <th>valor p/ mês</th>
                <th> </th>
              </tr>
            )}
          </thead>
          <tbody>
            {plans.map(plan => (
              <tr key={plan.id}>
                <td>{plan.title}</td>
                <td>{plan.duration}</td>
                <td>{plan.price}</td>
                <td>
                  <Link to={`/plan/${plan.id}`}>
                    <Button color="#2054C3">editar</Button>
                  </Link>
                  <Button
                    onClick={() => handleDeletePlan(plan)}
                    color="#F44646"
                  >
                    apagar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {plans && plans.length === 0 && (
          <span>Você não tem planos cadastrados no momento.</span>
        )}
      </ListContainer>
    </Container>
  );
}
