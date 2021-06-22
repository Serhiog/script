import { combineReducers } from "redux";
import { getPersonReducer } from "./getPersonReducer/getPersonReducer";
import { initilInputsReducer } from "./initial-inputsReducer/initial-inputsReducer";

export default combineReducers({
  getPerson: getPersonReducer,
  initialInputs: initilInputsReducer,
});
