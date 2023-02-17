import { IMessageDTO } from "../../../components/dto/message";
import { EJoin } from "./join";

interface IMessagePayloadDTO {
  message: IMessageDTO;
}

export interface ISetMessagesAction {
  type: EJoin;
  payload: IMessagePayloadDTO;
}
