import { EActionTypes } from "./enum";
import { IUserDTO } from "../../../components/dto/user";

interface ISetUsersPayloadDTO {
  users: IUserDTO[];
}

export interface ISetUsersAction {
  type: EActionTypes;
  payload: ISetUsersPayloadDTO;
}
