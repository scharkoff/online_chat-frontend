import { IUserDTO } from "../../components/dto/user";
import { IMessageDTO } from "../../components/dto/message";

export interface IGetRoomDataDTO {
  data: {
    users: IUserDTO[];
    messages: IMessageDTO[];
  };
}
