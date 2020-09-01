import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  return (
    <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
