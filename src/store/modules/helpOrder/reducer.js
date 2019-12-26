import produce from 'immer';

const INITIAL_STATE = {
  helpOrders: [],
  loading: false,
  hasMoreItems: true,
};

export default function helpOrder(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@helpOrder/GET_HELPORDER': {
        draft.loading = true;
        break;
      }
      case '@helpOrder/GET_HELPORDERS_SUCCESS': {
        draft.helpOrders = action.payload.helpOrders;
        draft.hasMoreItems = action.payload.hasMoreItems;
        draft.loading = false;
        break;
      }
      case '@helpOrder/GET_HELPORDERS_ERROR': {
        draft.loading = false;
        break;
      }
      case '@helpOrder/CREATE_HELPORDER': {
        draft.helporder = action.payload;
        break;
      }
      default:
    }
  });
}
