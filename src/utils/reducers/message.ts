import { IMessagesState } from "../state/types/messages";
import { IAddMessageAction } from "./types/messages";

export default function messagesReducer(
  state: IMessagesState,
  action: IAddMessageAction
): IMessagesState {
  switch (action.type) {
    case "PUSH_MESSAGE":
      console.log("action.payload.message", action.payload.message);
      return {
        ...state,
        messages: [...state.messages, action.payload.message],
      };

    default:
      return state;
  }
}
