import React, { useEffect, useState, useMemo } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { FiCheck, FiChevronLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { format, addMonths } from 'date-fns';

import {
  Container,
  ListContainer,
  CustomAsyncSelect,
  CustomSelect,
  CustomDatePicker,
  Button,
  InputSmall,
} from './styles';

import Select from '~/components/Select';
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
  const [student, setStudent] = useState('');
  const [plan, setPlan] = useState({});
  const [startDate, setStartDate] = useState();
  const [register] = useState({});
  const { id } = useParams();
  const isNewRegister = !id;
  const dispatch = useDispatch();

  async function loadStudents(q) {
    const res = await api.get('students', { params: { q } });
    return new Promise(resolve => {
      resolve(
        res.data.map(st => {
          return {
            value: st.id,
            label: st.name,
            ...st,
          };
        })
      );
    });
  }

  async function loadPlans() {
    const response = await api.get('plans');
    return new Promise(resolve => {
      resolve(
        response.data.map(pl => {
          return {
            value: pl.id,
            label: pl.title,
            duration: pl.duration,
            totalPrice: pl.price * pl.duration,
            ...pl,
          };
        })
      );
    });
  }

  useEffect(() => {
    loadPlans();
    loadStudents();
  }, []);

  const finalPrice = useMemo(() => {
    return formatMoney(plan.price * plan.duration);
  }, [plan.price, plan.duration]);

  const endDate = useMemo(() => {
    if (plan && startDate) {
      return format(addMonths(startDate, plan.duration), 'dd/MM/yyyy');
    }
    return '';
  }, [plan, startDate]);

  function handleBack() {
    history.push('/registrations');
  }

  function handlePlanChange(e) {
    setPlan(e);
  }

  async function handleSubmit() {
    try {
      await api.post('/registrations', {
        student_id: student.id,
        plan_id: plan.value,
        start_date: startDate,
      });

      toast.success('Matrícula realizada com sucesso');
      history.push('/registrations');
    } catch (error) {
      toast.error('Erro ao tentar realizar a matrícula');
    }
  }

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
          <CustomAsyncSelect
            cacheOptions
            isClearable
            defaultOptions
            loadOptions={e => loadStudents(e)}
            value={student}
            onChange={e => setStudent(e)}
            placeholder="Selecionar aluno"
          />

          <div>
            <InputSmall>
              <CustomSelect
                name="plan_id"
                isSearchable={false}
                isClearable
                defaultOptions
                loadOptions={e => loadPlans(e)}
                value={plan}
                onChange={e => handlePlanChange(e)}
                placeholder="Selecionar plano"
              />
            </InputSmall>

            <InputSmall>
              <CustomDatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
                placeholderText="Clique para escolher"
              />
            </InputSmall>

            <InputSmall>
              <Input
                name="end_date"
                value={endDate}
                className="form"
                readOnly
              />
            </InputSmall>

            <InputSmall>
              <Input
                name="final_price"
                value={finalPrice}
                className="form"
                readOnly
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
