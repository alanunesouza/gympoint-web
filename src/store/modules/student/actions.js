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

export function createStudent(name, email, age, weight, height) {
  return {
    type: '@student/CREATE_STUDENT',
    payload: { name, email, age, weight, height },
  };
}

export function deleteStudent(id) {
  return {
    type: '@student/DELETE_STUDENT',
    payload: { id },
  };
}
