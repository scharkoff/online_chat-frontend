import { IMessage } from "../../../types";

interface IJoinPayload {
  joined?: boolean;
  roomId?: string;
  userName?: string;
  users?: string[];
  message?: IMessage;
}

export interface IJoin {
  type: EJoin;
  payload: IJoinPayload;
}

export enum EJoin {
  SET_JOIN = "SET_JOIN",
  SET_USERS = "SET_USERS",
  PUSH_MESSAGE = "PUSH_MESSAGE",
}
