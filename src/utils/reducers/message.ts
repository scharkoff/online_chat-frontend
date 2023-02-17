import { IMessagesStateDTO } from "../state/types/messages";
import { ISetMessagesAction } from "./types/messages";

export default function messagesReducer(
  state: IMessagesStateDTO,
  action: ISetMessagesAction
): IMessagesStateDTO {
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
