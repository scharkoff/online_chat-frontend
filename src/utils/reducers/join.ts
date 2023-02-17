import { IJoinAction } from "./types/join";
import { IJoinStateDTO } from "../state/types/join";

export default function joinReducer(
  state: IJoinStateDTO,
  action: IJoinAction
): IJoinStateDTO {
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
