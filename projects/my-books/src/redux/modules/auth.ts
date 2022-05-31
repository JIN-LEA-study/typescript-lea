// 인증관리
import { createActions } from "redux-actions";

interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

const prefix = "my-books/auth";

//action

export const {} = createActions("PENDING", "SUCCESS", "FAIL", { prefix });
