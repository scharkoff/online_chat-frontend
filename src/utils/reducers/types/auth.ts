export interface IAuth {
  type: EAuth;
  payload: boolean;
}

export enum EAuth {
  IS_AUTH = "SET_IS_AUTH",
}
