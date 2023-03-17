import { IMessagesState } from '../state/types/messages';
import {
  IAddMessageAction,
  IAddMessagePayloadDTO,
  IUploadMessagesDTO,
} from './types/messages';

function isIAddMessagePayloadDTO(arg: any): arg is IAddMessagePayloadDTO {
  return typeof arg !== 'undefined';
}

function isIUploadMessagesDTO(arg: any): arg is IUploadMessagesDTO {
  return typeof arg !== 'undefined';
}

export default function messagesReducer(
  state: IMessagesState,
  action: IAddMessageAction
): IMessagesState {
  switch (action.type) {
    case 'PUSH_MESSAGE':
      if (isIAddMessagePayloadDTO(action.payload)) {
        return {
          ...state,
          messages: [...state.messages, action.payload.message],
        };
      } else {
        return {
          ...state,
          messages: [...state.messages],
        };
      }

    case 'UPLOAD_MESSAGES':
      if (isIUploadMessagesDTO(action.payload)) {
        return {
          ...state,
          messages: [...state.messages, ...action.payload.messages],
        };
      } else {
        return {
          ...state,
          messages: [...state.messages],
        };
      }

    default:
      return state;
  }
}
