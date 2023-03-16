import { EActionTypes } from "./enum";
import { IMessageDTO } from "../../dto/message";

interface IAddMessagePayloadDTO {
  message: IMessageDTO;
}

export interface IAddMessageAction {
  type: EActionTypes;
  payload: IAddMessagePayloadDTO;
}
