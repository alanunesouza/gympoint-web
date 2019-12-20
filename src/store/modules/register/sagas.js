import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import {
  getRegisters,
  getRegistersSuccess,
  getRegistersError,
} from './actions';
import history from '~/services/history';

export function* get() {
  try {
    const response = yield call(api.get, '/registrations');

    const data = response.data.map(register => ({
      ...register,
      start_date_formatted: format(
        parseISO(register.start_date),
        "dd 'de' MMMM 'de' yyyy",
        { locale: pt }
      ),
      end_date_formatted: format(
        parseISO(register.end_date),
        "dd 'de' MMMM 'de' yyyy",
        { locale: pt }
      ),
    }));

    yield put(getRegistersSuccess(data));
  } catch (err) {
    toast.error('Falha ao buscar planos');
    yield put(getRegistersError());
  }
}

export function* deleteRegister({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `/registrations/${id}`);

    yield put(getRegisters());
  } catch (err) {
    toast.error('Falha ao deletar plano, tente novamente');
  }
}

export function* create({ payload }) {
  try {
    yield call(api.post, '/registrations', {
      ...payload,
    });

    yield put(getRegisters());

    history.push('/registrations');
  } catch (err) {
    toast.error('Falha ao salvar plano, tente novamente');
  }
}

export function* update({ payload }) {
  try {
    const { plan_id } = payload;
    yield call(api.put, `/registrations/${plan_id}`, {
      ...payload,
    });

    yield put(getRegisters());

    toast.success('Cadastro atualizado com sucesso');
  } catch (err) {
    toast.error('Falha ao atualizar dados do plano, tente novamente');
  }
}

export default all([
  takeLatest('@register/GET_REGISTERS', get),
  takeLatest('@register/DELETE_REGISTER', deleteRegister),
  takeLatest('@register/CREATE_REGISTER', create),
  takeLatest('@register/UPDATE_REGISTER', update),
]);
