import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  getHelpOrders,
  getHelpOrdersSuccess,
  getHelpOrdersError,
} from './actions';
import history from '~/services/history';

export function* get() {
  try {
    const { data } = yield call(api.get, '/help-orders', {
      params: { page: 1 },
    });

    yield put(getHelpOrdersSuccess(data));
  } catch (err) {
    toast.error('Falha ao buscar alunos');
    yield put(getHelpOrdersError());
  }
}

export function* create({ payload }) {
  try {
    yield call(api.post, '/help-orders', {
      ...payload,
    });

    yield put(getHelpOrders());

    history.push('/helpOrders');
  } catch (err) {
    toast.error('Falha ao salvar aluno, tente novamente');
  }
}

export default all([
  takeLatest('@helpOrder/GET_HELPORDERS', get),
  takeLatest('@helpOrder/CREATE_HELPORDER', create),
]);
