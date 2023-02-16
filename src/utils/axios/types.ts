import { IMessage } from "../../types";

export interface IGetRoomData {
  data: {
    users: string[];
    messages: IMessage[];
  };
}
