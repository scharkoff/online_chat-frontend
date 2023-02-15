import { IState } from "./types";

const initialState: IState = {
  joined: false,
  userName: "",
  roomId: "",
  users: [],
  messages: [],
};

export default initialState;
