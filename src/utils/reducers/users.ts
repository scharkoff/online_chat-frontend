import { ISetUsersAction } from "./types/user";
import { IUsersState } from "../state/types/user";

export default function usersReducer(
  state: IUsersState,
  action: ISetUsersAction
): IUsersState {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload.users,
      };

    default:
      return state;
  }
}
