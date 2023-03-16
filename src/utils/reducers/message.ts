import { IMessagesState } from '../state/types/messages';
import { IAddMessageAction } from './types/messages';

export default function messagesReducer(
  state: IMessagesState,
  action: IAddMessageAction
): IMessagesState {
  switch (action.type) {
    case 'PUSH_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload.message],
      };

    default:
      return state;
  }
}
