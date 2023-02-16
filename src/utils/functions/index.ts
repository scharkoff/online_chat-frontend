import { EJoin, IJoin } from "../reducers/types/join";
import { IState } from "../state/types";
import { IMessage } from "../../types";

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

export function addMessage(
  message: IMessage,
  dispatch: React.Dispatch<IJoin>,
  state: IState
) {
  dispatch({
    type: EJoin.PUSH_MESSAGE,
    payload: { message },
  });
}
