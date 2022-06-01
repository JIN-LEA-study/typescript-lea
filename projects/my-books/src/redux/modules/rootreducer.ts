import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import auth from "./auth";
import { History } from "history";
import books from "./books";

export interface RootState {
  books: BooksState;
  auth: AuthState;
  router: Reducer<RouterState<unknown>, AnyAction>;
}

//하위 reducer 설정
const rootReducer = (history: History<unknown>) =>
  combineReducers({
    books,
    auth,
    router: connectRouter(history),
  });

export default reducer;
