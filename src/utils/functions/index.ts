import { EJoin, IJoin } from "../reducers/types/join";
import { IState } from "../state/types";

export function setUsers(
  users: string[],
  dispatch: React.Dispatch<IJoin>,
  state: IState
) {
  dispatch({
    type: EJoin.SET_USERS,
    payload: { ...state, users },
  });
}
