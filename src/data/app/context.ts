import React from 'react';
import initialJoinState from 'utils/state/join';
import initialUsersState from 'utils/state/users';
import { IUsersState } from 'utils/state/types/user';
import { IMessagesState } from 'utils/state/types/messages';
import { IAddMessageAction } from 'utils/reducers/types/messages';
import { IJoinState } from 'utils/state/types/join';

export interface IMessagesContextDTO {
  messagesState: IMessagesState;
  messagesDispatch: React.Dispatch<IAddMessageAction>;
}

const messagesDispatch: React.Dispatch<IAddMessageAction> = () => {};

export const JoinContext = React.createContext<IJoinState>(initialJoinState);
export const UsersContext = React.createContext<IUsersState>(initialUsersState);
export const MessagesContext = React.createContext<IMessagesContextDTO>({
  messagesState: { messages: [] },
  messagesDispatch,
});
