import React from "react";
import Login from "./components/Login";

import authReducer from "./utils/reducers/auth";
import initialState from "./utils/state/state";

import "./styles/global.scss";
import { EAuth } from "./utils/reducers/types/auth";

export default function App() {
  const [state, dispatch] = React.useReducer(authReducer, initialState);

  const onLogin = (): void => {
    dispatch({
      type: EAuth.IS_AUTH,
      payload: true,
    });
  };

  console.log(state);

  return (
    <div className="wrapper">
      <Login onLogin={onLogin} />
    </div>
  );
}
