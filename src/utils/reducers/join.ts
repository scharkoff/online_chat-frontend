import { IJoinAction } from "./types/join";
import { IJoinState } from "../state/types/join";

export default function joinReducer(
  state: IJoinState,
  action: IJoinAction
): IJoinState {
  switch (action.type) {
    case "SET_JOIN":
      return {
        ...state,
        joined: true,
        roomId: action.payload.roomId,
        userName: action.payload.userName,
      };

    default:
      return state;
  }
}
