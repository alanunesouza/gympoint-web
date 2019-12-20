export function getRegisters() {
  return {
    type: '@register/GET_REGISTERS',
  };
}

export function getRegistersSuccess(registers) {
  return {
    type: '@register/GET_REGISTERS_SUCCESS',
    payload: { registers },
  };
}

export function getRegistersError() {
  return {
    type: '@register/GET_REGISTERS_ERROR',
  };
}

export function createRegister(title, duration, price) {
  return {
    type: '@register/CREATE_REGISTER',
    payload: { title, duration, price },
  };
}

export function updateRegister(plan_id, title, duration, price) {
  return {
    type: '@register/UPDATE_REGISTER',
    payload: { plan_id, title, duration, price },
  };
}

export function deleteRegister(id) {
  return {
    type: '@register/DELETE_REGISTER',
    payload: { id },
  };
}
