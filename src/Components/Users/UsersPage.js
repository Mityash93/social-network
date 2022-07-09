import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import { useSelector } from "react-redux";

export const UsersPage = (props) => {
  const isFetching = useSelector(state => state.UsersPage.isFetching)
  return (
    <>
      {isFetching ? <Preloader /> : null}
      <Users />
    </>
  );
};


