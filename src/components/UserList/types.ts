import { IMessage } from "../../types";

export interface IUserListProps {
  roomId?: string;
  users?: string[];
  messages?: IMessage[];
}
