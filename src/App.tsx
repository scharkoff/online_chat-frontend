import React from "react";
import { Login } from "./components/Login";

import joinReducer from "./utils/reducers/join";
import initialState from "./utils/state/state";
import { EJoin } from "./utils/reducers/types/join";
import socket from "./utils/socket";
import axios from "./utils/axios/axios";
import { setUsers } from "./utils/functions/index";
import { IGetRoomData } from "./utils/axios/types";

import Chat from "./components/Chat/index";
import { IonJoinProps } from "./components/Login/types";

import "./styles/global.scss";

export default function App() {
  const [state, dispatch] = React.useReducer(joinReducer, initialState);

  const onJoin = (data: IonJoinProps): void => {
    dispatch({
      type: EJoin.SET_JOIN,
      payload: { ...data, joined: true, users: [], messages: [] },
    });

    socket.emit("ROOM:JOIN", {
      roomId: data.roomId,
      userName: data.userName,
    });

    axios.get(`/rooms/${data.roomId}`).then(({ data }: IGetRoomData) => {
      console.log(data);
      setUsers(data.users, dispatch, state);
    });
  };

  React.useEffect(() => {
    socket.on("ROOM:JOINED", (users) => {
      setUsers(users, dispatch, state);
    });

    socket.on("ROOM:UPDATE_USERS", (users) => {
      setUsers(users, dispatch, state);
    });

    socket.on("ROOM:PUSH_NEW_MESSAGE", (messages) => {
      console.log(messages);
      dispatch({
        type: EJoin.PUSH_MESSAGE,
        payload: messages,
      });
    });
  }, []);

  return (
    <div className="wrapper">
      {!state.joined ? <Login onJoin={onJoin} /> : <Chat state={state} />}
    </div>
  );
}
