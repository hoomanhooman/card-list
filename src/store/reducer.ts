import { combineReducers } from "redux";
import randomUserReducer from "./randomUser";
import loginReducer from "./login";

const reducer = combineReducers({
  randomUser: randomUserReducer,
  login: loginReducer,
});

export default reducer;
