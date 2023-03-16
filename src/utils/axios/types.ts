import { IUserDTO } from "../dto/user";
import { IMessageDTO } from "../dto/message";

export interface IGetRoomDataDTO {
  data: {
    users: IUserDTO[];
    messages: IMessageDTO[];
  };
}
