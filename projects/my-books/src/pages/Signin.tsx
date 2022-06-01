import React from "react";
import { useSelector } from "react-redux";
import SigninContainer from "../conainers/SigninContainer";

export default function Signin() {
  const token = useSelector<, string | null>((state) => state.auth.token);
  return <SigninContainer />;
}
