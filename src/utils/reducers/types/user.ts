import { EActionTypes } from "./enum";
import { IUserDTO } from "../../dto/user";

interface ISetUsersPayloadDTO {
  users: IUserDTO[];
}

export interface ISetUsersAction {
  type: EActionTypes;
  payload: ISetUsersPayloadDTO;
}
