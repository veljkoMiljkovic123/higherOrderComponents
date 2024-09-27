import React from "react";
import { Navigate } from "react-router-dom";

function AuthGuarding({children}) {
  function checkIsLoading() {
    if (localStorage.hasOwnProperty("vite_user")) {
      return localStorage.getItem("vite_user");
    }
  }

  return checkIsLoading()? children : <Navigate to={'/login'}/>
}

export default AuthGuarding;
