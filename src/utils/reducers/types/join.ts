export interface IJoinDTO {
  joined?: boolean;
  roomId: string;
  userName: string;
}

export interface IJoinAction {
  type: EJoin;
  payload: IJoinDTO;
}

export enum EJoin {
  SET_JOIN = "SET_JOIN",
  SET_USERS = "SET_USERS",
  PUSH_MESSAGE = "PUSH_MESSAGE",
}
