import { IUserDTO } from "../dto/user";
import { IMessageDTO } from "../dto/message";

export interface IUserListDTO {
  roomId?: string;
  users?: IUserDTO[];
  messages?: IMessageDTO[];
}
