import { EActionTypes } from './enum';
import { IMessageDTO } from '../../dto/message';

export interface IAddMessagePayloadDTO {
  message: IMessageDTO;
}

export interface IUploadMessagesDTO {
  messages: IMessageDTO[];
}

export interface IAddMessageAction {
  type: EActionTypes;
  payload: IAddMessagePayloadDTO | IUploadMessagesDTO;
}
