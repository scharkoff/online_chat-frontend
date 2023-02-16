import { IJoin } from "./types/join";
import { IState } from "../state/types";

export default function joinReducer(state: IState, action: IJoin): IState {
  switch (action.type) {
    case "SET_JOIN":
      return {
        ...state,
        joined: true,
        roomId: action.payload.roomId,
        userName: action.payload.userName,
      };

    case "SET_USERS":
      return {
        ...state,
        users: action.payload.users,
      };

    case "PUSH_MESSAGE":
      console.log("action.payload.message", action.payload.message);
      return {
        ...state,
        // @ts-ignore
        messages: [...state.messages, action.payload.message],
      };

    default:
      return state;
  }
}
