import React, { useContext } from "react";

import { UserContext } from "../contexts/userContext";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Loading = () => {
  const { loading } = useContext(UserContext);

  return loading ? (
    <Loader
      type="ThreeDots"
      color="#DB1173"
      height={100}
      width={100}
      timeout={300000} //3 secs
      className="loader"
    />
  ) : null;
};

export default Loading;
