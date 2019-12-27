import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import {
  Container,
  ListContainer,
  Table,
  Button,
  ModalContainer,
  ButtonSendAnswer,
} from './styles';
import {
  getHelpOrders,
  answerHelpOrder,
  showModalHelpOrder,
} from '~/store/modules/helpOrder/actions';

export default function HelpOrders() {
  const [answer, setAnswer] = useState(false);
  const [helpOrderSelected, setHelpOrderSelected] = useState({});
  const { helpOrders } = useSelector(state => state.helpOrder);
  const { showModal } = useSelector(state => state.helpOrder);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadHelpOrders() {
      await dispatch(getHelpOrders());
    }

    loadHelpOrders();
  }, []);

  function handleSubmitAnswer() {
    dispatch(answerHelpOrder(helpOrderSelected.id, answer));
  }

  function setShowModal(boolean) {
    dispatch(showModalHelpOrder(boolean));
  }

  const ModalStyles = width => ({
    content: {
      top: '30%',
      left: width > 768 ? '30%' : '10%',
      right: width > 768 ? '30%' : '10%',
      bottom: 'auto',
      padding: '20px',
    },
    overlay: {
      backgroundColor: 'rgba(10, 8, 8, 0.75)',
    },
  });

  return (
    <Container>
      <div>
        <h1>Gerenciando alunos</h1>
      </div>

      <ListContainer>
        <Table>
          <thead>
            {helpOrders && helpOrders.length > 0 && (
              <tr>
                <th>aluno</th>
                <th> </th>
              </tr>
            )}
          </thead>
          <tbody>
            {helpOrders &&
              helpOrders.map(helpOrder => (
                <tr key={helpOrder.student.id}>
                  <td>{helpOrder.student.name}</td>
                  <td>
                    <Button
                      onClick={() => {
                        setShowModal(true);
                        setHelpOrderSelected(helpOrder);
                      }}
                      color="#2054C3"
                    >
                      responder
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        {helpOrders && helpOrders.length === 0 && (
          <span>
            Você não tem perguntas pendentes de serem respondidas no momento.
          </span>
        )}
      </ListContainer>

      <Modal
        isOpen={showModal}
        style={ModalStyles(window !== undefined ? window.innerWidth : 0)}
        onRequestClose={() => setShowModal(false)}
      >
        <ModalContainer>
          <strong>PERGUNTA DO ALUNO</strong>
          <span>{helpOrderSelected.question}</span>
          <strong>SUA RESPOSTA</strong>
          <textarea
            placeholder="exemplo@email.com"
            rows="8"
            cols="50"
            onChange={e => setAnswer(e.target.value)}
          />
          <ButtonSendAnswer onClick={() => handleSubmitAnswer()}>
            Responder aluno
          </ButtonSendAnswer>
        </ModalContainer>
      </Modal>
    </Container>
  );
}
