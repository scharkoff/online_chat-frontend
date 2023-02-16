import { IMessage } from "../../types";
import { IJoin } from "../../utils/reducers/types/join";
import { IState } from "../../utils/state/types";

export interface IAddMessageProps {
  userName?: string;
  roomId?: string;
  addMessage: (
    message: IMessage,
    dispatch: React.Dispatch<IJoin>,
    state: IState
  ) => void;
  state: IState;
  dispatch: React.Dispatch<IJoin>;
}
