export function getPlans() {
  return {
    type: '@plan/GET_PLANS',
  };
}

export function getPlansSuccess(plans) {
  return {
    type: '@plan/GET_PLANS_SUCCESS',
    payload: { plans },
  };
}

export function getPlansError() {
  return {
    type: '@plan/GET_PLANS_ERROR',
  };
}

export function createPlan(title, duration, price) {
  return {
    type: '@plan/CREATE_PLAN',
    payload: { title, duration, price },
  };
}

export function updatePlan(plan_id, title, duration, price) {
  return {
    type: '@plan/UPDATE_PLAN',
    payload: { plan_id, title, duration, price },
  };
}

export function deletePlan(id) {
  return {
    type: '@plan/DELETE_PLAN',
    payload: { id },
  };
}
