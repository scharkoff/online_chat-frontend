import React from 'react';
import Chat from 'components/Chat/index';
import socket from 'utils/socket';
import joinReducer from 'utils/reducers/join';
import axios from 'utils/axios/axios';
import initialUsersState from 'utils/state/users';
import initialJoinState from 'utils/state/join';
import usersReducer from 'utils/reducers/users';
import messagesReducer from 'utils/reducers/message';
import initialMessagesState from 'utils/state/messages';
import { Login } from 'components/Login';
import { IJoinDTO } from 'utils/reducers/types/join';
import { setUsers, addMessage } from 'utils/functions/index';
import { IGetRoomDataDTO } from 'utils/axios/types';
import { JoinContext, UsersContext, MessagesContext } from 'data/app/context';
import { EActionTypes } from 'utils/reducers/types/enum';
import 'styles/global.scss';

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

    socket.emit('ROOM:JOIN', {
      roomId: data.roomId,
      userName: data.userName,
    });

    socket.emit('ROOM:GET_MESSAGES', {
      roomId: data.roomId,
    });

    axios.get(`/rooms/${data.roomId}`).then(({ data }: IGetRoomDataDTO) => {
      setUsers(data.users, usersDispatch, usersState);
    });
  };

  React.useEffect(() => {
    socket.on('ROOM:JOINED', (users) => {
      setUsers(users, usersDispatch, usersState);
    });

    socket.on('ROOM:UPDATE_USERS', (users) => {
      setUsers(users, usersDispatch, usersState);
    });

    socket.on('ROOM:PUSH_NEW_MESSAGE', (message) => {
      addMessage(message, messagesDispatch);
    });

    socket.on('ROOM:GIVE_MESSAGES', (messages) => {
      messagesDispatch({
        type: EActionTypes.UPLOAD_MESSAGES,
        payload: { messages },
      });
    });
  }, []);

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
