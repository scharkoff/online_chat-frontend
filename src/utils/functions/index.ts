import { EJoin } from "../reducers/types/join";
import { IUserDTO } from "../../components/dto/user";
import { IMessageDTO } from "../../components/dto/message";
import { ISetUsersAction } from "../reducers/types/user";
import { IAddMessageAction } from "../reducers/types/messages";
import { IUsersState } from "../state/types/user";
import { IMessagesState } from "../state/types/messages";

export function setUsers(
  users: IUserDTO[],
  dispatch: React.Dispatch<ISetUsersAction>,
  state: IUsersState
) {
  console.log("users from setUsers: ", users);
  dispatch({
    type: EJoin.SET_USERS,
    payload: { users },
  });
}

export function addMessage(
  message: IMessageDTO,
  dispatch: React.Dispatch<IAddMessageAction>
) {
  dispatch({
    type: EJoin.PUSH_MESSAGE,
    payload: { message },
  });
}
