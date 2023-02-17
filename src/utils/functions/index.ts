import { EJoin } from "../reducers/types/join";
import { IUserDTO } from "../../components/dto/user";
import { IMessageDTO } from "../../components/dto/message";
import { ISetUsersAction } from "../reducers/types/user";
import { ISetMessagesAction } from "../reducers/types/messages";
import { IUsersStateDTO } from "../state/types/user";
import { IMessagesStateDTO } from "../state/types/messages";

export function setUsers(
  users: IUserDTO[],
  dispatch: React.Dispatch<ISetUsersAction>,
  state: IUsersStateDTO
) {
  console.log("users from setUsers: ", users);
  dispatch({
    type: EJoin.SET_USERS,
    payload: { users },
  });
}

export function addMessage(
  message: IMessageDTO,
  dispatch: React.Dispatch<ISetMessagesAction>,
  state: IMessagesStateDTO
) {
  dispatch({
    type: EJoin.PUSH_MESSAGE,
    payload: { message },
  });
}
