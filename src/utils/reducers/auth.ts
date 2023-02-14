import { IAuth } from "./types/auth";
import { IState } from "../state/types";

export default function authReducer(state: IState, action: IAuth) {
  switch (action.type) {
    case "SET_IS_AUTH":
      return { ...state, isAuth: action.payload };

    default:
      return state;
  }
}
