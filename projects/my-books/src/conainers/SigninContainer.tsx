import Signin from "../components/Signin";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login as loginSaga } from "../redux/modules/auth";
import { LoginReqType } from "../types";
import { RootState } from "../redux/modules/rootReducer";

const SigninContainer: React.FC = () => {
  const loading = useSelector<RootState, boolean>(
    (state) => state.auth.loading
  );
  const error = useSelector<RootState, Error | null>(
    (state) => state.auth.error
  );
  const dispatch = useDispatch();

  const login = useCallback(
    ({ email, password }: LoginReqType) => {
      dispatch(loginSaga({ email, password }));
    },
    [dispatch]
  );

  return <Signin loading={loading} error={error} login={login} />;
};

export default SigninContainer;
