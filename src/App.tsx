import React from "react";
import { Login } from "./components/Login";

import joinReducer from "./utils/reducers/join";
import { IJoinDTO } from "./utils/reducers/types/join";
import socket from "./utils/socket";
import axios from "./utils/axios/axios";
import { setUsers, addMessage } from "./utils/functions/index";
import { IGetRoomDataDTO } from "./utils/axios/types";

import Chat from "./components/Chat/index";

import "./styles/global.scss";
import initialJoinState from "./utils/state/join";
import initialUsersState from "./utils/state/users";
import usersReducer from "./utils/reducers/users";
import messagesReducer from "./utils/reducers/message";
import initialMessagesState from "./utils/state/messages";
import { JoinContext, UsersContext, MessagesContext } from "./data/app/context";
import { EActionTypes } from "./utils/reducers/types/enum";

export default function App() {
  const [joinState, joinDispatch] = React.useReducer(
    joinReducer,
    initialJoinState
  );
  const [usersState, usersDispatch] = React.useReducer(
    usersReducer,
    initialUsersState
  );
  const [messagesState, messagesDispatch] = React.useReducer(
    messagesReducer,
    initialMessagesState
  );

  const onJoin = (data: IJoinDTO): void => {
    joinDispatch({
      type: EActionTypes.SET_JOIN,
      payload: {
        ...data,
      },
    });

    socket.emit("ROOM:JOIN", {
      roomId: data.roomId,
      userName: data.userName,
    });

    axios.get(`/rooms/${data.roomId}`).then(({ data }: IGetRoomDataDTO) => {
      console.log("data", data);
      setUsers(data.users, usersDispatch, usersState);
    });
  };

  React.useEffect(() => {
    socket.on("ROOM:JOINED", (users) => {
      console.log("users from joined", users);
      setUsers(users, usersDispatch, usersState);
    });

    socket.on("ROOM:UPDATE_USERS", (users) => {
      setUsers(users, usersDispatch, usersState);
    });

    socket.on("ROOM:PUSH_NEW_MESSAGE", (message) => {
      console.log(message);
      addMessage(message, messagesDispatch);
    });
  }, []);

  console.log(joinState, usersState, messagesState);

  return (
    <JoinContext.Provider value={joinState}>
      <UsersContext.Provider value={usersState}>
        <MessagesContext.Provider value={{ messagesState, messagesDispatch }}>
          <div className="wrapper">
            {!joinState.joined ? (
              <Login onJoin={onJoin} />
            ) : (
              <Chat addMessage={addMessage} />
            )}
          </div>
        </MessagesContext.Provider>
      </UsersContext.Provider>
    </JoinContext.Provider>
  );
}
