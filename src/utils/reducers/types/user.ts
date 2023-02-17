import { IUserDTO } from "../../../components/dto/user";
import { EJoin } from "./join";

interface IUsersPayloadDTO {
  users: IUserDTO[];
}

export interface ISetUsersAction {
  type: EJoin;
  payload: IUsersPayloadDTO;
}
