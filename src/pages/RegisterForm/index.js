import React, { useEffect, useState, useMemo } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { FiCheck, FiChevronLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { Container, ListContainer, InputSmall, Button } from './styles';

import { formatMoney } from '~/util/formats';
import api from '~/services/api';
import {
  createRegister,
  updateRegister,
} from '~/store/modules/register/actions';
import history from '~/services/history';

const schema = Yup.object().shape({
  title: Yup.string()
    .max(50, 'Título pode ter no máximo 50 caracteres')
    .required('O título é obrigatório'),
  duration: Yup.number()
    .min(1, 'Duração inválida')
    .required('A duração é obrigatória'),
  price: Yup.number().positive('O preço é obrigatório'),
});

export default function RegisterForm() {
  const [register, setRegister] = useState({});
  const [registerDuration, setRegisterDuration] = useState(1);
  const [registerPrice, setRegisterPrice] = useState(0);
  const { id } = useParams();
  const isNewRegister = !id;
  const dispatch = useDispatch();

  const totalPrice = useMemo(() => {
    return formatMoney(registerPrice * registerDuration);
  }, [registerPrice, registerDuration]);

  useEffect(() => {
    async function loadRegister() {
      try {
        const { data } = await api.get(`registers/${id}`);
        setRegister(data);
        setRegisterDuration(data.duration);
        setRegisterPrice(data.price);
      } catch (err) {
        toast.error('Erro ao carregar informações do aluno');
      }
    }

    if (!isNewRegister) {
      loadRegister();
    }
  }, []);

  function handleCreateRegister({ title, duration, price }) {
    const register_id = Number(id);
    duration = Number(duration);
    price = Number(price);

    if (isNewRegister) {
      dispatch(createRegister(title, duration, price));
    } else {
      dispatch(updateRegister(register_id, title, duration, price));
    }
  }

  return (
    <Container>
      <div>
        <h1>
          {isNewRegister ? 'Cadastro de matrícula' : 'Edição de matrícula'}
        </h1>
        <div>
          <Button
            backgroundColor="#ccc"
            onClick={() => history.push('/registrations')}
          >
            <FiChevronLeft />
            voltar
          </Button>

          <Button backgroundColor="#ed4c64" type="submit" form="createRegister">
            <FiCheck />
            salvar
          </Button>
        </div>
      </div>

      <ListContainer>
        <Form
          id="createRegister"
          schema={schema}
          onSubmit={handleCreateRegister}
          initialData={register}
        >
          <span style={{ color: '#666' }}>ALUNO</span>
          <Input name="title" type="name" placeholder="Diadmond" />

          <div>
            <InputSmall>
              <SelectInput
                name="student_id"
                isDisabled={loading}
                options={students}
                label="ALUNO"
                placeholder="Buscar aluno"
                noOptionsMessage={() => 'Não há alunos'}
                loadOptions={loadStudents}
                cacheOptions
              />
            </InputSmall>

            <InputSmall>
              <SelectInput
                noOptionsMessage={() => 'Não há planos'}
                isDisabled={loading}
                name="plan_id"
                options={plans}
                onChange={setSelectedPlan}
                loadOptions={loadPlans}
                label="PLANO"
                placeholder="Selecione o plano"
                cacheOptions
              />
            </InputSmall>

            <InputSmall>
              <DatePickerInput
                name="start_date"
                disabled={loading}
                label="DATA DE INÍCIO"
                onChange={setSelectedStartDate}
                placeholder="Escolha a data"
              />
            </InputSmall>

            <InputSmall>
              <DatePickerInput
                name="end_date"
                label="DATA DE TÉRMINO"
                value={endDate}
                disabled
              />
            </InputSmall>

            <InputSmall>
              <CurrencyInput
                name="totalPrice"
                label="VALOR FINAL"
                value={totalPrice}
                disabled
              />
            </InputSmall>
          </div>
        </Form>
      </ListContainer>
    </Container>
  );
}

RegisterForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
