import { IMessageDTO } from "../../../components/dto/message";
import { EActionTypes } from "./enum";

interface IAddMessagePayloadDTO {
  message: IMessageDTO;
}

export interface IAddMessageAction {
  type: EActionTypes;
  payload: IAddMessagePayloadDTO;
}
