import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { RootState } from "../types";

export default function Home() {
  const dispatch = useDispatch();
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );

  if (token === null) {
    return <Redirect to="/signin" />;
  }
  return (
  <div>
    <div>Home</div>
    <button onClick={click}>logout</button>;
  </div>;
  );

  function click() {
    dispatch(logout());
  }
}
