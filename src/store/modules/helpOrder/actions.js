export function getHelpOrders() {
  return {
    type: '@helpOrder/GET_HELPORDERS',
  };
}

export function getHelpOrdersSuccess(data) {
  return {
    type: '@helpOrder/GET_HELPORDERS_SUCCESS',
    payload: { hasMoreItems: data.hasMoreItems, helpOrders: data.content },
  };
}

export function getHelpOrdersError() {
  return {
    type: '@helpOrder/GET_HELPORDERS_ERROR',
  };
}

export function createHelpOrder(name, email, age, weight, height) {
  return {
    type: '@helpOrder/CREATE_HELPORDER',
    payload: { name, email, age, weight, height },
  };
}
