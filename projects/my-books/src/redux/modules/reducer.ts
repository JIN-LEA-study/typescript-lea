import { combineReducers } from "redux";
import auth from "./auth";

//하위 reducer 설정
const reducer = combineReducers({
  auth,
});

export default reducer;
