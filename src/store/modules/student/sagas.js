import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  getStudents,
  getStudentsSuccess,
  getStudentsError,
  createStudent,
} from './actions';

export function* get() {
  try {
    const response = yield call(api.get, '/students');

    yield put(getStudentsSuccess(response.data));
  } catch (err) {
    toast.error('Falha ao buscar estudantes');
    yield put(getStudentsError());
  }
}

export function* deleteStudent({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `/students/${id}`);

    yield put(getStudents());
  } catch (err) {
    toast.error('Falha ao deletar estudante, tente novamente');
  }
}

export function* create({ payload }) {
  try {
    yield call(api.post, '/students', {
      payload,
    });

    yield put(createStudent());
  } catch (err) {
    toast.error('Falha ao salvar estudante, tente novamente');
  }
}

export default all([
  takeLatest('@student/GET_STUDENTS', get),
  takeLatest('@student/DELETE_STUDENT', deleteStudent),
  takeLatest('@student/CREATE_STUDENT', create),
]);
