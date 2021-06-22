import { ActionType } from "../action";

const initialState = {
  isCalculate: false,
  actualBtn: "",
};

export const getPersonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GET_PERSON_BTN:
      return Object.assign({}, state, { actualBtn: action.payload });
    case ActionType.SET_NEXT_STEP:
      if (action.payload === "calculate") {
        return Object.assign({}, state, { isCalculate: true });
      }
      return true;
    default:
      return state;
  }
};
