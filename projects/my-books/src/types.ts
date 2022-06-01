export type LoginReqType = {
  email: string;
  password: string;
};

export interface RootState {
  auth: AuthState;
}

export interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}
