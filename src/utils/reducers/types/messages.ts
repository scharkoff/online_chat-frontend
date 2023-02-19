import { IMessageDTO } from "../../../components/dto/message";
import { EJoin } from "./join";

interface IAddMessagePayloadDTO {
  message: IMessageDTO;
}

export interface IAddMessageAction {
  type: EJoin;
  payload: IAddMessagePayloadDTO;
}
