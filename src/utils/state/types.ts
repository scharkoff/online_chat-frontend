import { IMessage } from "../../types";

export interface IState {
  joined: boolean;
  userName?: string;
  roomId?: string;
  users?: string[];
  messages: IMessage[];
}
