import { IState } from "../../utils/state/types";
import { IMessage } from "../../types";
import { IJoin } from "../../utils/reducers/types/join";

export interface IChatProps {
  state: IState;
  addMessage: (
    message: IMessage,
    dispatch: React.Dispatch<IJoin>,
    state: IState
  ) => void;
  dispatch: React.Dispatch<IJoin>;
}
