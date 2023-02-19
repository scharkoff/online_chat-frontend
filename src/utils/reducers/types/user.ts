import { IUserDTO } from "../../../components/dto/user";
import { EJoin } from "./join";

interface ISetUsersPayloadDTO {
  users: IUserDTO[];
}

export interface ISetUsersAction {
  type: EJoin;
  payload: ISetUsersPayloadDTO;
}
