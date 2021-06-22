export const ActionType = {
  SET_MANAGER_NAME: "SET_MANAGER_NAME",
  SET_PRODUCT: "SET_PRODUCT",
  SET_NEXT_STEP: "SET_NEXT_STEP",
  SET_GET_PERSON_BTN: "SET_GET_PERSON_BTN"
};

export const ActionCreator = {
  setNewName: (name) => ({
    type: ActionType.SET_MANAGER_NAME,
    payload: name,
  }),
  setNewProduct: (product) => ({
    type: ActionType.SET_PRODUCT,
    payload: product,
  }),
  setIsCalculate: (nextStep) => ({
    type: ActionType.SET_NEXT_STEP,
    payload: nextStep,
  }),
  setGetPersonBtn: (btn) => ({
    type: ActionType.SET_GET_PERSON_BTN,
    payload: btn,
  }),
};
