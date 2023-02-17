import { ISetUsersAction } from "./types/user";
import { IUsersStateDTO } from "../state/types/user";

export default function usersReducer(
  state: IUsersStateDTO,
  action: ISetUsersAction
): IUsersStateDTO {
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
