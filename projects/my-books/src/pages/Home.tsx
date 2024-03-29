import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import ListContainer from "../containers/ListContainer";
import { RootState } from "../types";

const Home: React.FC = () => {
  const token = useToken();
  if (token === null) {
    return <Redirect to="/signin" />;
  }
  return <ListContainer />;
};

export default Home;
