import produce from 'immer';

const INITIAL_STATE = {
  students: [],
  loading: false,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/GET_STUDENT': {
        draft.loading = true;
        break;
      }
      case '@student/GET_STUDENTS_SUCCESS': {
        draft.students = action.payload.students;
        draft.loading = false;
        break;
      }
      case '@student/GET_STUDENTS_ERROR': {
        draft.loading = false;
        break;
      }
      case '@student/DELETE_STUDENT': {
        break;
      }
      default:
    }
  });
}
