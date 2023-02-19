import { EActionTypes } from "./enum";

export interface IJoinDTO {
  joined: boolean;
  roomId: string;
  userName: string;
}

export interface IJoinAction {
  type: EActionTypes;
  payload: IJoinDTO;
}
