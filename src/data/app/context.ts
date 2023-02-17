import React from "react";
import { IUsersStateDTO } from "../../utils/state/types/user";
import { IMessagesStateDTO } from "../../utils/state/types/messages";
import initialJoinState from "../../utils/state/join";
import initialUsersState from "../../utils/state/users";
import { ISetMessagesAction } from "../../utils/reducers/types/messages";
import { IJoinStateDTO } from "../../utils/state/types/join";

export interface IMessagesContextDTO {
  messagesState: IMessagesStateDTO;
  messagesDispatch: React.Dispatch<ISetMessagesAction>;
}

const messagesDispatch: React.Dispatch<ISetMessagesAction> = () => {};

export const JoinContext = React.createContext<IJoinStateDTO>(initialJoinState);
export const UsersContext =
  React.createContext<IUsersStateDTO>(initialUsersState);
export const MessagesContext = React.createContext<IMessagesContextDTO>({
  messagesState: { messages: [] },
  messagesDispatch,
});
