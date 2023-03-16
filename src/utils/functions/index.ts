import { ISetUsersAction } from '../reducers/types/user';
import { IAddMessageAction } from '../reducers/types/messages';
import { IUsersState } from '../state/types/user';
import { EActionTypes } from '../reducers/types/enum';
import { IUserDTO } from '../dto/user';
import { IMessageDTO } from '../dto/message';

export function setUsers(
  users: IUserDTO[],
  dispatch: React.Dispatch<ISetUsersAction>,
  state: IUsersState
) {
  dispatch({
    type: EActionTypes.SET_USERS,
    payload: { users },
  });
}

export function addMessage(
  message: IMessageDTO,
  dispatch: React.Dispatch<IAddMessageAction>
) {
  dispatch({
    type: EActionTypes.PUSH_MESSAGE,
    payload: { message },
  });
}
