export function getStudents() {
  return {
    type: '@student/GET_STUDENTS',
  };
}

export function getStudentsSuccess(students) {
  return {
    type: '@student/GET_STUDENTS_SUCCESS',
    payload: { students },
  };
}

export function getStudentsError() {
  return {
    type: '@student/GET_STUDENTS_ERROR',
  };
}

export function deleteStudent(token, id) {
  return {
    type: '@student/DELETE_STUDENT',
    payload: { token, id },
  };
}
