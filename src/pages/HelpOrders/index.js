import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import { Container, ListContainer, Table, Button, ButtonAdd } from './styles';
// import api from '~/services/api';
import { getHelpOrders } from '~/store/modules/helpOrder/actions';

export default function HelpOrders() {
  const [showModal, setShowModal] = useState(false);
  const { helpOrders } = useSelector(state => state.helpOrder);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadHelpOrders() {
      await dispatch(getHelpOrders());
    }

    loadHelpOrders();
  }, []);

  return (
    <Container>
      <div>
        <h1>Gerenciando alunos</h1>
      </div>

      <ListContainer>
        <Table>
          <thead>
            <tr>
              <th>aluno</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {helpOrders &&
              helpOrders.map(helpOrder => (
                <tr key={helpOrder.student.id}>
                  <td>{helpOrder.student.name}</td>
                  <td>
                    <Button onClick={() => setShowModal(true)} color="#2054C3">
                      responder
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
