import { ActionType } from "../action";

const initialState = {
  managerName: null,
  product: null,
};

export const initilInputsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_MANAGER_NAME:
      return Object.assign({}, state, { managerName: action.payload });
    case ActionType.SET_PRODUCT:
      return Object.assign({}, state, { product: action.payload });
    default:
      return state;
  }
};
